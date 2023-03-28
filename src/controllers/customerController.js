import { employeeServices, userServices } from '../services/index.js';
import { customerServices } from '../services/index.js';

export async function index(req, res, next) {
  const user = req.user;
  try {
    let customers = null;
    const userRole = await userServices.getUserRole(user.username).first();

    if (userRole.name === 'Staff') {
      customers = await employeeServices.getOwnedCustomersById(user.employeeNumber);
    } else {
      customers = await customerServices.getCustomers();
    }

    if (!customers) {
      return next(new Error('Customers not found'));
    }
    res.status(200).json(customers);
  } catch (err) {
    next(err);
  }
}

export async function detail(req, res, next) {
  try {
    const customer = await customerServices.getCustomerById(req.params.customerNumber);
    if (!customer) {
      next(new Error('Customer not found'));
    }
    res.status(200).json(customer);
  } catch (err) {
    next(err);
  }
}

export async function update(req, res, next) {
  try {
    await customerServices.updateCustomerById(req.params.customerNumber, req.body);
    res.status(201).json({ message: 'Customer updated successfully' });
  } catch (err) {
    next(err);
  }
}

export async function destroy(req, res, next) {
  try {
    await customerServices.destroyCustomer(req.params.customerNumber);
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (err) {
    next(err);
  }
}
