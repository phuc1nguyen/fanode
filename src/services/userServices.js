import User from '../models/User.js';

export function getUsers() {
  return User.query();
}

export function getUserByUsername(username) {
  if (!username) throw new Error('Please request with a username');
  return User.query().where('username', username).first();
}

export function insertUserByEmployeeNumber(newUser) {
  const { username, password, employeeNumber } = newUser;

  return User.query().insert({
    username,
    password,
    employeeNumber,
    roleId: employeeNumber === 1 && 1,
  });
}

export function destroyUser(username) {
  return User.query().delete().where('username', username);
}

export function getUserRole(username) {
  return User.relatedQuery('role').for(username).first();
}
