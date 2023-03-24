import Employee from '../models/Employee.js';

export async function getAllEmployees() {
  return Employee.query();
}

export function getEmployeeById(id) {
  return Employee.query().findById(id);
}

export function updateEmployeeById(id, updatedFields) {
  return Employee.query().findById(id).patch(updatedFields);
}

export function destroyEmployee(id) {
  return Employee.query().delete().where('id', id);
}
