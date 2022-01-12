
exports.up = function(knex) {
    return knex.schema.createTable("notes", function(table) {
        table.increments();
        table.text("message").notNullable();
        table.text("summary").notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable("notes");
};
