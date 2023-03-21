import Customer from '../models/Customer.js';

export async function index(req, res) {
  await Customer.query().delete();

  // Insert one row to the database.
  await Customer.query().insert({
    firstName: 'Jennifer',
    lastName: 'Aniston',
  });

  // Read all rows from the db.
  const customer = await Customer.query();

  res.json(customer);
  console.log(customer);
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