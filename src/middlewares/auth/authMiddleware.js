import jwt from 'jsonwebtoken';
import config from '../../../config/config.js';
import { getUserByUsername } from '../../services/userServices.js';

const secret = config.app.jwtSecret;

export async function authenticate(req, res, next) {
  try {
    const bearerHeader = req.headers.authorization;
    const bearerToken = bearerHeader.split(' ')[1];
    const decoded = jwt.verify(bearerToken, secret);
    const { username } = decoded;
    const user = await getUserByUsername(username);
    req.user = user;
    next();
  } catch (err) {
    next(new Error('Please log in to access this API'));
  }
}
