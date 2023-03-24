import * as customerServices from '../services/customerServices.js';

export async function index(req, res, next) {
  try {
    const customers = await customerServices.getAllCustomers();
    if (!customers) {
      return next('Customers not found');
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
      next('Customer not found');
    }
    res.status(300).json(customer);
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
