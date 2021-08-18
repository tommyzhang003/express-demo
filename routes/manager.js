var express = require('express');
var User = require('../models/user')
var jsonData = require('./data')
var axios = require('axios');
var SocksProxyAgent = require('socks-proxy-agent');
var router = express.Router();


// 1 总是显示 非1有条件显示
/* GET users listing. */
//
router.get('/', function (req, res, next) {
    const {vipType, platform} = req.query
    User.count({last_buy_vip_type: vipType, device_platform:platform},function (err, count) {
        if(err) {
            console.error(err)
        } else {
            res.json({count})
        }
    })
});

router.get('/proxy', function (err,res,next) {
    const httpsAgent = new SocksProxyAgent({
        host: '13.250.61.146',
        port: 9090,
        userId: 'gost',
        protocol: 'socks5',
        password: 'sdfrDrNUzd0usYySEeboM9uJEzHLMx0MzISFbjjq0Q23'
    });
    const url = 'http://fx-prod.bo.center/webapp/order/feed/user'
    axios.get(url, {
        httpAgent: httpsAgent,
    }).then(response => {
        res.send(response.data)
        // console.log(response.data);
    }).catch(error => {
        res.json('error')
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            // console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        // console.log(error.config);
        // console.log(error);
    })
})


module.exports = router;
