
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lost').del()
    .then(function () {
      // Inserts seed entries
      return knex('lost').insert([
        {id: 1, name: 'Robert', species: 'dog', photo: 'https://static1.squarespace.com/static/552a33efe4b0d2b32af7b719/553ba43ae4b00f34b14f6229/5540be1ee4b0b198b8e2f25f/1435880685321/2158.jpg?format=500w', user_id: 1},
        {id: 2, name: 'Winston', species: 'cat', photo: 'https://scontent.fakl5-1.fna.fbcdn.net/v/t1.15752-9/66470252_1504537946376843_148755230224285696_n.jpg?_nc_cat=107&_nc_oc=AQk0gqGu2BbYQxJEpDYiXRladqJtldkTn50RCI93imzPFkfbFs_hzo2RFWryBFx453E&_nc_ht=scontent.fakl5-1.fna&oh=9df9683a9e9fd7ebbfe35e00acc5e7b4&oe=5DC22DB5', user_id: 1},
        {id: 3, name: 'Captainsparkles', species: 'cat', photo: 'https://irp-cdn.multiscreensite.com/381681e4/dms3rep/multi/mobile/Cat-Boarding-Sq-500x500.jpg', user_id: 2},
        {id: 4, name: 'Athena', species: 'dog', photo: 'https://evergladesangelsdogrescue.org/wp-content/uploads/2017/06/Athena-great-full-body-pic-1.jpg', user_id: 2},
        {id: 5, name: 'Alfie', species: 'cat', photo: 'https://data.whicdn.com/images/52410577/large.jpg', user_id: 3},

      ]);
    });
};
