var express = require('express');
var User = require('../models/user')
var jsonData = require('./data')
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


module.exports = router;
