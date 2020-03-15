const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Do work here
// routes file will always just be a list of urls and then each action will be stored as a controller
router.get('/', storeController.homePage);

// See for more details https://expressjs.com/en/guide/routing.html

module.exports = router;
