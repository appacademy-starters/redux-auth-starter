const jwt = require('jsonwebtoken');
const bearerToken = require('express-bearer-token');
const { jwtConfig } = require('../config')
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

const getUserToken = (user) => {
  const userDataForToken = {
    email: user.email,
  };

  // Create the token.
  const token = jwt.sign(
    { data: userDataForToken },
    secret,
    { expiresIn } // 604,800 seconds = 1 week
  );

  return token;
};

const restoreUser = (req, res, next) => {
  const { token } = req;

  if (!token) {
    return res.set('WWW-Authenticate', 'Bearer').status(401).end();
  }

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      err.status = 401;
      return next(err);
    }

    const { email } = jwtPayload.data;

    try {
      req.user = await User.findOne({ where: { email } });
    } catch (e) {
      return next(e);
    }

    if (!req.user) {
      return res.set('WWW-Authenticate', 'Bearer').status(401).end();
    }

    return next();
  });
};

const requireAuth = [bearerToken(), restoreUser]

module.exports = {
  getUserToken,
  requireAuth,
};
