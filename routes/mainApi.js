const express = require('express');
const router = express.Router();
const data = require('../data');
const accountFunctions = data.accountFunctions;
const songData = data.songData;


router
    .route('/')
    .get(async (_, res) => {
        return res.render('individualPages/homepage');
    });

router
    .route('/store')
    .get(async(_, res) => {
        return res.render('individualPages/store', { trebleSongs: songData.trebleSongData, bassSongs: songData.bassSongData });
    });

router
    .route('/')
    .post(async (req, res) => {
        let created = await accountFunctions.create(req.body['username'], req.body['password']);
        return res.render('individualPages/homepage');
    });

module.exports = router;