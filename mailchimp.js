// Sync the backer_id from backer table to mailchimp audience backer_id

const knex = require('./knex/kenx')
const request = require('request')

knex('backer')
  .select('*')
  .then(allBackers => {
    const data = {
      members: allBackers.map(backer => ({
        email_address: `${backer.email}`,
        status: 'subscribed',
        merge_fields: {
          NAME: `${backer.name}`,
          PLEDGE: `${backer.pledge}`,
          BACKERID: `${backer.backer_id}`
        }
      }))
    }

    const postData = JSON.stringify(data)
    const options = {
      url: 'https://us3.api.mailchimp.com/3.0/lists/2be265020b',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'auth a118a7e7ed7e8288d08e85ad1cd779f5-us3'
      },
      body: postData
    }

    request(options, (err, response, body) => {
      console.log(response.statusCode, { err }, { options })
      if (err) {
        console.log({ err })
      }
      if (response.statusCode === 200) {
        console.log('pass')
      }
    })
  })
