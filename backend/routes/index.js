const express = require('express');
const router = express.Router();

const moviesRouter = require('./movies');
const sessionRouter = require('./session');

router.use('/session', sessionRouter);
router.use('/movies', moviesRouter);

module.exports = router;
