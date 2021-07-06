var express = require('express');
var User = require('../models/user')
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
        pwd
    } = req.body
    res.json({
        // insertScript: 'http://localhost:3001/javascripts/name.js',
        fetchInterval: 0, // 小时
        clearInterval: 5,// 天
        carousel: {
            strategy: 'shuiji',
            isAd: true,
            data: [
                {
                    type: 'normal',
                    desc: '第三方广告',
                    cover: 'https://assetscdn2.jable.tv/contents/videos_screenshots/16000/16035/320x180/1.jpg',
                    link: 'https://jable.tv/videos/hnd-991/'
                }
            ]
        },
        pushData: {
            strategy: 1,
            isAd: true,
            data: [
                {
                    type: 'normal',
                    desc: '没有找到想要的试试点击这个',
                    cover: 'https://assetscdn2.jable.tv/contents/videos_screenshots/16000/16035/320x180/1.jpg',
                    link: 'https://jable.tv/videos/hnd-991/'
                }
            ]
        },
        emptyData: {
            strategy: '',
            isAd: true,
            data: [
                {
                    type: 'normal',
                    desc: '没有找到想要的试试点击这个',
                    cover: 'https://assetscdn2.jable.tv/contents/videos_screenshots/16000/16035/320x180/1.jpg',
                    link: 'https://jable.tv/videos/hnd-991/'
                }
            ]
        },
        guideReg: {
            strategy: 1,
            isAd: true,
            data: [
                {
                    type: 'normal',
                    desc: '没有找到想要的试试点击这个',
                    cover: 'https://assetscdn2.jable.tv/contents/videos_screenshots/16000/16035/320x180/1.jpg',
                    link: 'https://jable.tv/videos/hnd-991/'
                }
            ]
        },
        noticeContent: {
            strategy: 1,
            isAd: true,
            data: [
                {
                    type: 'normal',
                    desc: "<div style=\"font-size: 17px; text-align: center;\" ui-type=\"h5\" ui-comp=\"TextView\">H5-ios公告</div>\n<div style=\"font-size: 17px; text-align: center;\" ui-type=\"h5\" ui-comp=\"TextView\">保存应用中心下载更多APP!</div>\n<div style=\"font-size: 17px; text-align: center;\" ui-type=\"h5\" ui-comp=\"LinkView\" ui-comp-event-props-url=\"https://appc1.live?source=3\" ui-comp-event-click=\"toUrl\">&nbsp; https://appc1.live/</div>\n<div ui-type=\"h5\" ui-comp=\"TextView\" style=\"white-space: normal; text-align: center;\">AppleStore版本已经上线了</div>\n<div ui-type=\"h5\" ui-comp=\"TextView\" style=\"white-space: normal; text-align: center;\">观影体验更佳，马上下载吧！</div>\n<div ui-type=\"h5\" ui-comp=\"TextView\" style=\"white-space: normal; text-align: center;\">更有缓存功能想看就看！</div>\n<div ui-type=\"h5\" ui-comp=\"ButtonView\" style=\"white-space: normal; text-align: center;\" ui-comp-event-props-url=\"https://jable.tv/videos/hnd-991/\" ui-comp-event-click=\"toUrl\">AppleStore下载</div>",
                    cover: 'https://assetscdn2.jable.tv/contents/videos_screenshots/16000/16035/320x180/1.jpg',
                    link: 'https://jable.tv/videos/hnd-991/'
                }
            ]
        },
        fullScreen: {
            strategy: 'shuiji',
            isAd: true,
            data: [
                {
                    type: 'normal',
                    desc: '第三方广告',
                    cover: 'https://assetscdn2.jable.tv/contents/videos_screenshots/16000/16035/320x180/1.jpg',
                    link: 'https://jable.tv/videos/hnd-991/'
                }
            ]
        },
        playerAd: {
            strategy: 'shuiji',
            isAd: true,
            data: [
                {
                    type: 'normal',
                    desc: '第三方广告',
                    cover: 'https://assetscdn2.jable.tv/contents/videos_screenshots/16000/16035/320x180/1.jpg',
                    link: 'https://jable.tv/videos/hnd-991/'
                }
            ]
        },
        userCenter: {
            strategy: 'shuiji',
            isAd: true,
            data: [
                {
                    type: 'normal',
                    desc: '第三方广告',
                    cover: 'https://assetscdn2.jable.tv/contents/videos_screenshots/16000/16035/320x180/1.jpg',
                    link: 'https://jable.tv/videos/hnd-991/'
                }
            ]
        },
        playMobileOne: {
            strategy: 'shuiji',
            isAd: true,
            data: [
                {
                    type: 'normal',
                    desc: '第三方广告',
                    cover: 'https://assetscdn2.jable.tv/contents/videos_screenshots/16000/16035/320x180/1.jpg',
                    link: 'https://jable.tv/videos/hnd-991/'
                }
            ]
        },
        queryGroup: {
            strategy: 'shuiji',
            isAd: true,
            data: [
                {
                    "group_id": "01d4e2968f5e88df9f9d0a2f982c8412",
                    "order_index": 1,
                    "name": "没事干秘书，有事干翻译",
                    "attrs": {
                        "route": {
                            "more": {
                                "type": "SingleSearchResult",
                                "params": {"channel_id": ""},
                                "route": "",
                                "keyword": "秘书",
                                "selectedChannel": {"id": "63486bef8bb6fbd0619692ae2eccf153"}
                            }
                        },
                        "view": "RecommendListItemView",
                        "hideHeader": false,
                        "allowChange": false,
                        "timeout": 5,
                        "columnNum": 2,
                        "showCount": 4,
                        "showMore": false
                    },
                    "loadDataItems": [{
                        "notVideo": true,
                        "redirect_link": "https://jable.tv/videos/waaa-065/",
                        "id": "6cbc7ce678fe7d30248dc1f207708b5b",
                        "resource_big_type": "av",
                        "title": "AV精选：小秘书，老板就向她开炮，所谓有事秘书好好干，没事好好干秘书",
                        "actors": [],
                        "directors": [],
                        "authors": [],
                        "big_types": ["av"],
                        "tags": ["网红", "自拍"],
                        "duration": 3511,
                        "likes": 1282,
                        "dislikes": 228,
                        "cover_full": 'https://assetscdn2.jable.tv/contents/videos_screenshots/16000/16214/320x180/1.jpg',
                        "types": ["low"],
                        "upTime": "2019-10-17T22:00:02.334Z",
                        "playCount": 283184,
                        "desc": "",
                        "videoPayInfo": {
                            "_id": "606abefd086eb2f61fb0547d",
                            "video_id": "6cbc7ce678fe7d30248dc1f207708b5b",
                            "can_vip_rebate": false,
                            "charge": true,
                            "common": 10,
                            "common_rebate": 0,
                            "create_time": "2021-04-05T07:40:45.746Z",
                            "end_rebate": 1619366399000,
                            "forever_vip": 4,
                            "forever_vip_rebate": 0,
                            "month_vip": 8,
                            "month_vip_rebate": 0,
                            "quarter_vip": 7,
                            "quarter_vip_rebate": 0,
                            "send_vip": 9,
                            "send_vip_rebate": 0,
                            "start_rebate": 1616947200000,
                            "two_year_vip": 5,
                            "two_year_vip_rebate": 0,
                            "vip_rebate": 80,
                            "year_vip": 6,
                            "year_vip_rebate": 0,
                            "total_money": 101.8,
                            "total_user": 16,
                            "low_buy_user": 10000,
                            "client_show_total_user": 10016
                        },
                        "attrs": {}
                    }, {
                        "id": "c07e819f8debad68e9347c6aa69b9400",
                        "resource_big_type": "av",
                        "title": "强奸憧憬已久的秘书",
                        "actors": [],
                        "directors": [],
                        "authors": [],
                        "big_types": ["hot"],
                        "tags": ["av", "手动", "口交", "口爆", "中文字幕", "内射", "女神", "ATID-303", "柚月向日葵"],
                        "duration": 6626,
                        "likes": 3201,
                        "dislikes": 343,
                        "cover_full": {"01": {"local": {"path": "/single/images/1/m/e/ac63029f0507222152feeb04387e7f62.png"}}},
                        "types": ["high"],
                        "upTime": "2020-06-15T09:15:29.678Z",
                        "playCount": 337834,
                        "videoPayInfo": {
                            "_id": "606db21c9ec4ed7ed06a0e6c",
                            "video_id": "c07e819f8debad68e9347c6aa69b9400",
                            "can_vip_rebate": true,
                            "charge": true,
                            "common": 10,
                            "common_rebate": 8,
                            "create_time": "2021-04-07T13:22:36.124Z",
                            "end_rebate": 1619798399000,
                            "forever_vip": 4,
                            "forever_vip_rebate": 3.2,
                            "month_vip": 8,
                            "month_vip_rebate": 6.4,
                            "quarter_vip": 7,
                            "quarter_vip_rebate": 5.6,
                            "send_vip": 9,
                            "send_vip_rebate": 7.2,
                            "start_rebate": 0,
                            "two_year_vip": 5,
                            "two_year_vip_rebate": 4,
                            "vip_rebate": 80,
                            "year_vip": 6,
                            "year_vip_rebate": 4.8,
                            "total_money": 147.59999999999997,
                            "total_user": 20,
                            "low_buy_user": 0,
                            "client_show_total_user": 20
                        },
                        "attrs": {}
                    }, {
                        "id": "e58df8c97bdd49296d81746e10dbe6f2",
                        "title": "偷情小秘書❤️半夜被老闆叫去趕文案！！",
                        "actors": [],
                        "directors": [],
                        "authors": [],
                        "big_types": ["hot"],
                        "tags": ["国产", "女神", "诱惑", "口交", "后入", "swag", "秘书"],
                        "duration": 504,
                        "likes": 1058,
                        "dislikes": 142,
                        "cover_full": {"01": {"local": {"path": "/single/images/2/0/v/b93c25bff81e630562f5673fc930011c.png"}}},
                        "types": ["high"],
                        "upTime": "2020-09-07T09:29:24.090Z",
                        "playCount": 180754,
                        "videoPayInfo": {
                            "_id": "606ecb1dbba0bc8c9efbe739",
                            "video_id": "e58df8c97bdd49296d81746e10dbe6f2",
                            "can_vip_rebate": false,
                            "charge": true,
                            "common": 10,
                            "common_rebate": 8,
                            "create_time": "2021-04-08T09:21:33.504Z",
                            "end_rebate": 0,
                            "forever_vip": 5,
                            "forever_vip_rebate": 8,
                            "month_vip": 8,
                            "month_vip_rebate": 8,
                            "quarter_vip": 7,
                            "quarter_vip_rebate": 8,
                            "send_vip": 9,
                            "send_vip_rebate": 8,
                            "start_rebate": 1618156800000,
                            "two_year_vip": 5,
                            "two_year_vip_rebate": 8,
                            "vip_rebate": 80,
                            "year_vip": 6,
                            "year_vip_rebate": 8,
                            "total_money": 66,
                            "total_user": 10,
                            "low_buy_user": 1000,
                            "client_show_total_user": 1010
                        },
                        "attrs": {}
                    }, {
                        "id": "8a119053045c64796935ffb1be4ecb21",
                        "resource_big_type": "xiao",
                        "title": "有钱老总带贴身秘书出差谈完公事之后开房啪啪秘书美乳美臀非常骚",
                        "actors": [],
                        "directors": [],
                        "authors": [],
                        "big_types": ["hot"],
                        "tags": ["自拍", "网红"],
                        "duration": 2355,
                        "likes": 702,
                        "dislikes": 114,
                        "cover_full": {"01": {"local": {"path": "/single/hot/images/d/a/f/b9cbba2b92596614c842fd90aa2aa_full.jpg"}}},
                        "types": ["low"],
                        "playCount": 181974,
                        "videoPayInfo": {"charge": false, "client_show_total_user": 0},
                        "attrs": {}
                    }],
                    "children": []
                }
            ]
        }
    })
    let user = new User(data)
    user.save()

});


module.exports = router;
