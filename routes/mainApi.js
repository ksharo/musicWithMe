const express = require('express');
const router = express.Router();
const data = require('../data');
const accountFunctions = data.accountFunctions;
const songData = data.songFunctions;


router
    .route('/')
    .get(async(_, res) => {
        return res.render('individualPages/homepage');
    });

router
    .route('/store')
    .get(async(_, res) => {
        let trebleSongs = await songData.getTreble();
        let bassSongs = await songData.getBass();
        return res.render('individualPages/store', { trebleSongs: trebleSongs, bassSongs: bassSongs });
    });

router
    .route('/')
    .post(async(req, res) => {
        let created = await accountFunctions.create(req.body['username'], req.body['password']);
        return res.render('individualPages/homepage');
    });

module.exports = router;