import User from '../models/User.js';

export function getAllUsers() {
  return User.query();
}

export function getUserByUsername(username) {
  if (!username) throw new Error('Please request with a username');
  return User.query().where('username', username).first();
}

export async function insertUserByEmployeeNumber(newUser) {
  const { username, password, employeeNumber } = newUser;

  return User.query().insert({
    username,
    password,
    employeeNumber,
  });
}
