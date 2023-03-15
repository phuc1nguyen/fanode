const {getUserWithUsername, generateSessionForUser, deleteSession} = require('../../repositories');
const {resFromData} = require('../../utilities');

async function loginController(req, res, next) {
  const {username, password} = req.body || {};
  const user = await getUserWithUsername(username);
  if (user) {
    // let hashedPassword = hash(password, secret, salt??);
    // hashedPassword === user.password
    if (password === user.password) {
      const sessionId = await generateSessionForUser(username);
      // Put Set-Cookie header
      res.cookie('SESSIONID', sessionId, {httpOnly: true});
      res.json(resFromData('OK!'));
    } else {
      next(new Error('Wrong username or password!'));
    }
  } else {
    next(new Error('Wrong username or password!'));
  }
}

async function logoutController(req, res, next) {
  const {SESSIONID} = req.cookies || {};
  // Delete session from database
  await deleteSession(SESSIONID);
  // Empty the Cookie on client side
  res.cookie('SESSIONID', "", {httpOnly: true});
  res.json(resFromData('OK!'));
}

module.exports = {loginController, logoutController};
