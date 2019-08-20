require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const app = express()
app.use(cors())

const order = require('./routes/api/order')
const delivery = require('./routes/api/delivery')
const backer = require('./routes/api/backer')

// Constants

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//survey routes

app.use('/api/v1/order', order)
app.use('/api/v1/delivery', delivery)
app.use('/api/v1/backer', backer)

app.use(express.static(__dirname + '/client/build'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`)
})
