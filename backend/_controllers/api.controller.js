const express = require('express');
const router = express.Router();
const moviesService = require('../_services/api.service');
const sequelize = require('../_db/connection')


router.post('/saveTimeMark', saveTimeMark)
router.get('/test/db', testDb)


async function testDb()
{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


function saveTimeMark(req, res, next)
{
    console.log("Body", req.body)
    moviesService.saveTimeMark()
        .then(timeMarks => res.json(timeMarks))
        .catch(err => next(err));
}

module.exports = router;


