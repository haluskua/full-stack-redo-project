
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('found').del()
    .then(function () {
      // Inserts seed entries
      return knex('found').insert([
        {id: 1, species: 'dog', photo: 'https://www.doggoneseattle.org/wp-content/uploads/2014/05/DogGoneSeattle22-e1510427431363-500x500.jpg', user_id: 1},
        {id: 2, species: 'dog', photo: 'http://yanhu3vvef11e7osn1qzldyb.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/Frances-website-min-500x500.jpg', user_id: 1},
        {id: 3, species: 'cat', photo: 'http://www.vickyhalls.net/img/Cat-Pink.jpg', user_id: 3},
        {id: 4, species: 'dog', photo: 'https://cdn11.bigcommerce.com/s-shbhk0/images/stencil/500x659/products/121/1646/action_luna_woolball__46655.1511055629.jpg?c=2', user_id: 2},
        {id: 5, species: 'cat', photo: 'https://data.whicdn.com/images/52410577/large.jpg', user_id: 3},
      ]);
    });
};
