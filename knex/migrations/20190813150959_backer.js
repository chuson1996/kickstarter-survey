//backer migrate
exports.up = function(knex) {
  return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"').then(() => {
    return knex.schema.createTable('backer', function(table) {
      table.integer('id').primary()
      table.uuid('backer_id').defaultTo(knex.raw('uuid_generate_v4()'))
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.integer('pledge').notNullable()
    })
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('backer')
}
