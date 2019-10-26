const bcrypt = require('bcryptjs')

exports.seed = function (knex) {

  const password = bcrypt.hashSync('password', 8)

  return knex('consumer_user').insert([{
      username: 'consumer_1',
      email: 'consumer_1@gmail.com',
      password: password,
      city_id: 1
    },
    {
      username: 'consumer_2',
      email: 'consumer_2@gmail.com',
      password: password,
      city_id: 2
    },
    {
      username: 'consumer_3',
      email: 'consumer_3@gmail.com',
      password: password,
      city_id: 2
    },
    {
      username: 'consumer_4',
      email: 'consumer_4@gmail.com',
      password: password,
      city_id: 1
    },
  ]);
};