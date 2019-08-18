// Update with your config settings.

console.log('process.env.DB_USER', process.env.DB_HOST)
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/kickstarter_survey',
    migrations: {
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: {
      user: 'rensoriginal',
      password: 'coffeeshoeisreal',
      port: '5432',
      host: '35.232.25.117',
      database: 'rens'
    },

    migrations: {
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }
}
