import { employeeServices } from '../services/index.js';

export async function index(req, res, next) {
  try {
    const employees = await employeeServices.getAllEmployees();
    if (!employees) {
      return next(new Error('Employees not found'));
    }
    res.status(200).json(employees);
  } catch (err) {
    next(err);
  }
}

export async function detail(req, res, next) {
  try {
    const employee = await employeeServices.getEmployeeById(req.params.employeeNumber);
    if (!employee) {
      return next(new Error('Employee not found'));
    }
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
}

export async function update(req, res, next) {
  try {
    await employeeServices.updateEmployeeById(req.params.employeeNumber, req.body);
    res.status(200).json({ message: 'Employee updated successfully' });
  } catch (err) {
    next(err);
  }
}

export async function destroy(req, res, next) {
  try {
    await employeeServices.destroyEmployee(req.params.employeeNumber);
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (err) {
    next(err);
  }
}
