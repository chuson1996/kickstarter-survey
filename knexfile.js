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
      user: JSON.stringify(process.env.DB_USER),
      password: JSON.stringify(process.env.DB_PASSWORD),
      port: '5432',
      host: JSON.stringify(process.env.DB_HOST),
      database: JSON.stringify(process.env.DB_NAME)
    },

    migrations: {
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }
}
