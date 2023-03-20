import User from '../../models/User.js';

export function login(req, res) {
  res.send(req.body);
}

export function register(req, res) {
  res.send(req.body);
}
