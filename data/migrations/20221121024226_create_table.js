
exports.up = function(knex) {
    //name of table, then callback that takes single parameter that represents the table we're creating
    //this function is async which means it return s a promise which means you must return the schema
   return knex.schema.createTable('fruits', (tbl) => {
    tbl.increments();
    tbl.varchar('name', 100).notNullable().unique();
    tbl.varchar('color', 100).notNullable();
    tbl.boolean('delicious');
    tbl.decimal('avgWeightOz').notNullable();

    //tbl.SQL_TYPE('NAME_OF_COLUMN")
  })
};
 

exports.down = function(knex) {
  return knex.schema.dropTableIfExists
  //DROP TABLE IF EXISTS fruits;
};
