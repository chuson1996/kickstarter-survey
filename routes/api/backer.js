const express = require('express')
const router = express.Router()
const knex = require('../../knex/kenx')

// const backersToMailChimp = require('../../mailchimp')

router.get('/', async (req, res) => {
  const allBackers = await knex('backer').select('*')
  res.send(allBackers)
})

router.get('/:id', async (req, res) => {
  try {
    const emails = await knex('backer')
      .select('*')
      .where('backer_id', req.params.id)
    res.send(emails)
  } catch (error) {
    res.status(404).send({ error: 'Not Found' })
  }
})

module.exports = router
