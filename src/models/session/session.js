import path from 'node:path';
import fs from 'node:fs/promises';
import { nanoid } from 'nanoid';
import { dirname } from '../../utilities/dirname.js';

const __dirname = dirname();
const dbPath = path.join(__dirname, '../../database', 'sessions.json');

// Generate session ID, save it to database, return that ID
export async function generateSessionForUser(username) {
  const jsonString = await fs.readFile(dbPath);
  const sessions = JSON.parse(jsonString);
  const newSessionId = nanoid();
  const newSessions = [...sessions, { id: newSessionId, username }];
  await fs.writeFile(dbPath, JSON.stringify(newSessions));
  return newSessionId;
}

export async function checkSession(sessionId) {
  try {
    const jsonString = await fs.readFile(dbPath);
    const sessions = JSON.parse(jsonString);
    const sessionIndex = sessions.findIndex((s) => s.id === sessionId);

    return sessionIndex > -1;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function deleteSession(sessionId) {
  const jsonString = await fs.readFile(dbPath);
  const sessions = JSON.parse(jsonString);
  const sessionIndex = sessions.findIndex((s) => s.id === sessionId);
  sessions.splice(sessionIndex, 1);
  await fs.writeFile(dbPath, JSON.stringify(sessions));
  return;
}
