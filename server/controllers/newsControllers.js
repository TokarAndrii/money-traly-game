const newsList = require('../assets/news.json');
const uuidv4 = require('uuid/v4');
const fs = require('fs');
const path = require('path');


module.exports = {

    getAllNews(req, res, next) {
        req.news = newsList;
        res.status(200);
        res.json(req.news);
    },


    addOneNews(req, res, next) {
        const { title, date, text, author, imgUrl } = req.body;
        const id = uuidv4();

        req.news = newsList;

        const newsToAdd = { id, title, date, author, text, imgUrl };

        newsList.push(newsToAdd)

        fs.writeFile('./server/assets/news.json', JSON.stringify(newsList), (err) => {
            if (err) throw err;
            console.log('The file has been saved! at [addOneNews]');
        });

        req.news = [newsToAdd];

        res.status(200);

        res.json(req.news);
    },

    genNewsById(req, res, next) {

        req.news = newsList;

        const { id } = req.params;

        req.news = newsList.filter(item => item.id === id);

        if (req.news.length > 0) {

            res.status(200);

            res.json(req.news);
        }

        else {
            res.status(400).send({ error: `400 Not found News with - ${id}! Check if Id typed correct.` })
        }


    },

    deleteNewsById(req, res, next) {
        const { id } = req.params;

        const toBeRemoved = newsList.filter(item => item.id === id);

        const newData = newsList.filter(item => item.id !== id);

        fs.writeFile('./server/assets/news.json', JSON.stringify(newData), (err) => {
            if (err) throw err;
            console.log('The file has been saved at [deleteNewsById]!');
        });

        req.news = toBeRemoved;

        res.status(200);

        res.json(req.news);

    },
};