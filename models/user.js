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
})

schema.index({ user_code: 1});

module.exports = mongoose.model("User", schema)
