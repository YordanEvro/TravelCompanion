const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Country = new Schema(
    {
        name: { type: String, required: true },
        isRestricted: { type: Boolean, required: true },
        restrictions: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('countries', Country)