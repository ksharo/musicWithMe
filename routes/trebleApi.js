const express = require('express');
const router = express.Router();
const data = require('../data');
const noteFunctions = data.noteFunctions;
const trebleData = data.trebleData;


const songs = trebleData.songs;
const songDetails = trebleData.songDetails;
const treble_levels = trebleData.treble_levels;
const treble_noteDetails = trebleData.treble_noteDetails;
const songNames = trebleData.songNames;

let curLevel = 0;
let streak = 0;
let score = 0;
let accuracy = 0;

router
    .route('/')
    .get(async(_, res) => {
        return res.status(200).render('individualPages/trebleIntro');
    });

router
    .route('/noteLesson/:level')
    .get(async(req, res) => {
        curLevel = Number(req.params.level);
        if (treble_levels.length <= curLevel) {
            return res.status(404).render('individualPages/error', { status: 404, message: 'Song with id ' + req.params.songId + 'does not exist!' });
        }
        return noteFunctions.renderRandomLevel(curLevel, treble_levels, res, 'treble');
    });

router
    .route('/newLesson/notes/:level')
    .get(async(req, res) => {
        if (treble_levels.length <= Number(req.params.level)) {
            return res.status(404).render('individualPages/error', { status: 404, message: 'Treble Notes Level  ' + req.params.level + 'does not exist!' });
        }
        let newNotes = [];
        if (req.params.level != 0) {
            newNotes = treble_levels[req.params.level].filter(x => !treble_levels[req.params.level - 1].includes(x));
        } else {
            newNotes = treble_levels[0];
        }
        let learningString = 'Learning ';
        for (let x of newNotes) {
            learningString += x.substring(0, x.length - 1) + ' and ';
        }
        return res.render('individualPages/newLesson', {
            name: 'Treble Notes',
            subtitle: learningString == 'Learning ' ? 'Review!' : learningString.substring(0, learningString.length - 4),
            details: treble_noteDetails[Number(req.params.level)],
            level: req.params.level
        });
    });

router
    .route('/newLesson/songs/:level')
    .get(async(req, res) => {
        if (songs.length <= Number(req.params.level)) {
            return res.status(404).render('individualPages/error', { status: 404, message: 'Song with id ' + req.params.level + 'does not exist!' });
        }
        return res.render('individualPages/newLesson', {
            name: 'Songs',
            subtitle: songNames[Number(req.params.level)],
            details: songDetails[Number(req.params.level)],
            level: req.params.level
        });
    });

router
    .route('/songLesson/:songId')
    .get(async(req, res) => {
        if (songs.length <= Number(req.params.songId)) {
            return res.status(404).render('individualPages/error', {
                status: 404,
                message: 'Song with id ' + req.params.songId + 'does not exist!'
            });
        }
        const song = songs[Number(req.params.songId)];
        return noteFunctions.renderSongLevel(song, songNames[Number(req.params.songId)], treble_levels, res);
    });

router
    .route('/sendNoteData/:level')
    .post(async(req, res) => {
        score = req.body.score;
        streak = req.body.streak;
        accuracy = Math.ceil((Number(req.body.correct) / Number(req.body.total)) * 100);
        return res.status(200).json(req.body);
    });

router
    .route('/sendSongData/:level')
    .post(async(req, res) => {
        score = req.body.score;
        streak = req.body.streak;
        accuracy = Math.ceil((Number(req.body.correct) / Number(req.body.total)) * 100);
        return res.status(200).json(req.body);
    });

router
    .route('/endNoteLevel/:level')
    .get(async(_, res) => {
        return res.status(200).render('individualPages/lessonResult', { result: 'passed!', score: score, streak: streak, accuracy: accuracy });
    });

router
    .route('/endSongLevel/:level')
    .get(async(_, res) => {
        return res.status(200).render('individualPages/lessonResult', { result: 'passed!', score: score, streak: streak, accuracy: accuracy });
    });

module.exports = router;