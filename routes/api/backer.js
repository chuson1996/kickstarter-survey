const express = require('express')

const router = express.Router()
const knex = require('../../knex/kenx')

router.get('/', async (req, res) => {
  try {
    const allBackers = await knex('backer').select('*')
    res.status(200).send(allBackers)
  } catch (error) {
    res.status(500).send({ error })
  }
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
