var express = require('express');
var User = require('../models/user')
var LoginIP = require('../models/loginIp')
var jsonData = require('./data')
var router = express.Router();

const mobileWhilist = ['123456783']

// 1 总是显示 非1有条件显示
/* GET users listing. */
//
router.post('/', function (req, res, next) {
    const data = {
        isVip,
        hasPwd,
        last_buy_vip_type,
        user_code,
        guest_code,
        wallet_balance,
        promote_count,
        mobile,
        password,
        code,
        pwd,
        income,
        device_platform,
        device_user_type,
        vip_end_time,
        vip_start_time,
        normal_rest_count, //观看次数
        short_rest_count, //短视频观看次数
        user_type,
        welfare_count, //福利次数
        is_register_user, //是否注册了
        isMainLandIp,
        watchTotal = 0,
        strategy_status
    } = req.body
    const ip = req.ip
    res.json(jsonData)
    if(data.user_code || data.guest_code) {
        User.updateOne({user_code: data.user_code}, {...data, last_login_time: new Date()}, {upsert: true}, (err, writeOpResult) => {
        })
    }
    if(data.mobile && mobileWhilist.indexOf(data.mobile) > -1) {
        LoginIP.updateOne({mobile: data.mobile, ip: ip}, {mobile: data.mobile, ip: ip, login_time: Date.now()}, {upsert: true}, (err, writeOpResult) => {
        })
    }
});


module.exports = router;
