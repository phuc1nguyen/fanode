import * as dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import { Model } from 'objection';
import myKnex from '../database/index.js';

import { employeesRouter, customersRouter, usersRouter } from './routes/index.js';
import { getAllPeopleController, loginController } from './controllers/index.js';
import { authenticationRequired, permissionRequired } from './middlewares/index.js';
import config from '../config/config.js';
import { resFromError } from './utilities/index.js';
import { PERMS } from './constants/index.js';

dotenv.config();
// bind all Models to the knex instance
Model.knex(myKnex);

const app = express();
// access request body via req.body
app.use(express.json());
// access cookie via req.cookies
app.use(cookieParser());
// enable CORS, add CORS config later
app.use(cors());
// log only 4xx and 5xx (error) responses to the console
app.use(morgan(`${config.app.ENV === 'development' ? 'dev' : 'common'}`, { skip: (req, res) => res.statusCode < 400 }));
app.use('/employees', employeesRouter);
app.use('/customers', customersRouter);
app.use('/users', usersRouter);
app.get('/', function (req, res) {
  res.end('Homepage');
});
app.post('/login', loginController);
app.get('/people', authenticationRequired, permissionRequired(PERMS.People_List), getAllPeopleController);

// handling all errors
app.use((err, req, res, next) => {
  res.json(resFromError(err));
});

export default app;
