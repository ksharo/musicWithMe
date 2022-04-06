const express = require('express');
const data = require('../data');
const songData = data.songData;
const router = express.Router();

router
    .route('/')
    .get(async(_, res) => {
        return res.render('individualPages/homepage');
    });

router
    .route('/store')
    .get(async(_, res) => {
        return res.render('individualPages/store', { trebleSongs: songData.trebleSongData, bassSongs: songData.bassSongData });
    });

module.exports = router;