/* eslint-disable func-names */
// order delivery migrate
exports.up = function(knex) {
  return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"').then(() => {
    return knex.schema
      .createTable('order', function(table) {
        table
          .uuid('o_id')
          .primary()
          .defaultTo(knex.raw('uuid_generate_v4()')) // to generate default uuid
        table.string('name', 255).notNullable()
        table
          .string('email', 255)
          .unique()
          .notNullable()

        table.string('country').notNullable()
        table.integer('pledge').notNullable()
      })
      .createTable('delivery', function(table) {
        table
          .uuid('d_id')
          .defaultTo(knex.raw('uuid_generate_v4()'))
          .primary()
        table.string('color').notNullable()
        table.string('size').notNullable()
        table.string('address1').notNullable()
        table.string('address2').notNullable()
        table.string('city').notNullable()
        table.string('country').notNullable()
        table.string('state').notNullable()
        table.string('zipCode').notNullable()
        table.string('phone').notNullable()
        table.string('age').notNullable()
        table.string('whyRens').notNullable()

        table.uuid('order_id')
        table
          .foreign('order_id')
          .references('o_id')
          .inTable('order')
      })
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('delivery').dropTable('order')
}
