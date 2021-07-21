const mongoose = require("mongoose")

const schema = mongoose.Schema({
    isVip: Boolean,
    hasPwd: Boolean,
    last_buy_vip_type: String,
    user_code: String,
    guest_code: String,
    wallet_balance: Number,
    promote_count: Number,
    mobile: String,
    password: String,
    code: String,
    pwd: String,
    income: Number,
    vip_end_time: Number,
    vip_start_time: Number,
    normal_rest_count: Number, //观看次数
    short_rest_count: Number, //短视频观看次数
    user_type: String,
    welfare_count: Number, //福利次数
    is_register_user: Boolean, //是否注册了
    isMainLandIp: String, //是否大陆IP 1是，0不是
    strategy_status: String,
    device_platform: String,
    device_user_type: String,
    last_login_time: Date,
    watchTotal: Number,
}, {
    timestamps: { createdAt: 'created_at' }
})

schema.index({ user_code: 1});

module.exports = mongoose.model("User", schema)
