
exports.up = function(knex, Promise) {
  return knex.schema.createTable('found', table => {
    table.increments('id').primary()
    table.string('species')
    table.string('photo')
    table.string('contact')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('found')
};
