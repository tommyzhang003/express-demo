var express = require('express');
var User = require('../models/user')
var jsonData = require('./data')
var router = express.Router();

// 1 总是显示 非1有条件显示
/* GET users listing. */
//
router.get('/', function (req, res, next) {
    res.json()
});


module.exports = router;
