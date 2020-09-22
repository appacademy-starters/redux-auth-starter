const bcrypt = require('bcryptjs');
const express = require('express');
const handler = require('express-async-handler');
const { getUserToken } = require('./auth');
const { User } = require('../db/models');

const router = express.Router();

router.put('/', handler(async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const user = await User.findOne({ where: { email } });
    const match = await bcrypt.compare(password, user.hashedPassword.toString());
    if (match) {
      const token = getUserToken(user);
      return res.status(201).json({
        token,
      });
    } else {
      return res.status(404).end();
    }
  }
  return res.status(401).append('WWW-Authenticate', 'Bearer').end()
}));

module.exports = router;
