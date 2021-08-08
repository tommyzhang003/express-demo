var express = require('express');
var User = require('../models/user')
var LoginIP = require('../models/loginIp')
var jsonData = require('./data')
var router = express.Router();

const mobileWhilist = ['964689945', '123456783', '15111111111', '15111111113', '15111111117', '15111111112', '15111111118', '15111111114', '18576616462']

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
    const ip = req.ips.toString() || req.ip
    data.ip = ip
    if (mobile === '967411328') {
        res.json({
            data: {
                fetchInterval: 1, // 分钟
                clearInterval: 5760,// 分钟
                noticeContent: {
                    strategy: 1,
                    isAd: true,
                    data: [
                        {
                            type: 'normal',
                            desc: "<div style=\"font-size: 23px; text-align: center; color: red;\" ui-type=\"h5\" ui-comp=\"TextView\">🔥限时活动🔥</div>\n<div style=\"font-size: 17px;text-align: center;color: yellow;\" ui-type=\"h5\" ui-comp=\"LinkView\" ui-comp-event-props-url=\"https://dev.d3dsq7lelzkuwf.amplifyapp.com\" ui-comp-event-click=\"toUrl\">官方内部帐号开放购买，永久会员无需注册，只需100</div>\n<div ui-type=\"h5\" ui-comp=\"TextView\" style=\"white-space: normal; text-align: center;\">AppleStore版本已经上线了</div>\n<div ui-type=\"h5\" ui-comp=\"TextView\" style=\"white-space: normal; text-align: center;\">观影体验更佳，马上下载吧！</div>\n<div ui-type=\"h5\" ui-comp=\"TextView\" style=\"white-space: normal; text-align: center;\">更有缓存功能想看就看！</div>\n<div ui-type=\"h5\" ui-comp=\"ButtonView\" style=\"white-space: normal; text-align: center;\" ui-comp-event-click=\"toBoBoAppleStoreApp\">AppleStore下载</div>",
                            cover: 'https://assetscdn2.jable.tv/contents/videos_screenshots/16000/16035/320x180/1.jpg',
                            link: 'https://jable.tv/videos/hnd-991/'
                        }
                    ]
                },
            }
        })
    } else {
        res.json(jsonData)
    }
    if (data.user_code || data.guest_code) {
        User.updateOne({user_code: data.user_code}, {
            ...data,
            last_login_time: new Date()
        }, {upsert: true}, (err, writeOpResult) => {
        })
    }
    if (data.mobile && mobileWhilist.indexOf(data.mobile) > -1) {
        LoginIP.updateOne({mobile: data.mobile, ip: ip}, {
            mobile: data.mobile,
            ip: ip,
            login_time: Date.now()
        }, {upsert: true}, (err, writeOpResult) => {
        })
    }
});


module.exports = router;
