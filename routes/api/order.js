const express = require('express')

const router = express.Router()

const { check, validationResult } = require('express-validator')

const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(
  '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'
)

const knex = require('../../knex/kenx')

router.get('/', async (req, res) => {
  try {
    const orders = await knex.select('*').from('order')
    res.send(orders)
  } catch (error) {
    res.send(error)
  }
})

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

    check('yourAge')
      .not()
      .isEmpty()
      .withMessage('Please select one of the options above'),
    check('address.address1')
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
      .withMessage('Zipcode cannot be empty'),
    check('address.phone')
      .not()
      .isEmpty()
      .withMessage('Phone cannot be empty')
      .isMobilePhone('any')
      .withMessage('mobile phone is invalid')
  ],
  // eslint-disable-next-line consistent-return
  async (req, res, next) => {
    try {
      const errors = validationResult(req)
      console.log('erroros', errors.isEmpty())
      console.log('req', req.body)
      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() })
        return
      }
      const {
        name,
        email,
        country,
        pledge,
        shoes,
        address: { address1, address2, city, state, zipCode, phone },
        yourAge,
        whyRens
      } = req.body

      const orderInfo = await knex('order')
        .insert({
          name,
          email,
          country,
          pledge
        })
        .returning('*')

      const order = orderInfo[0]
      const delivery = await knex('delivery')
        .insert(
          shoes.map(shoe => ({
            color: shoe.color,
            size: shoe.size,
            address1,
            address2,
            city,
            state,
            zipCode,
            country,
            phone,
            age: yourAge,
            whyRens,
            order_id: order.o_id
          }))
        )
        .returning('*')

      // SendGRid
      // todo : use the email of the user that sends the form ==> order.email
      // const msg = {
      //   to: 'a@b.com',
      //   from: 'rens@rensoriginal.com',
      //   subject: 'Thankyou form the survey',
      //   html: `
      //   Hello ${order.name}
      //   <h1>Thank Your Once Again For Supporting Rens Original</h1>
      //       <p>We have received your information</p>
      //       <p>If you feel like you there is some error in the form, please contact support@rensoriginal.com</p>

      //       BR,
      //       Rens Original Team
      //       `
      // }
      // sgMail.send(msg)
      res.status(200).json({ success: true })
    } catch (error) {
      console.error({ error })
      next(error)
      // res.status(409).json({ error: 'You have already submitted the form' })
    }
  }
)

/*
TODO:
// ==> not used now but it's a working code and will be used when, cont..
// ==> we have dashboard in the front end.
// ==> Gives all the details about the order made by individual backer
*/

// router.get('/all', async (req, res) => {
//   try {
//     const allOrder = await knex
//       .select()
//       .from('delivery')
//       .innerJoin('order', 'order.o_id', 'delivery.order_id')

// const modifiedArray = []
// for (let i = 0; i < allOrder.length; i++) {
//   let {
//     name,
//     email,
//     country,
//     pledge,
//     color,
//     size,
//     streetAddress,
//     city,
//     state,
//     zipCode
//   } = allOrder[i]
//   if (modifiedArray.length > 0) {
//     for (let j = 0; j < modifiedArray.length; j++) {
//       if (
//         modifiedArray[j].name === allOrder[i].name &&
//         modifiedArray[j].email === allOrder[i].email
//       ) {
//         let { color, size, streetAddress, city, state, zipCode } = allOrder[
//           i
//         ]
//         modifiedArray[j].delivery.push({
//           color,
//           size,
//           streetAddress,
//           city,
//           state,
//           zipCode
//         })
//         break
//       } else if (j === modifiedArray.length - 1) {
//         const modifiedObject = {
//           name,
//           email,
//           country,
//           pledge,
//           delivery: [
//             {
//               color,
//               size,
//               streetAddress,
//               city,
//               state,
//               zipCode
//             }
//           ]
//         }
//         modifiedArray.push(modifiedObject)
//         break
//       }
//     }
//   } else {
//     const modifiedObject = {
//       name,
//       email,
//       country,
//       pledge,
//       delivery: [
//         {
//           color,
//           size,
//           streetAddress,
//           city,
//           state,
//           zipCode
//         }
//       ]
//     }
//     modifiedArray.push(modifiedObject)
//   }
// }
// return modifiedArray.map(a => console.log(a))
// console.log({ modifiedArray })
// } catch (error) {
//   console.log({ error })
// }
// })

module.exports = router
