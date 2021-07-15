var express = require('express');
var User = require('../models/user')
var jsonData = require('./data')
var router = express.Router();

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
    } = req.body
    res.json(jsonData)
    if(data.user_code || data.guest_code) {
        User.updateOne({user_code: data.user_code}, {...data, create_time: new Date()}, {upsert: true}, (err, writeOpResult) => {
            console.log(err)
            console.log(writeOpResult)
        })
    }
});


module.exports = router;
