var express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('./index', { title: 'Artland' });
});
*/
router.get('/', mainController.index);

router.get('/about', mainController.about);

router.get('/camps', mainController.camps);

router.get('/faqs', mainController.faqs);

module.exports = router;
