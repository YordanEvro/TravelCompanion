const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Subscription = new Schema(
    {
        email: { type: String, required: true },
        isSubscribed: { type: Boolean, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('subscriptions', Subscription)