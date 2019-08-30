const express = require('express')

const router = express.Router()

const { check, validationResult } = require('express-validator')

// const knex = require('../../knex/kenx')

router.post(
  '/',
  [
    check('name')
      .exists({ checkFalsy: true })
      .withMessage('Full name is required')
      .isLength({ min: 2, max: 20 })
      .withMessage('Full name must be between 2 and 20 characters')
      .not()
      .matches('[0-9]')
      .withMessage('Full name cannot contain number'),

    check('address.address1')
      .not()
      .isEmpty()
      .withMessage('Address cannot be empty'),
    check('address.address2')
      .not()
      .isEmpty()
      .withMessage('Address cannot be empty'),
    check('address.city')
      .not()
      .isEmpty()
      .withMessage('City cannot be empty'),
    check('address.state')
      .not()
      .isEmpty()
      .withMessage('State cannot be empty'),
    check('address.zipCode')
      .not()
      .isEmpty()
      .withMessage('Zipcode cannot be empty')
      .isPostalCode('any')
      .withMessage('Invalid Zip/Postal Code'),
    check('address.phone')
      .not()
      .isEmpty()
      .withMessage('Phone cannot be empty')
      .matches(/^\+[0-9]{0,14}$/)
      .withMessage('Invalid Phone')
  ],
  // eslint-disable-next-line consistent-return
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() })
      return
    }

    res.status(200).json({ success: true })
  }
)

module.exports = router
