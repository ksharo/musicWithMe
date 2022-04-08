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

let curLevel = 0;
let streak = 0;
let score = 0;
let accuracy = 0;
let totalQs = 0;

router
    .route('/')
    .get(async(_, res) => {
        return res.status(200).render('individualPages/bassIntro');
    });

router
    .route('/noteLesson/:level')
    .get(async(req, res) => {
        curLevel = Number(req.params.level);
        if (bass_levels.length <= curLevel) {
            return res.status(404).render('individualPages/error', { status: 404, message: 'Song with id ' + req.params.songId + 'does not exist!' });
        }
        return noteFunctions.renderRandomLevel(curLevel, bass_levels, res, 'bass');
    });

router
    .route('/newLesson/notes/:level')
    .get(async(req, res) => {
        if (bass_levels.length <= Number(req.params.level)) {
            return res.status(404).render('individualPages/error', { status: 404, message: 'Bass Notes Level ' + req.params.level + 'does not exist!' });
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
        return res.render('individualPages/newLesson', {
            name: 'Bass Notes',
            subtitle: learningString == 'Learning ' ? 'Review!' : learningString.substring(0, learningString.length - 4),
            details: bass_noteDetails[Number(req.params.level)],
            level: req.params.level,
            levelName: req.params.level
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
            level: req.params.level,
            levelName: req.params.level
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
        return noteFunctions.renderSongLevel(song, songNames[Number(req.params.songId)], bass_levels, res, 'bass');
    });

router
    .route('/sendNoteData/:level')
    .post(async(req, res) => {
        score = req.body.score;
        streak = req.body.streak;
        totalQs = req.body.total;
        accuracy = Math.ceil((Number(req.body.correct) / Number(totalQs)) * 100);
        return res.status(200).json(req.body);
    });

router
    .route('/sendSongData/:level')
    .post(async(req, res) => {
        score = req.body.score;
        streak = req.body.streak;
        totalQs = req.body.total;
        accuracy = Math.ceil((Number(req.body.correct) / Number(totalQs)) * 100);
        return res.status(200).json(req.body);
    });

router
    .route('/endNoteLevel/:level')
    .get(async(req, res) => {
        return generalFunctions.renderLessonResult(res, req.params.level, accuracy, score, totalQs, streak, false)
    });

router
    .route('/endSongLevel/:level')
    .get(async(req, res) => {
        return generalFunctions.renderLessonResult(res, req.params.level, accuracy, score, totalQs, streak, true)
    });

module.exports = router;