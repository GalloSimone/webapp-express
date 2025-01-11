const express = require ('express');
const router = express.Router();
const moviesController = require('../controllers/movieController')

router.get("/movies",moviesController.index)

module.exports = router;