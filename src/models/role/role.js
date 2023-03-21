import path from 'node:path';
import fs from 'node:fs/promises';
import { dirname } from '../../utilities/dirname.js';

const __dirname = dirname();
const dbPath = path.join(__dirname, '../../database', 'roles.json');

export async function getRoleById(id) {
  const jsonString = await fs.readFile(dbPath);
  const roles = JSON.parse(jsonString);

  return roles.find((role) => role.id === id) || null;
}
