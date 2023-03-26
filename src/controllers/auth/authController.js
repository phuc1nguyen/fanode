import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { employeeServices, userServices } from '../../services/index.js';
import config from '../../../config/config.js';
import { resFromData } from '../../utilities/response.js';

const secret = config.app.jwtSecret;

export async function login(req, res, next) {
  const { username, password } = req.body || {};

  try {
    const user = await userServices.getUserByUsername(username);

    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ username }, secret, { expiresIn: '2d' });
        return res.json(resFromData(token));
      } else {
        return next(new Error('Wrong password'));
      }
    } else {
      return next(new Error('User does not exist'));
    }
  } catch (err) {
    next(err);
  }
}

export async function register(req, res, next) {
  const { employeeNumber, password } = req.body || {};

  try {
    const employee = await employeeServices.getEmployeeById(employeeNumber);
    const existedUser = await employeeServices.checkEmployeeAccount(employeeNumber);
    if (existedUser) {
      return next(new Error('Employee account had been created'));
    }

    if (!employee) {
      return next(new Error('Employee not found'));
    }

    const fullname = employee.fullName();
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = {
      username: fullname,
      password: hashedPassword,
      employeeNumber,
    };

    await userServices.insertUserByEmployeeNumber(newUser);
    res.status(201).json({ message: 'User account for employee created successfully' });
  } catch (err) {
    next(err);
  }
}
