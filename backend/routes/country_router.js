const express = require('express')

const CountryController = require('../controllers/country_controller')

const router = express.Router()

router.post('/country/create', CountryController.createCountry)
router.put('/country/update/:id', CountryController.updateCountry)
router.delete('/country/delete/:id', CountryController.deleteCountry)
router.get('/country/:id', CountryController.getCountryById)
router.get('/country/name/:name', CountryController.getCountryByName)
router.get('/countries', CountryController.getCountries)

module.exports = router