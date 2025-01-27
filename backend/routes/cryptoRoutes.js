const express = require('express');
const router = express.Router();
const { getCryptoPrices } = require('../controllers/cryptoController');
const { getNews } = require('../controllers/newsController');

router.get('/prices', getCryptoPrices);
router.get('/news', getNews);

module.exports = router;
