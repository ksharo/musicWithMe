const express = require('express');
const router = express.Router();
const data = require('../data');
const noteFunctions = data.noteFunctions;
const l1 = ['F1', 'G1'];
const l2 = l1.concat(['A2']);
const l3 = l2.concat(['B2', 'E1']);
const l4 = l3.concat(['C2', 'D2']);
const l5 = l4.concat(['E2', 'F2']);
const l6 = l5.concat(['C1', 'D1']);
const l7 = l6.concat(['A1', 'B1']);
const l8 = l7.concat(['A3', 'G2']);
const l9 = l8.concat(['C3', 'B3']);
const levels = [l1, l2, l3, l4, l5, l6, l7, l8, l9];
// F1, G1, A2, B2, E1, C2, D2, E2, F2, C1, D1, A1, B1, A3, G2, C3, B3
// 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16
const twinkle =  [9, 9, 1, 1, 2, 2, 1, 0, 0, 4, 4, 10, 10, 9, 1, 1, 0, 0, 4, 4, 10, 1, 1, 0, 0, 4, 4, 10, 9, 9, 1, 1, 2, 2, 1, 0, 0, 4, 4, 10, 10, 9];
const hotCrossBuns = [4, 10, 9, 4, 10, 9, 9, 9, 9, 9, 10, 10, 10, 10, 4, 10, 9];
const rowBoat = [9, 9, 9, 10, 4, 4, 10, 4, 0, 1, 5, 5, 5, 1, 1, 1, 4, 4, 4, 9, 9, 9, 1, 0, 4, 10, 9];
const londonBridge = [1, 2, 1, 0, 4, 0, 1, 10, 4, 0, 4, 0, 1, 1, 2, 1, 0, 4, 0, 1, 10, 1, 4, 9];
const joyOdePt1 = [4, 4, 0, 1, 1, 0, 4, 10, 9, 9, 10, 4, 4, 10, 10, 4, 4, 0, 1, 1, 0, 4, 10, 9, 9, 10, 4, 10, 9, 9];
const joyOdePt2 = [10, 10, 4, 9, 10, 4, 0, 4, 9, 10, 4, 0, 4, 10, 9, 10, 1, 4, 4, 0, 1, 1, 0, 4, 10, 9, 9, 10, 4, 10, 9, 9];
const songNames = ['Hot Cross Buns', 'London Bridge is Falling Down', 'Row, Row, Row Your Boat', 'Ode to Joy (pt. 1)', 'Twinkle Twinkle Little Star', 'Ode to Joy (pt. 2)'];
const songDetails = ['details about HCB', 'details about LBiFD', 'details about RRRYB', 'details about OTJ', 'details about TTLS', 'details about OTJ']
const songs = [hotCrossBuns, londonBridge, joyOdePt1, rowBoat,  joyOdePt2, twinkle, joyOdePt1.concat(joyOdePt2)];
let curLevel = 0;

router
    .route('/')
    .get(async (_, res) => {
        return res.render('individualPages/homepage');
    });

router
    .route('/noteLesson/:level')
    .get(async (req, res) => {
        curLevel = Number(req.params.level);
        if (levels.length <= curLevel) {
            return res.status(404).render('individualPages/error', {status: 404, message: 'Song with id ' + req.params.songId + 'does not exist!'});
        }
        return noteFunctions.renderRandomLevel(curLevel, levels, res);
    });

router 
    .route('/newLesson/notes/:level')
    .get(async (req, res) => {
        if (levels.length <= Number(req.params.level)) {
            return res.status(404).render('individualPages/error', {status: 404, message: 'Song with id ' + req.params.songId + 'does not exist!'});
        }
        return res.render('individualPages/newLesson', {name: 'Notes', subtitle: 'Learning ', level: req.params.level});
    });

router 
    .route('/newLesson/songs/:level')
    .get(async (req, res) => {
        if (songs.length <= Number(req.params.level)) {
            return res.status(404).render('individualPages/error', {status: 404, message: 'Song with id ' + req.params.level + 'does not exist!'});
        }
        return res.render('individualPages/newLesson', {name: 'Songs', subtitle: songNames[Number(req.params.level)], details: songDetails[Number(req.params.level)], level: req.params.level});
    });

router 
    .route('/songLesson/:songId')
    .get(async (req, res) => {
        if (songs.length <= Number(req.params.songId)) {
            return res.status(404).render('individualPages/error', {status: 404, message: 'Song with id ' + req.params.songId + 'does not exist!'});
        }
        const song = songs[Number(req.params.songId)];
        return noteFunctions.renderSongLevel(song, songNames[Number(req.params.songId)], levels, res);
    });


module.exports = router;