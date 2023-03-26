import * as dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import { Model } from 'objection';
import myKnex from '../database/index.js';

import { employeesRouter, customersRouter, usersRouter } from './routes/index.js';
import { getAllPeopleController } from './controllers/index.js';
import { authenticate, permissionRequired } from './middlewares/index.js';
import config from '../config/config.js';
import { resFromError } from './utilities/index.js';
import { PERMS } from './constants/index.js';

dotenv.config();
// bind all Objection Models to the knex instance
Model.knex(myKnex);

const app = express();
// allow express app to parse (recognize) incoming JSON payloads
app.use(express.json());
// allow express app to parse (recognize) incoming urlencoded payloads
app.use(express.urlencoded({ extended: true }));
// access cookie via req.cookies
app.use(cookieParser());
// enable CORS, add CORS config later
app.use(cors());
// log only 4xx and 5xx (error) responses to the console
app.use(
  morgan(`${config.app.nodeEnv === 'development' ? 'dev' : 'common'}`, { skip: (req, res) => res.statusCode < 400 }),
);
app.use('/employees', authenticate, employeesRouter);
app.use('/customers', authenticate, customersRouter);
app.use('/users', usersRouter);
app.get('/', function (req, res) {
  res.end('Homepage');
});
app.get('/people', authenticate, permissionRequired(PERMS.People_List), getAllPeopleController);

// handling all errors
app.use((err, req, res, next) => {
  res.json(resFromError(err));
});

export default app;
