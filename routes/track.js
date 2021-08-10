var express = require('express');
var User = require('../models/user')
var jsonData = require('./data')
var router = express.Router();

// 1 总是显示 非1有条件显示
/* GET users listing. */
//
router.get('/', function (req, res, next) {
    const {code, step, source} = req.query
    if(code) {
        User.updateOne({$or: [{user_code: code},{guest_code: code}]}, {step: step, source: source}, {upsert: true}, (err, writeOpResult) => {
        })
    }
    res.json('success')
});


module.exports = router;
