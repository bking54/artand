var express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

//Home
router.get('/', mainController.index);

//About
router.get('/about', mainController.about);

//Camps
router.get('/camps', mainController.camps);

//FAQs
router.get('/faqs', mainController.faqs);

//Policy
router.get('/policy', mainController.policy);

//Google Maps Directions
router.get('/directions', mainController.directions);

//Register
router.get('/register', mainController.register);

//Tutoring Services
router.get('/tutoring', mainController.tutoring);

//Confirmation Page
router.get('/confirmation', mainController.confirmation);

//Confirmation error
router.get('/confirmationerror', mainController.confirmationerror);

//POST Requests

//Register
router.post('/pay', mainController.pay)

module.exports = router;
