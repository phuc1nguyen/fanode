import * as employeeServices from '../services/employeeServices.js';

export async function index(req, res) {
  const employees = await employeeServices.getAllEmployees();
  res.status(200).json(employees);
}

export async function store(req, res) {
  await employeeServices.insertEmployee(req.body);
  res.status(201).json({ message: 'Employee created successfully' });
}

export async function detail(req, res) {
  const employee = await employeeServices.getEmployeeById(req.params.employeeNumber);
  res.status(200).json(employee);
}

export async function update(req, res) {
  await employeeServices.updateEmployeeById(req.params.employeeNumber, req.body);
  res.status(200).json({ message: 'Employee updated successfully' });
}

export async function destroy(req, res) {
  await employeeServices.destroyEmployee(req.params.employeeNumber);
  res.status(200).json({ message: 'Employee deleted successfully' });
}
