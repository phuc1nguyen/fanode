import * as mockData from '../mockData.js';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  try {
    // Deletes ALL existing entries
    await Promise.all([knex('customers').del(), knex('users').del(), knex('employees').del()]);
    console.log('Cleared all data');

    // Inserts data
    await knex('employees').insert(mockData.employees);
    await knex('customers').insert(mockData.customers);
    // await knex('users').insert(mockData.users);
    console.log('Data has been created successfully');
  } catch (err) {
    console.error(err);
  }
}
