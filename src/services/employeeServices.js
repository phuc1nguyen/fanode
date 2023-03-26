import Employee from '../models/Employee.js';

export async function getEmployees() {
  return Employee.query();
}

export function getEmployeeById(id) {
  return Employee.query().findById(id);
}

export function updateEmployeeById(id, updatedFields) {
  return Employee.query().findById(id).patch(updatedFields);
}

export function destroyEmployee(id) {
  return Employee.query().delete().where('employeeNumber', id);
}

export function checkEmployeeAccount(employeeNumber) {
  return Employee.relatedQuery('user').for(employeeNumber).first();
}
