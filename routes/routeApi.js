const express = require('express');
const router = express.Router();
const data = require('../data');
const noteFunctions = data.noteFunctions;
const l1 = ['F1', 'G1'];
const l2 = l1.concat(['A2']);
const l3 = l2.concat(['B2', 'E1']);
const l4 = l3.concat(['C2', 'D2']);
const l5 = l4.concat(['E2', 'F2']);
// REVIEW LEVEL
const r1 = l5;
const l6 = l5.concat(['C1', 'D1']);
const l7 = l6.concat(['A1', 'B1']);
// REVIEW LEVEL
const r2 = l7;
const l8 = l7.concat(['A3', 'G2']);
const l9 = l8.concat(['C3', 'B3']);
const r3 = l9;
const levels = [l1, l2, l3, l4, l5, r1, l6, l7, r2, l8, l9, r3];
// F1, G1, A2, B2, E1, C2, D2, E2, F2, C1, D1, A1, B1, A3, G2, C3, B3
// 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16
const twinkle =  [9, 9, 1, 1, 2, 2, 1, 0, 0, 4, 4, 10, 10, 9, 1, 1, 0, 0, 4, 4, 10, 1, 1, 0, 0, 4, 4, 10, 9, 9, 1, 1, 2, 2, 1, 0, 0, 4, 4, 10, 10, 9];
const hotCrossBuns = [4, 10, 9, 4, 10, 9, 9, 9, 9, 9, 10, 10, 10, 10, 4, 10, 9];
const rowBoat = [9, 9, 9, 10, 4, 4, 10, 4, 0, 1, 5, 5, 5, 1, 1, 1, 4, 4, 4, 9, 9, 9, 1, 0, 4, 10, 9];
const londonBridge = [1, 2, 1, 0, 4, 0, 1, 10, 4, 0, 4, 0, 1, 1, 2, 1, 0, 4, 0, 1, 10, 1, 4, 9];
const joyOdePt1 = [4, 4, 0, 1, 1, 0, 4, 10, 9, 9, 10, 4, 4, 10, 10, 4, 4, 0, 1, 1, 0, 4, 10, 9, 9, 10, 4, 10, 9, 9];
const joyOdePt2 = [10, 10, 4, 9, 10, 4, 0, 4, 9, 10, 4, 0, 4, 10, 9, 10, 1, 4, 4, 0, 1, 1, 0, 4, 10, 9, 9, 10, 4, 10, 9, 9];
const songNames = ['Hot Cross Buns', 'London Bridge is Falling Down', 'Ode to Joy (pt. 1)', 'Row, Row, Row Your Boat',  'Ode to Joy (pt. 2)', 'Twinkle Twinkle Little Star', , 'Ode to Joy (full)'];
const songDetails = [
    [{
        title: 'New Song: Hot Cross Buns',
        img: '',
        details: 'details about HCB',
    }], 
    [{
        title: 'New Song: London Bridge is Falling Down',
        img: '',
        details: 'details about LBiFD',
    }], 
    [{
        title: 'New Song: Ode to Joy',
        img: '',
        details: 'details about OTJ',
    }], 
    [{
        title: 'New Song: Row, Row, Row Your Boat',
        img: '',
        details: 'details about RRRYB',
    }], 
    [{
        title: 'Ode to Joy',
        img: '',
        details: 'details about OTJ',
    }], 
    [{
        title: 'New Song: Twinkle Twinkle Little Star',
        img: '',
        details: 'details about TTLS',
    }], 
    [{
        title: 'Review Song: Ode to Joy',
        img: '',
        details: 'details about OTJ',
    }]
];

const noteDetails = [
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
        },
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
        let newNotes = [];
        if (req.params.level != 0) {
            newNotes = levels[req.params.level].filter(x => !levels[req.params.level-1].includes(x));
        }
        else {
            newNotes = levels[0];
        }
        let learningString = 'Learning ';
        for (let x of newNotes) {
            learningString += x.substring(0, x.length-1) + ' and ';
        }
        return res.render('individualPages/newLesson', {
            name: 'Notes',
            subtitle: learningString == 'Learning ' ? 'Review!' : learningString.substring(0, learningString.length-4), 
            details: noteDetails[Number(req.params.level)],
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
        return noteFunctions.renderSongLevel(song, songNames[Number(req.params.songId)], levels, res);
    });


module.exports = router;