const express = require('express');
const router = express.Router();
const controller = require("../controllers/emailSenderController");

router.post('/send-email', controller.sendEmail);

module.exports = router;

