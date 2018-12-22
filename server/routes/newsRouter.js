const express = require('express');

const router = express.Router();

const { getAllNews, addOneNews, genNewsById, deleteNewsById, } = require('../controllers/newsControllers')


router.get('/', getAllNews);

router.get('/:id', genNewsById);

router.post('/', addOneNews);

router.delete('/:id', deleteNewsById);



module.exports = router;