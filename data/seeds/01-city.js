
exports.seed = function(knex) {
  return knex('city').insert([
    {name: 'San Francisco'},
    {name: 'New York'}
  ]);
};
