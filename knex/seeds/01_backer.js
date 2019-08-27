/* eslint-disable func-names */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('backer')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('backer').insert([
        {
          id: 1,
          name: 'aditya',
          country: 'Uk',
          email: 'aditya@rensoriginal.com',
          pledge: 1
        },
        {
          id: 2,
          name: 'Son',
          country: 'Nepal',
          email: 'son.chu@rensoriginal.com',
          pledge: 3
        }
      ])
    })
}
