exports.up = function (knex) {
  return knex.schema.createTable("sets", (tbl) => {
    tbl.increments();
    tbl.text("name").notNullable();
    tbl.text("link").notNullable();
    tbl.text("type").notNullable();
    tbl.text("bonuses").notNullable();
    tbl.integer("traits").nullable();
    tbl.text("location").nullable();
    tbl.text("dlc").nullable();
    tbl.text("obtainableItems").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("sets");
};
