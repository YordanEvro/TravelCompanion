const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./config/db')
const CountryRouter = require('./routes/country_router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'Couldnt connect to MongoDB:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', CountryRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))