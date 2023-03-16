import jwt from 'jsonwebtoken';
import { getUserWithUsername } from '../../repositories/index.js';
import { resFromData } from '../../utils/index.js';

const secret = process.env.SECRET;

export async function loginController(req, res, next) {
  const { username, password } = req.body || {};
  const user = await getUserWithUsername(username);

  if (user) {
    // let hashedPassword = hash(password, secret, salt??);
    // hashedPassword === user.password
    if (password === user.password) {
      const token = jwt.sign({ username }, secret);
      res.json(resFromData(token));
    } else {
      next(new Error('Wrong username or password!'));
    }
  } else {
    next(new Error('Wrong username or password!'));
  }
}
