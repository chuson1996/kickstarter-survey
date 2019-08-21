/* eslint-disable func-names */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('backer')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('backer').insert([
        { id: 1, name: 'aditya', email: 'aditya@rensoriginal.com', pledge: 1 },
        { id: 2, name: 'adi', email: 'gyawali_aditya@hotmail.com', pledge: 1 },
        { id: 3, name: 'sabi', email: 'sabi@rensoriginal.com', pledge: 2 },
        { id: 4, name: 'teemu', email: 'teemu@rensoriginal.com', pledge: 3 },
        { id: 5, name: 'neil', email: 'neil@rensoriginal.com', pledge: 2 },
        { id: 6, name: 'david', email: 'david@rensoriginal.com', pledge: 3 },
        { id: 7, name: 'Son', email: 'son.chu@rensoriginal.com', pledge: 3 }
      ])
    })
}
