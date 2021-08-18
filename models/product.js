const mongoose = require("mongoose")

const schema = mongoose.Schema({
    user_code: String,
    name: String,
    account: String,
    password: String,
    status: {
        type: Number,
        default: 0
    },
    change_time: Date,
}, {
    timestamps: { createdAt: 'created_at' }
})

module.exports = mongoose.model("Product", schema)