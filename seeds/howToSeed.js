exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("howToSeed")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("howToSeed").insert([
        { id: 1, Steps: "npx knex init" },
        { id: 2, Steps: "npx knex migrate:make" },
        { id: 3, Steps: "npx knex seed:make" },
        { id: 4, Steps: "npx knex migrate:latest" },
        { id: 5, Steps: "npx knex seed:run" }
      ]);
    });
};
