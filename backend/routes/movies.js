const express = require('express');
const handler = require('express-async-handler');
const { Movie } = require('../db/models');
const { requireAuth } = require('./auth');

router = express.Router();

router.use(requireAuth);

router.get("/", handler(async (_req, res) => {
    movies = await Movie.findAll({ order: ['title'] })
    res.json(movies);
}));


module.exports = router;
