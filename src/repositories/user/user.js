import path from 'node:path';
import fs from 'node:fs/promises';
import { dirname } from '../../utils/index.js';

const __dirname = dirname();
const dbPath = path.join(__dirname, '../../mockdb', 'users.json');

export async function getUserWithUsername(username) {
  const jsonString = await fs.readFile(dbPath);
  const users = JSON.parse(jsonString);
  return users.find((user) => user.username === username) || null;
}