exports.seed = function (knex) {
  return knex('farm').insert([{
      name: 'Organic Farms',
      address: '1213 Dairy Rd.',
      year_founded: 1955,
      bio: 'We sell only the best.',
      farmer_id: 1,
      city_id: 1
    },
    {
      name: 'A.R. Farms',
      address: '2213 Orchard Rd.',
      year_founded: 1908,
      bio: 'We are a farm.',
      farmer_id: 2,
      city_id: 2
    },
  ]);
};