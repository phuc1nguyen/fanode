import Customer from '../models/Customer.js';

export async function index(req, res) {
  const customers = await Customer.query();

  res.json(customers);
}

export function detail(req, res) {
  const { id } = req.params;
  res.send(`Display customer detail with customer id: ${id}`);
}

export function create(req, res) {
  res.send('Create customer');
}

export function store(req, res) {
  res.send('Store customer');
}

export function edit(req, res) {
  res.send(`Edit customer ${req.params.id}`);
}

export function update(req, res) {
  res.send(`Update customer ${req.params.id}`);
}

export function destroy(req, res) {
  res.send(`Delete customer ${req.params.id}`);
}
