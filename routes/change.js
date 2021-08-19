var express = require('express');
var Product = require('../models/product')
var axios = require('axios');
var Utils = require('../utils')
var SocksProxyAgent = require('socks-proxy-agent');
const fs = require("fs");
const path = require("path");
var router = express.Router();

const httpsAgent = new SocksProxyAgent({
    host: '13.250.61.146',
    port: 9090,
    userId: 'gost',
    protocol: 'socks5',
    password: 'sdfrDrNUzd0usYySEeboM9uJEzHLMx0MzISFbjjq0Q23'
})

const headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "pragma": "no-cache",
    "token": "eyJhbGciOiJIUzI1NiJ9.eyQZWzdWIiOiJzdWJWYWx1ZSIsInVzZXJJbmZvIjoie1wiY2R5XCI6XCJzdXBlcl9hZG1pblwiLFwiY2hhbm5lbENvZGVcIjpcIm1haW5cIixcImdvb2dsZUtleVwiOlwiUzdIQVFRR1VJWURGNlpYRlwiLFwiaWRcIjpcIjhhYWE4NTRjNzI5M2EzMDAwMTcyOTNiNTA4NGEwMDAwXCIsXCJuaWNrbmFtZVwiOlwi5ZW15ZW1XCIsXCJvcGVuXCI6ZmFsc2UsXCJyb2xlSWRcIjo3LFwidXNlcm5hbWVcIjpcImJvYm9fc2VydmljZVwifSIsImlhdCI6MTYyOTAxNzQzNSwiZXhwIjoxNjI5NjIyMjM1fQeyJ.xtOddjKjTn0q1_8xV_iBzvxRf7ApW5FIBpn8_7K9Y9M",
    "cookie": "JSESSIONID=95AF6BB936143FD032ECA71B4AFD0562",
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
}

const genTxt = (content, callback) => {
    let now = new Date()
    let date = now.getFullYear()
    let month = now.getMonth() + 1
    let day = now.getDay()
    let hour = now.getHours()
    let min = now.getMinutes()
    let second = now.getSeconds()
    let name = `${date}-${month}-${day}T${hour}-${min}-${second}.txt`
    fs.writeFile(path.join(__dirname, `../files/${name}`), content, {flag: 'w+'}, err => {
        if (err) {
            console.error(err)
            callback('fail')
            return
        }
        callback('success')
    })
}

router.get('/gen', async function (req, res,next) {
    let docs = []
    let content = ''
    let {sign} = req.query
    if(sign !== 'cqmygysdss001') {
        res.json('fail')
        return
    }
    for(let i = 0; i < 300; i++) {
        let account = Utils.orderCode()
        let password = '123456'
        content += `${account} ${password}\n`
        docs.push({
            name: 'VIP月卡',
            account: account,
            password: password,
        })
    }
    genTxt(content, async (status) => {
        if(status === 'success') {
            const result = await Product.insertMany(docs)
            res.json('success')
        } else {
            res.json('false')
        }
    })
})

router.post('/vip', async function (req, res, next) {
    const {code, account, password} = req.body
    // if(sign !== 'cqmygysdss001') return
    if(!code || !account || !password) {
        res.json('error')
        return
    }
    const result = await Product.findOne({account: account, password: password})
    if(result) {
        if(result.status === 0) {
            const url = 'http://fx-prod.bo.center/fx/exchange-code/activeSendVip'
            // const url = 'http://fx-prod.bo.center/fx/exchange-code/system/rechargeWallet'
            axios({
                method: 'POST',
                url: url,
                httpAgent: httpsAgent,
                headers: headers,
                // data: {
                //     username: 'bobo_service',
                //     password: 'd74ec8f483da948606e6837aaead898b'
                // },
                data: {
                    channel: 'main',
                    code: code, //'6BNNTPKZOZU',
                    days: '30',
                    description: 'VIP月卡',
                    only_id: '',
                    type: 'VIP',
                },
                // data: {
                //     channel: 'main',
                //     code: code, //'6BNNTPKZOZU',
                //     rechargeValue: '10',
                //     description: '充值10',
                //     only_id: '',
                //     systemId: '8aaa854c7293a300017293b5084a0000'
                // }
            }).then(response => {
                const {data, message, status, stamp, timestamp} = response.data
                if(status === 200) {
                    Product.updateOne({account: account, password: password},{
                        user_code: code,
                        change_time: new Date(),
                        status: 1
                    }, {upsert:true},function (err, result) {
                        if(err) {
                            console.log(err)
                        } else {
                            console.log(result)
                        }
                    })
                    res.json('success')
                } else {
                    res.json(message)
                }
            }).catch(error => {
                res.json('error')
            })
        } else {
            res.json({
                code: 0,
                message: '你已经兑换过了'
            })
        }
    } else {
        res.json({
            code: 0,
            message: '无效卡密'
        })
    }
});


module.exports = router;
