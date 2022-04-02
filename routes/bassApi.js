const express = require('express');
const router = express.Router();
const data = require('../data');
const noteFunctions = data.noteFunctions;
const bass_l1 = ['C2', 'D2'];
const bass_l2 = bass_l1.concat(['E2']);
const bass_l3 = bass_l2.concat(['B1', 'F2']);
const bass_r0 = bass_l3;
const bass_l4 = bass_l3.concat(['G2','A2']);
const bass_l5 = bass_l4.concat(['A1', 'G1']);
const bass_r1 = bass_l5;
const bass_l6 = bass_l5.concat(['B2', 'C3']);
const bass_l7 = bass_l6.concat(['E1', 'F1']);
const bass_r2 = bass_l7;
const bass_l8 = bass_l7.concat(['C1', 'D1']);
const bass_l9 = bass_l8.concat(['D3', 'E3']);
const bass_r3 = bass_l9;

const bass_levels = [bass_l1, bass_l2, bass_l3, bass_r0, bass_l4, bass_l5, bass_r1, bass_l6, bass_l7, bass_r2, bass_l8, bass_l9, bass_r3];

const bass_noteDetails = [
    [
        {
            title: 'New Note: C',
            img: '/public/assets/images/bass/bass_C2.png',
            details: 'This is what a C can look like in the bass clef. The C falls in the second space of the staff. Remember: spaces stand for All Cows Eat Grass'
        },
        {
            title: 'New Note: D',
            img: '/public/assets/images/bass/bass_D2.png',
            details: 'This is what a D can look like in the bass clef. The D falls on the middle line of the staff, right above the C. Remember: lines stand for Good Boys Deserve Fudge Always'
        }
    ],
    [
        {
            title: 'New Note: E',
            img: '/public/assets/images/bass/bass_E2.png',
            details: 'This is what an E can look like in the bass clef. The E falls in the third space of the staff. Remember: spaces stand for All Cows Eat Grass'
        },
    ],
    [
        {
            title: 'New Note: B',
            img: '/public/assets/images/bass/bass_B1.png',
            details: 'This is what a B can look like in the bass clef. The B falls on the first line of the staff. Remember: lines stand for Good Boys Deserve Fudge Always'
        },
        {
            title: 'New Note: F',
            img: '/public/assets/images/bass/bass_F2.png',
            details: 'This is what an F can look like in the bass clef. The F falls on the fourth line of the staff. Remember: lines stand for Good Boys Deserve Fudge Always'
        }
    ],
    [
        {
            title: 'Review Note: B',
            img: '/public/assets/images/bass/bass_B1.png',
            details: 'This is what a B can look like in the bass clef. The B falls on the first line of the staff. Remember: lines stand for Good Boys Deserve Fudge Always'
        },
        {
            title: 'Review Note: C',
            img: '/public/assets/images/bass/bass_C2.png',
            details: 'This is what a C can look like in the bass clef. The C falls in the second space of the staff. Remember: spaces stand for All Cows Eat Grass'
        },
        {
            title: 'Review Note: D',
            img: '/public/assets/images/bass/bass_D2.png',
            details: 'This is what a D can look like in the bass clef. The D falls on the middle line of the staff, right above the C. Remember: lines stand for Good Boys Deserve Fudge Always'
        },
        {
            title: 'Review Note: E',
            img: '/public/assets/images/bass/bass_E2.png',
            details: 'This is what an E can look like in the bass clef. The E falls in the third space of the staff. Remember: spaces stand for All Cows Eat Grass'
        },
        {
            title: 'Review Note: F',
            img: '/public/assets/images/bass/bass_F2.png',
            details: 'This is what an F can look like in the bass clef. The F falls on the fourth line of the staff. Remember: lines stand for Good Boys Deserve Fudge Always'
        }
    ],
    [
        {
            title: 'New Note: G',
            img: '/public/assets/images/bass/bass_G2.png',
            details: 'This is what a G can look like in the bass clef. The G falls in the top space of the staff. Remember: spaces stand for All Cows Eat Grass'
        },
        {
            title: 'New Note: A',
            img: '/public/assets/images/bass/bass_A2.png',
            details: 'This is what an A can look like in the bass clef. The A falls on the top line of the staff. Remember: Remember: lines stand for Good Boys Deserve Fudge Always'
        }
    ],
    [
        {
            title: 'New Note: A',
            img: '/public/assets/images/bass/bass_A1.png',
            details: 'This is what an A can look like in the bass clef. The A falls in the first space of the staff. Remember: spaces stand for All Cows Eat Grass'
        },
        {
            title: 'New Note: G',
            img: '/public/assets/images/bass/bass_G1.png',
            details: 'This is what a G can look like in the bass clef. The G falls on the first line of the staff. Remember: Remember: lines stand for Good Boys Deserve Fudge Always'
        }
    ],
    [
        {
            title: 'Review Note: G',
            img: '/public/assets/images/bass/bass_G2.png',
            details: 'This is what a G can look like in the bass clef. The G falls in the top space of the staff. Remember: spaces stand for All Cows Eat Grass'
        },
        {
            title: 'Review Note: A',
            img: '/public/assets/images/bass/bass_A2.png',
            details: 'This is what an A can look like in the bass clef. The A falls on the top line of the staff. Remember: Remember: lines stand for Good Boys Deserve Fudge Always'
        },
        {
            title: 'Review Note: A',
            img: '/public/assets/images/bass/bass_A1.png',
            details: 'This is what an A can look like in the bass clef. The A falls in the first space of the staff. Remember: spaces stand for All Cows Eat Grass'
        },
        {
            title: 'Review Note: G',
            img: '/public/assets/images/bass/bass_G1.png',
            details: 'This is what a G can look like in the bass clef. The G falls on the first line of the staff. Remember: Remember: lines stand for Good Boys Deserve Fudge Always'
        }
    ],
    [
        {
            title: 'New Note: B',
            img: '/public/assets/images/bass/bass_B2.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a B can look in the bass clef. The B is one space above the top line of the bass staff.'
        },
        {
            title: 'New Note: C',
            img: '/public/assets/images/bass/bass_C3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the bass clef. The C is on the line above the top line of the bass staff. This specific C is called Middle C on the piano, because it is in the middle of the keyboard.'
        }
    ],
    [
        {
            title: 'New Note: E',
            img: '/public/assets/images/bass/bass_E1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an E can look in the bass clef. The E is one line below the bottom line of the bass staff.'
        },
        {
            title: 'New Note: F',
            img: '/public/assets/images/bass/bass_F1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an F can look in the bass clef. The F is on the space below the bottom line of the bass staff.'
        }
    ],
    [
        {
            title: 'Review Note: B',
            img: '/public/assets/images/bass/bass_B2.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a B can look in the bass clef. The B is one space above the top line of the bass staff.'
        },
        {
            title: 'Review Note: C',
            img: '/public/assets/images/bass/bass_C3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the bass clef. The C is on the line above the top line of the bass staff. This specific C is called Middle C on the piano, because it is in the middle of the keyboard.'
        },
        {
            title: 'Review Note: E',
            img: '/public/assets/images/bass/bass_E1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an E can look in the bass clef. The E is one line below the bottom line of the bass staff.'
        },
        {
            title: 'Review Note: F',
            img: '/public/assets/images/bass/bass_F1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an F can look in the bass clef. The F is on the space below the bottom line of the bass staff.'
        }
    ],
    [
        {
            title: 'New Note: C',
            img: '/public/assets/images/bass/bass_C1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the bass clef. The C is two lines below the bottom line of the bass staff.'
        },
        {
            title: 'New Note: D',
            img: '/public/assets/images/bass/bass_D1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the bass clef. The D is right above the low C.'
        }
    ],
    [
        {
            title: 'New Note: D',
            img: '/public/assets/images/bass/bass_D3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the bass clef. The D is two spaces above the top line of the bass staff.'
        },
        {
            title: 'New Note: E',
            img: '/public/assets/images/bass/bass_E3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an E can look in the bass clef. The E is two lines above the top line of the treble staff, right above D.'
        }
    ],
    [
        {
            title: 'New Note: C',
            img: '/public/assets/images/bass/bass_C1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the bass clef. The C is two lines below the bottom line of the bass staff.'
        },
        {
            title: 'New Note: D',
            img: '/public/assets/images/bass/bass_D1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the bass clef. The D is right above the low C.'
        },
        {
            title: 'New Note: D',
            img: '/public/assets/images/bass/bass_D3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the bass clef. The D is two spaces above the top line of the bass staff.'
        },
        {
            title: 'New Note: E',
            img: '/public/assets/images/bass/bass_E3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an E can look in the bass clef. The E is two lines above the top line of the treble staff, right above D.'
        }
    ]
];

