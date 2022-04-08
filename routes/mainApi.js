const express = require('express');
const { songFunctions, bassData, trebleData } = require('../data');
const router = express.Router();
const data = require('../data');
const { renderSongLevel } = require('../data/noteFunctions');
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
        for (let x of trebleSongs) {
            x.id = x._id;
        }
        for (let x of bassSongs) {
            x.id = x._id;
        }
        return res.render('individualPages/store', { trebleSongs: trebleSongs, bassSongs: bassSongs });
    });

router
    .route('/')
    .post(async(req, res) => {
        let created = await accountFunctions.create(req.body['username'], req.body['password']);
        return res.render('individualPages/homepage');
    });

router
    .route('/allSongs/begin/:id')
    .get(async(req, res) => {
        const song = await songFunctions.getSong(req.params.id);
        const details = {
            title: song.name,
            img: song.image,
            details: ''
        }
        return res.render('individualPages/newLesson', {
            name: song.name,
            subtitle: '',
            details: details,
            level: req.params.id,
            levelName: ''
        })
    });

router
    .route('/allSongs/play/:id')
    .get(async(req, res) => {
        const song = await songFunctions.getSong(req.params.id);
        if (song.clef == 'bass') {
            return renderSongLevel(song.notes, song.name, bassData.bass_levels, res, 'bass', 'notes')
        } else if (song.clef == 'treble') {
            return renderSongLevel(song.notes, song.name, trebleData.treble_levels, res, 'treble', 'notes')
        }
    });

module.exports = router;