import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
import { getAllPeopleController, loginController } from './controllers/index.js';
import { authenticationRequired, permissionRequired } from './middlewares/index.js';
import { resFromError } from './utils/index.js';
import { PERMS } from './constants/index.js';

app.use(cors());
// Use this middleware, so that we can access request body via req.body
app.use(express.json());
// Use this middleware, so that we can access cookies via req.cookies
app.use(cookieParser());

app.post('/login', loginController);
app.get('/people', authenticationRequired, permissionRequired(PERMS.People_List), getAllPeopleController);

// Handling all errors
app.use((err, req, res, next) => {
  res.json(resFromError(err));
});

export default app;