let curLevel = 0;

router
    .route('/noteLesson/:level')
    .get(async (req, res) => {
        curLevel = Number(req.params.level);
        if (bass_levels.length <= curLevel) {
            return res.status(404).render('individualPages/error', {status: 404, message: 'Song with id ' + req.params.songId + 'does not exist!'});
        }
        return noteFunctions.renderRandomLevel(curLevel, bass_levels, res, 'bass');
    });

router 
    .route('/newLesson/notes/:level')
    .get(async (req, res) => {
        if (bass_levels.length <= Number(req.params.level)) {
            return res.status(404).render('individualPages/error', {status: 404, message: 'Bass Notes Level ' + req.params.level + 'does not exist!'});
        }
        let newNotes = [];
        if (req.params.level != 0) {
            newNotes = bass_levels[req.params.level].filter(x => !bass_levels[req.params.level-1].includes(x));
        }
        else {
            newNotes = bass_levels[0];
        }
        let learningString = 'Learning ';
        for (let x of newNotes) {
            learningString += x.substring(0, x.length-1) + ' and ';
        }
        return res.render('individualPages/newLesson', {
            name: 'Bass Notes',
            subtitle: learningString == 'Learning ' ? 'Review!' : learningString.substring(0, learningString.length-4), 
            details: bass_noteDetails[Number(req.params.level)],
            level: req.params.level});
    });

router 
    .route('/newLesson/songs/:level')
    .get(async (req, res) => {
        if (songs.length <= Number(req.params.level)) {
            return res.status(404).render('individualPages/error', {status: 404, message: 'Song with id ' + req.params.level + 'does not exist!'});
        }
        return res.render('individualPages/newLesson', {
            name: 'Songs', 
            subtitle: songNames[Number(req.params.level)], 
            details: songDetails[Number(req.params.level)], 
            level: req.params.level});
    });

router 
    .route('/songLesson/:songId')
    .get(async (req, res) => {
        if (songs.length <= Number(req.params.songId)) {
            return res.status(404).render('individualPages/error', {
                status: 404, 
                message: 'Song with id ' + req.params.songId + 'does not exist!'});
        }
        const song = songs[Number(req.params.songId)];
        return noteFunctions.renderSongLevel(song, songNames[Number(req.params.songId)], treble_levels, res);
    });


module.exports = router;