export function up(knex) {
  return knex.schema.createTable('customers', (table) => {
    table.increments().primary();
    table.string('firstName');
    table.string('lastName');
    table.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTable('customers');
}
