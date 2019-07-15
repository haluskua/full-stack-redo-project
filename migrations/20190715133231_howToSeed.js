exports.up = function(knex, Promise) {
  return knex.schema.createTable("howToSeed", table => {
    table.increments("id").primary();
    table.string("Steps");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.droptable("howToSeed");
};
