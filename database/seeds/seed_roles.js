/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('roles').del();

  // Inserts data
  try {
    await knex('roles').insert([
      { id: 1, name: 'President', permissions: JSON.stringify(['Employees:FullAccess', 'Customers:FullAccess']) },
      {
        id: 2,
        name: 'Manager',
        permissions: JSON.stringify(['Employees:Read', 'Employees:Create', 'Employees:Update', 'Customers:FullAccess']),
      },
      {
        id: 3,
        name: 'Leader',
        permissions: JSON.stringify(['Employees:Read', 'Customers:FullAccess']),
      },
      {
        id: 4,
        name: 'Staff',
        permissions: JSON.stringify(['Customers:Read', 'Customers:Create']),
      },
    ]);
    console.log('Roles have been seeded successfully');
  } catch (err) {
    console.error(err);
  }
}
