const express = require('express');
const { songFunctions, bassData, trebleData } = require('../data');
const router = express.Router();
const data = require('../data');
const { renderSongLevel } = require('../data/noteFunctions');
const accountFunctions = data.accountFunctions;
const songData = data.songFunctions;
const globals = data.globals.globals;


router
    .route('/')
    .get(async(req, res) => {
        let user = null;
        if (req.session.user) {
            user = {
                username: req.session.user.username,
                coins: req.session.user.coins
            }
        }
        return res.render('individualPages/homepage', { user: user });
    });

router
    .route('/store')
    .get(async(req, res) => {
        let trebleSongs = await songData.getTreble();
        let bassSongs = await songData.getBass();
        let user = await accountFunctions.getUser(req.session.user._id);
        let purchased = user.purchasedSongs.map((s) => { return s.toString(); });
        for (let x of trebleSongs) {
            x.id = x._id;
            x.canAfford = (user.coins >= x.price);
            x.ownsSong = (purchased.includes(x._id.toString()));
        }
        for (let x of bassSongs) {
            x.id = x._id;
            x.canAfford = (user.coins >= x.price);
            x.ownsSong = (purchased.includes(x._id.toString()));
        }
        let userData = {
            username: user.username,
            coins: user.coins
        };
        return res.render('individualPages/store', { trebleSongs: trebleSongs, bassSongs: bassSongs, coins: user.coins, user: userData });
    });

router
    .route('/')
    .post(async(req, res) => {
        let created = await accountFunctions.create(req.body['username'], req.body['password'], []);
        let user = null;
        if (req.session.user) {
            user = {
                username: req.session.user.username,
                coins: req.session.user.coins
            }
        }
        return res.render('individualPages/homepage', { user: user });
    });

router
    .route('/allSongs/begin/:id')
    .get(async(req, res) => {
        const song = await songFunctions.getSong(req.params.id);
        const details = {
            title: song.name,
            img: song.image,
            details: song.details
        }
        let user = null;
        if (req.session.user) {
            user = {
                username: req.session.user.username,
                coins: req.session.user.coins
            }
        }
        return res.render('individualPages/newLesson', {
            name: song.name,
            subtitle: '',
            details: [details],
            level: req.params.id,
            levelName: '',
            user: user
        })
    });

router
    .route('/allSongs/play/:id')
    .get(async(req, res) => {
        const song = await songFunctions.getSong(req.params.id);
        if (song.clef == 'bass') {
            return renderSongLevel(req, song.notes, song.name, bassData.bass_levels, res, 'bass', 'notes')
        } else if (song.clef == 'treble') {
            return renderSongLevel(req, song.notes, song.name, trebleData.treble_levels, res, 'treble', 'notes')
        }
    });

router
    .route('/buySong')
    .post(async(req, res) => {
        try {
            const result = await accountFunctions.buySong(req.session.user._id, req.body.song);
            req.session.user.coins = result.coins;
            return res.redirect('/store');
        } catch (e) {
            let user = null;
            if (req.session.user) {
                user = {
                    username: req.session.user.username,
                    coins: req.session.user.coins
                }
            }
            return res.status(500).render('individualPages/error', { error: { message: e, status: 500 }, user: user })
        }

    });

module.exports = router;