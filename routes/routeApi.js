const express = require('express');
const router = express.Router();
const data = require('../data');
const noteFunctions = data.noteFunctions;

router
    .route('/')
    .get(async (_, res) => {
        return res.render('individualPages/homepage');
    });

router
    .route('/noteLesson')
    .get(async (_, res) => {
        return res.render('individualPages/noteLesson', {notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G']});
    });

module.exports = router;