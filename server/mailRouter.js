const express = require('express');
const router = express.Router();
const { getEmailCredentialsFromFront, sendAnswerToFront } = require('./mailController')

router.post('/', getEmailCredentialsFromFront, sendAnswerToFront)
router.get('/', () => console.log('get'))

module.exports = router;