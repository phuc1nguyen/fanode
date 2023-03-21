import Employee from '../models/Employee.js';

export async function index(req, res) {
  const employees = await Employee.query();

  res.json(employees);
}

export function detail(req, res) {
  const { id } = req.params;
  res.send(`Display employee detail with employee id: ${id}`);
}

export function create(req, res) {}

export function store(req, res) {}

export function edit(req, res) {}

export function update(req, res) {}

export function destroy(req, res) {}
