/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  try {
    await knex.schema.alterTable('users', (table) => {
      table.smallint('roleId').references('id').inTable('roles').onUpdate('cascade').onDelete('set null');
    });
    console.log('Users added role successfully');
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
    await knex.schema.alterTable('users', (table) => {
      table.dropColumn('roleId');
    });
  } catch (err) {
    console.error(err);
  }
}
