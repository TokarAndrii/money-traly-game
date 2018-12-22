const express = require('express');
const router = express.Router();
const { getEmailCredentialsFromFront, sendAnswerToFrontOnGet } = require('../controllers/mailController')

router.post('/', getEmailCredentialsFromFront);

router.get('/', sendAnswerToFrontOnGet);

module.exports = router;