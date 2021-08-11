var express = require('express');
var User = require('../models/user')
var jsonData = require('./data')
const Order = require("../models/order");
var router = express.Router();

// 1 总是显示 非1有条件显示
/* GET users listing. */
//
router.get('/', function (req, res, next) {
    const {code, step, source} = req.query
    if(code) {
        Order.updateOne({user_code:code},{
            visit_time: new Date(),
            visited: step === 'enter',
            bought: step === 'tobuy',
            buy_time: new Date(),
            source: source,
        },{upsert:true},(err,writeOpResult) => {
        })
        User.updateOne({$or: [{user_code: code},{guest_code: code}]}, {step: step, source: source}, {upsert: true}, (err, writeOpResult) => {
        })
    }
    res.json('success')
});

router.get('/check', function (req,res,next) {
    const {code} = req.query
    if(code) {
        Order.findOne({user_code:code,bought:true},function (err, doc) {
            if(err) {
                res.json('success')
            } else {
                if(doc) {
                    res.json('no')
                } else {
                    res.json('success')
                }
            }
        })
    }
})


module.exports = router;
