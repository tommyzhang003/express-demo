const mongoose = require("mongoose")

const schema = mongoose.Schema({
    mobile: String,
    ip: String,
    login_time: Date
})

schema.index({ mobile: 1});

module.exports = mongoose.model("LoginIP", schema)
