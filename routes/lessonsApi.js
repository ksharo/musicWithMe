const express = require('express');
const router = express.Router();
const data = require('../data');
const globals = data.globals.globals;

router
    .route('/')
    .get(async(req, res) => {
        const purchased = await data.accountFunctions.getPurchased(req.session.user._id);
        const user = await data.accountFunctions.getUser(req.session.user._id);
        for (let x of purchased) {
            x.id = x._id;
            x.hiScore = user.hiscores[x.clef + 'song' + x.id];
            if (!x.hiScore) {
                x.hiScore = 0;
            }
        }
        // basic bass free play high score
        let bbHigh = user.hiscores['bassnote12'] ? user.hiscores['bassnote12'] : 0;
        // basic treble free play high score
        let btHigh = user.hiscores['treblenote12'] ? user.hiscores['treblenote12'] : 0;
        // advanced bass free play high score
        let abHigh = user.hiscores['bassnote38'] ? user.hiscores['bassnote38'] : 0;
        // advanced treble free play high score
        let atHigh = user.hiscores['treblenote38'] ? user.hiscores['treblenote38'] : 0;
        let userData = {
            username: user.username,
            coins: user.coins
        }
        let bbLevels = 0; // bass note basic levels
        let btLevels = 0; // treble note basic levels
        let atLevels = 0; // treble note advanced
        let abLevels = 0; // bass note advanced
        let tSongs = 0; // treble song levels
        let bSongs = 0; // bass song levels
        let btTheory = 0; // basic treble theory
        let bbTheory = 0; // basic bass theory
        for (let x of user.lessonsCompleted) {
            if (x.includes('bass')) {
                if (x.includes('song')) {
                    let level = Number(x.split('song')[1]);
                    if (!isNaN(level)) {
                        bSongs += 1;
                    }
                } else if (x.includes('note')) {
                    let level = Number(x.split('note')[1]);
                    if (level > 12) {
                        abLevels += 1;
                    } else {
                        bbLevels += 1;
                    }
                } else {
                    bbTheory += 1;
                }
            } else if (x.includes('treble')) {
                if (x.includes('song')) {
                    let level = Number(x.split('song')[1]);
                    if (!isNaN(level)) {
                        tSongs += 1;
                    }
                } else if (x.includes('note')) {
                    let level = Number(x.split('note')[1]);
                    if (level > 12) {
                        atLevels += 1;
                    } else {
                        btLevels += 1;
                    }
                } else {
                    btTheory += 1;
                }
            }
        }

        return res.render('individualPages/lessons', {
            bbLevels: bbLevels,
            btLevels: btLevels,
            atLevels: atLevels + 13,
            abLevels: abLevels + 13,
            tSongs: tSongs,
            bSongs: bSongs,
            btTheory: btTheory,
            bbTheory: bbTheory,
            bbHigh: bbHigh,
            abHigh: abHigh,
            btHigh: btHigh,
            atHigh: atHigh,
            bbPerc: cleanPerc(bbLevels, 13),
            btPerc: cleanPerc(btLevels, 13),
            atPerc: cleanPerc(atLevels, 25),
            abPerc: cleanPerc(abLevels, 25),
            tsPerc: cleanPerc(tSongs, 7),
            bsPerc: cleanPerc(bSongs, 6),
            btTheoryPerc: cleanPerc(btTheory, 12),
            bbTheoryPerc: cleanPerc(bbTheory, 12),
            purchasedSongs: purchased,
            atDisabled: btLevels < 13 ? 'disabledLessonCard' : '',
            abDisabled: bbLevels < 13 ? 'disabledLessonCard' : '',
            bFreeplayDisabled: abLevels < 25 ? 'disabledLessonCard' : '',
            tFreeplayDisabled: atLevels < 25 ? 'disabledLessonCard' : '',
            user: userData
        });
    });


function cleanPerc(num, den) {
    return Math.ceil((Number(num) / Number(den)) * 100)
}
module.exports = router;