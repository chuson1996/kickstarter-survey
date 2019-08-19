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

app.use(express.static('client/build/'))

app.use('/api/v1/order', order)
app.use('/api/v1/delivery', delivery)
app.use('/api/v1/backer', backer)

// console.log('dirmane', path.resolve(__dirname, 'client', 'build', 'index.html'))

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// })

const PORT = 5000
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`)
})
