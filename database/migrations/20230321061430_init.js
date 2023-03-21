/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  try {
    await knex.schema
      .createTable('employees', (table) => {
        table.integer('employeeNumber').primary();
        table.string('lastName', 255).notNullable();
        table.string('firstName', 255).notNullable();
        table.string('extension').notNullable();
        table.string('email', 100).unique().notNullable();
        table.string('officeCode').notNullable();
        table.integer('reportsTo');
        table.string('jobTitle').notNullable();
        table.timestamps(true, true);
      })
      .createTable('customers', (table) => {
        table.integer('customerNumber').primary();
        table.string('customerName', 50).notNullable().index();
        table.string('contactLastName', 50).notNullable();
        table.string('contactFirstName', 50).notNullable();
        table.string('phone', 20).notNullable();
        table.string('addressLine1').notNullable();
        table.string('addressLine2');
        table.string('city').notNullable();
        table.string('state');
        table.string('postalCode');
        table.string('country', 50).notNullable().defaultTo('Vietnam');
        table.integer('salesRepEmployeeNumber').unsigned().references('employeeNumber').inTable('employees');
        table.integer('creditLimit');
        table.timestamps(true, true);
      })
      .createTable('users', (table) => {
        table.string('username', 20).notNullable().primary();
        table.string('password', 100).notNullable();
        table.integer('employeeNumber').notNullable().unsigned().references('employeeNumber').inTable('employees');
        table.timestamps(true, true);
      });
    console.log('Create tables successfully');
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
    await Promise.all([
      knex.schema.table('customers', (table) => table.dropForeign('salesRepEmployeeNumber')),
      knex.schema.table('users', (table) => table.dropForeign('employeeNumber')),
    ]);
    await knex.schema.dropTable('employees').dropTable('customers').dropTable('users');
    console.log('Drop tables successfully');
  } catch (err) {
    console.error(err);
  }
}
