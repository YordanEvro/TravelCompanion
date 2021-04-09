const Country = require('../models/country')

createCountry = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a country',
        })
    }

    const country = new Country(body)

    if (!country) {
        return res.status(400).json({ success: false, error: err })
    }

    country
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: country._id,
                message: 'Country created succesfully',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Country not created',
            })
        })
}

updateCountry = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400)
    }

    Country.findOne({ _id: req.params.id }, (err, country) => {
        if (err) {
            return res.status(404)
        }
        country.name = body.name
        country.isRestricted = body.isRestricted
        country.restrictions = body.restrictions
        country
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: country._id,
                    message: 'Country updated',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Country not updated',
                })
            })
    })
}

deleteCountry = async (req, res) => {
    await Country.findOneAndDelete({ _id: req.params.id }, (err, country) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!country) {
            return res.status(404)
        }

        return res.status(200).json({ success: true, data: country })
    }).catch(err => console.log(err))
}

getCountryById = async (req, res) => {
    await Country.findOne({ _id: req.params.id }, (err, country) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!country) {
            return res.status(404)
        }

        return res.status(200).json({ success: true, data: country })
    }).catch(err => console.log(err))
}

getCountryByName = async (req, res) => {
    await Country.findOne({ name: req.params.name }, (err, country) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!country) {
            return res.status(404)
        }

        return res.status(200).json({ success: true, data: country })
    }).catch(err => console.log(err))
}

getCountries = async (req, res) => {
    await Country.find({}, (err, countries) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!countries.length) {
            return res.status(404)
        }

        return res.status(200).json({ success: true, data: countries })
    }).catch(err => console.log(err))
}

module.exports = {
    createCountry,
    updateCountry,
    deleteCountry,
    getCountryById,
    getCountryByName,
    getCountries,
}