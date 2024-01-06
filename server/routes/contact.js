const express = require('express');
const ContactController = require('../controller/ContactController ')
const router = express.Router();

router.post('/submit', ContactController.SubmitContactDetails);

module.exports = router;
