const app = require('express')();

const {PERMS} = require('./constants');
const {getAllPeopleController} = require('./controllers');
const {permissionRequired} = require('./middlewares');
const {resFromError} = require('./utilities');

app.get('/people', permissionRequired(PERMS.People_List), getAllPeopleController);

// Handling all errors
app.use((err, req, res, next) => {
  res.json(resFromError(err));
});

module.exports = {app};
