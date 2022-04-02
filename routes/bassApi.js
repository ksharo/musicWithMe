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
            title: 'New Note: F',
            img: '/public/assets/images/treble/treble_F1.png',
            details: 'This is what an F can look like in the treble clef. The F falls in the first space of the staff. Remember: spaces spell FACE'
        },
        {
            title: 'New Note: G',
            img: '/public/assets/images/treble/treble_G1.png',
            details: 'This is what a G can look like in the treble clef. The G falls on the second line of the staff, right above the F. Remember: lines stand for Every Good Boy Does Fine'
        }
    ],
    [
        {
            title: 'New Note: A',
            img: '/public/assets/images/treble/treble_A2.png',
            details: 'This is what an A can look like in the treble clef. The A falls in the second space of the staff, just above the G. Remember: spaces spell FACE'
        }
    ],
    [
        {
            title: 'New Note: B',
            img: '/public/assets/images/treble/treble_B2.png',
            details: 'This is what a B can look like in the treble clef. The B falls on the third space of the staff, just above the A. Remember: spaces spell FACE'
        },
        {
            title: 'New Note: E',
            img: '/public/assets/images/treble/treble_E1.png',
            details: 'This is what an E can look like in the treble clef. The E falls on the first line of the staff, right below the F. Remember: lines stand for Every Good Boy Does Fine'
        }
    ],
    [
        {
            title: 'Review Note: F',
            img: '/public/assets/images/treble/treble_F1.png',
            details: 'This is what an F can look like in the treble clef. The F falls in the first space of the staff. Remember: spaces spell FACE'
        },
        {
            title: 'Review Note: G',
            img: '/public/assets/images/treble/treble_G1.png',
            details: 'This is what a G can look like in the treble clef. The G falls on the second line of the staff, right above the F. Remember: lines stand for Every Good Boy Does Fine'
        },
        {
            title: 'Review Note: A',
            img: '/public/assets/images/treble/treble_A2.png',
            details: 'This is what an A can look like in the treble clef. The A falls in the second space of the staff, just above the G. Remember: spaces spell FACE'
        },
        {
            title: 'Review Note: B',
            img: '/public/assets/images/treble/treble_B2.png',
            details: 'This is what a B can look like in the treble clef. The B falls on the third space of the staff, just above the A. Remember: spaces spell FACE'
        },
        {
            title: 'Review Note: E',
            img: '/public/assets/images/treble/treble_E1.png',
            details: 'This is what an E can look like in the treble clef. The E falls on the first line of the staff, right below the F. Remember: lines stand for Every Good Boy Does Fine'
        }
    ],
    [
        {
            title: 'New Note: C',
            img: '/public/assets/images/treble/treble_C2.png',
            details: 'This is what a C can look like in the treble clef. The C falls in the third space of the staff, just above the A. Remember: spaces spell FACE'
        },
        {
            title: 'New Note: D',
            img: '/public/assets/images/treble/treble_D2.png',
            details: 'This is what a D can look like in the treble clef. The D falls on the fourth line of the staff, right above the C. Remember: lines stand for Every Good Boy Does Fine'
        }
    ],
    [
        {
            title: 'New Note: E',
            img: '/public/assets/images/treble/treble_E2.png',
            details: 'This is another way E can look in the treble clef. The E falls in the top space of the staff, just above the D. Remember: spaces spell FACE'
        },
        {
            title: 'New Note: F',
            img: '/public/assets/images/treble/treble_F2.png',
            details: 'This is another way F can look in the treble clef. The F falls on the top line of the staff, right above the E. Remember: lines stand for Every Good Boy Does Fine'
        }
    ],
    [
        {
            title: 'Review Note: C',
            img: '/public/assets/images/treble/treble_C2.png',
            details: 'This is what a C can look like in the treble clef. The C falls in the third space of the staff, just above the A. Remember: spaces spell FACE'
        },
        {
            title: 'Review Note: D',
            img: '/public/assets/images/treble/treble_D2.png',
            details: 'This is what a D can look like in the treble clef. The D falls on the fourth line of the staff, right above the C. Remember: lines stand for Every Good Boy Does Fine'
        },
        {
            title: 'Review Note: E',
            img: '/public/assets/images/treble/treble_E2.png',
            details: 'This is another way E can look in the treble clef. The E falls in the top space of the staff, just above the D. Remember: spaces spell FACE'
        },
        {
            title: 'Review Note: F',
            img: '/public/assets/images/treble/treble_F2.png',
            details: 'This is another way F can look in the treble clef. The F falls on the top line of the staff, right above the E. Remember: lines stand for Every Good Boy Does Fine'
        }
    ],
    [
        {
            title: 'New Note: C',
            img: '/public/assets/images/treble/treble_C1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the treble clef. The C is one line below the lowest line of the treble staff. This specific C is called Middle C on the piano, because it is in the middle of the keyboard.'
        },
        {
            title: 'New Note: D',
            img: '/public/assets/images/treble/treble_D1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the treble clef. The D is on the space below the lowest line of the treble staff.'
        }
    ],
    [
        {
            title: 'New Note: A',
            img: '/public/assets/images/treble/treble_A1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an A can look in the treble clef. The A is two lines below the lowest line of the treble staff.'
        },
        {
            title: 'New Note: B',
            img: '/public/assets/images/treble/treble_B1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the treble clef. The B is two spaces below the lowest line of the treble staff, right below the C.'
        }
    ],
    [
        {
            title: 'Review Note: C',
            img: '/public/assets/images/treble/treble_C1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the treble clef. The C is one line below the lowest line of the treble staff. This specific C is called Middle C on the piano, because it is in the middle of the keyboard.'
        },
        {
            title: 'Review Note: D',
            img: '/public/assets/images/treble/treble_D1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the treble clef. The D is on the space below the lowest line of the treble staff.'
        },
        {
            title: 'Review Note: A',
            img: '/public/assets/images/treble/treble_A1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an A can look in the treble clef. The A is two lines below the lowest line of the treble staff.'
        },
        {
            title: 'Review Note: B',
            img: '/public/assets/images/treble/treble_B1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the treble clef. The B is two spaces below the lowest line of the treble staff, right below the C.'
        }
    ],
    [
        {
            title: 'New Note: A',
            img: '/public/assets/images/treble/treble_A3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an A can look in the treble clef. The A is on the line above the top line of the treble staff.'
        },
        {
            title: 'New Note: G',
            img: '/public/assets/images/treble/treble_G2.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a G can look in the treble clef. The G is right above the top line of the treble staff.'
        }
    ],
    [
        {
            title: 'New Note: C',
            img: '/public/assets/images/treble/treble_C3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the treble clef. The C is two lines above the top line of the treble staff.'
        },
        {
            title: 'New Note: B',
            img: '/public/assets/images/treble/treble_B3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a B can look in the treble clef. The B is two spaces above the top line of the treble staff, right above A.'
        }
    ],
    [
        {
            title: 'Review Note: G',
            img: '/public/assets/images/treble/treble_G2.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a G can look in the treble clef. The G is right above the top line of the treble staff.'
        },
        {
            title: 'Review Note: A',
            img: '/public/assets/images/treble/treble_A3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an A can look in the treble clef. The A is on the line above the top line of the treble staff.'
        },
        {
            title: 'Review Note: B',
            img: '/public/assets/images/treble/treble_B3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a B can look in the treble clef. The B is two spaces above the top line of the treble staff, right above A.'
        },
        {
            title: 'Review Note: C',
            img: '/public/assets/images/treble/treble_C3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the treble clef. The C is two lines above the top line of the treble staff.'
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