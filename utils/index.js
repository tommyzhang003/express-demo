exports.orderCode = function (len = 4) {
    // 存放订单号
    let orderCode = '';

    // 6位随机数(加在时间戳后面)
    for (let i = 0; i < len; i++) {
        orderCode += Math.floor(Math.random() * 10);
    }
    // 时间戳(用来生成订单号)
    orderCode = 'Yd' + new Date().getTime() + orderCode;

    return orderCode
}