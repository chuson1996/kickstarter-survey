const express = require('express')
const router = express.Router()
const knex = require('../../knex/kenx')

router.get('/', (req, res) => {
  knex
    .select('*')
    .from('delivery')
    .then(data => {
      if (data.length) {
        res.json(data)
      } else {
        res.json({ dataExists: 'false' })
      }
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ dbError: 'db error' })
    })
})

module.exports = router
