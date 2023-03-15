const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const {getAllPeopleController, loginController} = require('./controllers');
const {authenticationRequired, permissionRequired} = require('./middlewares');
const {resFromError} = require('./utilities');
const {PERMS} = require('./constants');

app.use(express.json());
app.use(cookieParser());

app.post('/login', loginController);
app.get('/people', authenticationRequired, permissionRequired(PERMS.People_List), getAllPeopleController);

// Handling all errors
app.use((err, req, res, next) => {
  res.json(resFromError(err));
});

module.exports = {app};
