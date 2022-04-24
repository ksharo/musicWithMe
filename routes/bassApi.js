const express = require('express');
const router = express.Router();
const data = require('../data');
const noteFunctions = data.noteFunctions;
const generalFunctions = data.generalFunctions;
const bassData = data.bassData;

const songDetails = bassData.songDetails;
const songNames = bassData.songNames;
const songs = bassData.songs;
const bass_noteDetails = bassData.bass_noteDetails;
const bass_levels = bassData.bass_levels;
const scales = bassData.scales;
const scaleNames = bassData.scaleNames;
const scaleDetails = bassData.scaleDetails;

let curLevel = 0;
let streak = 0;
let score = 0;
let accuracy = 0;
let totalQs = 0;
let coins = 0;

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
        return res.status(200).render('individualPages/bassIntro', { user: user });
    });

router
    .route('/noteLesson/:level')
    .get(async(req, res) => {
        curLevel = Number(req.params.level);
        if (bass_levels.length <= curLevel) {
            let user = null;
            if (req.session.user) {
                user = {
                    username: req.session.user.username,
                    coins: req.session.user.coins
                }
            }
            return res.status(404).render('individualPages/error', { status: 404, message: 'Song with id ' + req.params.songId + 'does not exist!', user: user });
        }
        return noteFunctions.renderRandomLevel(req, curLevel, bass_levels, res, 'bass');
    });

router
    .route('/newLesson/notes/:level')
    .get(async(req, res) => {
        if (bass_levels.length <= Number(req.params.level)) {
            let user = null;
            if (req.session.user) {
                user = {
                    username: req.session.user.username,
                    coins: req.session.user.coins
                }
            }
            return res.status(404).render('individualPages/error', { status: 404, message: 'Bass Notes Level ' + req.params.level + 'does not exist!', user: user });
        }
        let newNotes = [];
        if (req.params.level != 0) {
            newNotes = bass_levels[req.params.level].filter(x => !bass_levels[req.params.level - 1].includes(x));
        } else {
            newNotes = bass_levels[0];
        }
        let learningString = 'Learning ';
        if (newNotes.length > 6) {
            learningString = 'Congratulations!      ';
        } else {
            for (let x of newNotes) {
                learningString += x.substring(0, x.length - 1).replace('%23', '#') + ' and ';
            }
        }
        let user = null;
        if (req.session.user) {
            user = {
                username: req.session.user.username,
                coins: req.session.user.coins
            }
        }
        return res.render('individualPages/newLesson', {
            name: 'Bass Notes',
            subtitle: learningString == 'Learning ' ? 'Review!' : learningString.substring(0, learningString.length - 4),
            details: bass_noteDetails[Number(req.params.level)],
            level: req.params.level,
            levelName: req.params.level,
            user: user
        });
    });

router
    .route('/newLesson/theory/:level')
    .get(async(req, res) => {
        if (scales.length <= Number(req.params.level)) {
            let user = null;
            if (req.session.user) {
                user = {
                    username: req.session.user.username,
                    coins: req.session.user.coins
                }
            }
            return res.status(404).render('individualPages/error', { status: 404, message: 'Theory level with id ' + req.params.level + 'does not exist!', user: user });
        }
        let user = null;
        if (req.session.user) {
            user = {
                username: req.session.user.username,
                coins: req.session.user.coins
            }
        }
        return res.render('individualPages/newLesson', {
            name: 'Theory',
            subtitle: scaleNames[Number(req.params.level)],
            details: scaleDetails[Number(req.params.level)],
            level: req.params.level,
            levelName: req.params.level,
            user: user
        });
    });

router
    .route('/newLesson/songs/:level')
    .get(async(req, res) => {
        if (songs.length <= Number(req.params.level)) {
            let user = null;
            if (req.session.user) {
                user = {
                    username: req.session.user.username,
                    coins: req.session.user.coins
                }
            }
            return res.status(404).render('individualPages/error', { status: 404, message: 'Song with id ' + req.params.level + 'does not exist!', user: user });
        }
        let user = null;
        if (req.session.user) {
            user = {
                username: req.session.user.username,
                coins: req.session.user.coins
            }
        }
        return res.render('individualPages/newLesson', {
            name: 'Songs',
            subtitle: songNames[Number(req.params.level)],
            details: songDetails[Number(req.params.level)],
            level: req.params.level,
            levelName: req.params.level,
            user: user
        });
    });

router
    .route('/songLesson/:songId')
    .get(async(req, res) => {
        if (songs.length <= Number(req.params.songId)) {
            let user = null;
            if (req.session.user) {
                user = {
                    username: req.session.user.username,
                    coins: req.session.user.coins
                }
            }
            return res.status(404).render('individualPages/error', {
                status: 404,
                message: 'Song with id ' + req.params.songId + 'does not exist!',
                user: user
            });
        }
        const song = songs[Number(req.params.songId)];
        return noteFunctions.renderSongLevel(req, song, songNames[Number(req.params.songId)], bass_levels, res, 'bass');
    });

router
    .route('/theoryLesson/:levelId')
    .get(async(req, res) => {
        if (scales.length <= Number(req.params.levelId)) {
            let user = null;
            if (req.session.user) {
                user = {
                    username: req.session.user.username,
                    coins: req.session.user.coins
                }
            }
            return res.status(404).render('individualPages/error', {
                status: 404,
                message: 'Theory Lesson with id ' + req.params.levelId + 'does not exist!',
                user: user
            });
        }
        const scale = scales[Number(req.params.levelId)];
        return noteFunctions.renderSongLevel(req, scale, scaleNames[Number(req.params.levelId)], bass_levels, res, 'bass');
    });

router
    .route('/sendNoteData/:level')
    .post(async(req, res) => {
        score = req.body.score;
        streak = req.body.streak;
        totalQs = req.body.total;
        accuracy = Math.ceil((Number(req.body.correct) / Number(totalQs)) * 100);
        coins = req.body.levelCoins;
        return res.status(200).json(req.body);
    });

router
    .route('/sendSongData/:level')
    .post(async(req, res) => {
        score = req.body.score;
        streak = req.body.streak;
        totalQs = req.body.total;
        accuracy = Math.ceil((Number(req.body.correct) / Number(totalQs)) * 100);
        coins = req.body.levelCoins;
        return res.status(200).json(req.body);
    });

router
    .route('/sendTheoryData/:level')
    .post(async(req, res) => {
        score = req.body.score;
        streak = req.body.streak;
        totalQs = req.body.total;
        accuracy = Math.ceil((Number(req.body.correct) / Number(totalQs)) * 100);
        coins = req.body.levelCoins;
        return res.status(200).json(req.body);
    });

router
    .route('/endNoteLevel/:level')
    .get(async(req, res) => {
        const rendered = await generalFunctions.renderLessonResult(req, res, req.params.level, 'bass', 'note', accuracy, score, totalQs, streak, coins, false);
        return rendered;
    });

router
    .route('/endSongLevel/:level')
    .get(async(req, res) => {
        const rendered = await generalFunctions.renderLessonResult(req, res, req.params.level, 'bass', 'song', accuracy, score, totalQs, streak, coins, true)
        return rendered;
    });

router
    .route('/endTheoryLevel/:level')
    .get(async(req, res) => {
        const rendered = await generalFunctions.renderLessonResult(req, res, req.params.level, 'bass', 'theory', accuracy, score, totalQs, streak, coins, true);
        return rendered;
    });

module.exports = router;