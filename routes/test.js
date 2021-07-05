var express = require('express');
var router = express.Router();

// 1 总是显示 非1有条件显示
/* GET users listing. */
//
router.get('/', function (req, res, next) {
    res.json({
        name: '111'
    })
});


module.exports = router;
