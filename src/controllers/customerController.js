import * as customerServices from '../services/customerServices.js';

export async function index(req, res) {
  const customers = await customerServices.getAllCustomers();
  res.status(200).json(customers);
}

export async function store(req, res) {
  await customerServices.insertCustomer(req.body);
  res.status(201).json({ message: 'Customer created successfully' });
}

export async function detail(req, res) {
  const customer = await customerServices.getCustomerById(req.params.customerNumber);
  res.status(200).json(customer);
}

export async function update(req, res) {
  await customerServices.updateCustomerById(req.params.customerNumber, req.body);
  res.status(201).json({ message: 'Customer updated successfully' });
}

export async function destroy(req, res) {
  await customerServices.destroyCustomer(req.params.customerNumber);
  res.status(200).json({ message: 'Customer deleted successfully' });
}
