const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Country = new Schema(
    {
        name: { type: String, required: true },
        isRestricted: { type: Boolean, required: true },
        hasEntryRestrictions: { type: Boolean, required: true },
        Entry: { type: String, required: false },
        curfew: { type: Boolean, required: true },
        curfewInformation: { type: String, required: false },
        gymRestricted: { type: Boolean, required: true },
        gymInformation: { type: String, required: false },
        restaurantRestricted: { type: Boolean, required: true },
        restaurantInformation: { type: String, required: false },
        outdoorRestricted: { type: Boolean, required: true },
        outdoorInformation: { type: String, required: false }
    },
    { timestamps: true },
)

module.exports = mongoose.model('countries', Country)