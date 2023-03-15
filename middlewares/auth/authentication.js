const {checkSession} = require('../../repositories');

async function authenticationRequired(req, res, next) {
  const {SESSIONID} = req.cookies || {};
  let authenticated = SESSIONID ? await checkSession(SESSIONID) : false;
  if (authenticated) {
    next();
  } else {
    next(new Error('You need to sign in to use this feature!'));
  }
}

module.exports = {authenticationRequired};
