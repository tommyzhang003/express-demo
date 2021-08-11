const mongoose = require("mongoose")

const schema = mongoose.Schema({
    user_code: String,
    source: String,
    pushed: Boolean,
    visited: Boolean,
    bought: Boolean,
    payed: Boolean,
    mobile: String,
    visit_time: Date,
    buy_time: Date,
    finish: Boolean,
    ip: String,
}, {
    timestamps: { createdAt: 'created_at' }
})

module.exports = mongoose.model("Order", schema)