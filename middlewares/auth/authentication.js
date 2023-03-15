const jwt = require('jsonwebtoken');

const {secret} = process.env;

async function authenticationRequired(req, res, next) {
  try {
    const {authorization: token} = req.headers || {};
    jwt.verify(token, secret);
    next();
  } catch (err) {
    console.error(err);
    next(new Error('You need to sign in to use this feature!'));
  }
}

module.exports = {authenticationRequired};
