function authenticationRequired(req, res, next) {
  next();
}

module.exports = {authenticationRequired};