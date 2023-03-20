import path from 'node:path';
import fs from 'node:fs/promises';
import { dirname } from '../../utils/dirname.js';

const __dirname = dirname();
const dbPath = path.join(__dirname, '../../database', 'people.json');

export async function getAllPeople() {
  const jsonString = await fs.readFile(dbPath);
  const people = JSON.parse(jsonString);
  return people;
}
