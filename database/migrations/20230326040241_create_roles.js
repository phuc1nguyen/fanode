/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  try {
    await knex.schema.createTable('roles', (table) => {
      table.increments('id').primary();
      table.enu('name', ['President', 'Manager', 'Leader', 'Staff']);
      table.json('permissions');
      table.timestamps(true, true);
    });
    console.log('Create roles successfully');
  } catch (err) {
    console.error(err);
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  try {
    await knex.schema.dropTable('roles');
    console.log('Drop roles successfully');
  } catch (err) {
    console.error(err);
  }
}
