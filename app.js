const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const {getAllPeopleController, loginController, logoutController} = require('./controllers');
const {authenticationRequired} = require('./middlewares');
const {resFromError} = require('./utilities');

app.use(express.json());
app.use(cookieParser());

app.post('/login', loginController);
app.get('/logout', logoutController);
app.get('/people', authenticationRequired, getAllPeopleController);

// Handling all errors
app.use((err, req, res, next) => {
  res.json(resFromError(err));
});

module.exports = {app};
