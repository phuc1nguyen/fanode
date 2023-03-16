import jwt from 'jsonwebtoken';
import { getUserWithUsername } from '../../repositories/index.js';

// Read environment variable from process.env
const { secret } = process.env;

export async function authenticationRequired(req, res, next) {
  try {
    const { authorization: token } = req.headers || {};
    jwt.verify(token, secret);
    const { username } = jwt.decode(token);
    const user = await getUserWithUsername(username);
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    next(new Error('You need to sign in to use this feature!'));
  }
}
