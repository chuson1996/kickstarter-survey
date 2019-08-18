const express = require('express')
const router = express.Router()
const knex = require('../../knex/kenx')

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(
  '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'
)

const request = require('request')
// sendgrid api key
// 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
router.get('/', async (req, res) => {
  try {
    const orders = await knex.select('*').from('order')
    res.send(orders)
  } catch (error) {
    res.send(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, email, country, pledge, shoes } = req.body
    console.log('req.body', req.body)
    const orderInfo = await knex('order')
      .insert({
        name: name,
        email: email,
        country: country,
        pledge: pledge
      })
      .returning('*')

    const order = orderInfo[0]
    const delivery = await knex('delivery')
      .insert(
        shoes.map(shoe => ({
          color: shoe.color,
          size: shoe.size,
          streetAddress: shoe.streetAddress,
          city: shoe.city,
          state: shoe.state,
          zipCode: shoe.zipCode,
          order_id: order.o_id
        }))
      )
      .returning('*')
    console.log({ order, delivery })

    // SendGRid
    const msg = {
      to: `romieo16@gmail.com`,
      from: 'romieo16@gmail.com',
      subject: 'Thankyou form the survey',
      text: 'and easy to do anywhere, even with Node.js',
      html: `
      Hello ${order.name}
      <h1>Thank Your Once Again For Supporting Rens Original</h1>
            <h1>Here Are Your Details</h1>
            <br />
            shoe : ${delivery.map(color => `<h3>${color.color}</h3>`)}
            size: ${delivery.map(color => `<h3>${color.size}</h3>`)}
            Address: ${delivery.map(
              color => `<h3>${color.streetAddress}</h3>`
            )} 
            city: ${delivery.map(color => `<h3>${color.city}</h3>`)} 
            state: ${delivery.map(color => `<h3>${color.state}</h3>`)} 

          if you think you have made some mistake please mail us at support@rensoriginal.com

          BR,
          Rens Original Team
          `
    }
    sgMail.send(msg)

    // NodeMailer
    // let transporter = nodeMailer.createTransport({
    //   host: 'smtp.gmail.com',
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     // should be replaced with real sender's account
    //     user: 'testmyemailwithnode@gmail.com',
    //     pass: 'R@ndom123'
    //   }
    // })
    // let mailOptions = {
    //   // should be replaced with real recipient's account
    //   to: `${order.email}`,
    //   subject: 'Thank you for Survey',
    //   body: `Hello ${
    //     order.name
    //   }, We have received your shoe information. We are working hard to deliver the best product. Thank you for your patience. BR, Rens Team`
    // }
    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     return console.log(error)
    //   }
    //   console.log('Message %s sent: %s', info.messageId, info.response)
    // })
    res.status(200).json({ success: true })
  } catch (error) {
    res.status(409).json({ error: `You have already submitted the form` })
  }
})

router.get('/all', async (req, res) => {
  try {
    const allOrder = await knex
      .select()
      .from('delivery')
      .innerJoin('order', 'order.o_id', 'delivery.order_id')

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
  } catch (error) {
    console.log({ error })
  }
})

module.exports = router
