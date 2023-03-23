import Customer from '../models/Customer.js';

export function getAllCustomers() {
  return Customer.query();
}

export function getCustomerById(id) {
  return Customer.query().findById(id);
}

export function insertCustomer(customer) {
  return Customer.query().insert(customer);
}

export async function updateCustomerById(id, updatedFields) {
  return Customer.query().findById(id).patch(updatedFields);
}

export function destroyCustomer(id) {
  return Customer.query().deleteById(id);
}
