const accountFunctions = require('./accountData');

async function renderLessonResult(req, res, strLevel, clef, type, accuracy, score, totalQs, streak, coins, song = false) {
    let level = Number(strLevel);
    let grade = 'A+';
    let timeThreshold = 800;
    if (song) {
        timeThreshold = 500;
    } else if (level < 2) {
        timeThreshold = 500;
    } else if (level < 5) {
        timeThreshold = 600;
    } else if (level < 7) {
        timeThreshold = 650;
    } else if (level < 9) {
        timeThreshold = 700;
    } else if (level < 11) {
        timeThreshold = 750;
    }

    let result = 'did not pass'
    let fail = true;
    grade = '&#9785;';
    let newHi = false;
    /* Calculate and set high scores */
    levelName = clef + type + strLevel;
    if (!req.session.user) {
        if (!req.session.tmpUser) {
            highScores = {};
            highScores[levelName] = score;
            req.session.tmpUser = {
                levels: [levelName],
                highScores: highScores,
                coins: 50 + coins
            }
        } else {
            req.session.tmpUser.coins += coins;
            if (!req.session.tmpUser.levels.includes(levelName)) {
                req.session.tmpUser.levels.push(levelName);
                req.session.tmpUser.highScores[levelName] = score;
            } else {
                if (req.session.tmpUser.highScores[levelName] < score) {
                    req.session.tmpUser.highScores[levelName] = score;
                    newHi = true;
                }
            }
        }
    } else {
        const user = await accountFunctions.getUser(req.session.user._id);
        const updatedCoins = user.coins + coins;
        const curLevels = [...user.lessonsCompleted];
        const curHighScores = Object.assign({}, user.hiscores);
        if (!curLevels.includes(levelName)) {
            curLevels.push(levelName);
            curHighScores[levelName] = score;
        } else {
            if (curHighScores[levelName] < score) {
                curHighScores[levelName] = score;
                newHi = true;
            }
        }
        const updatedConfig = {
            lessonsCompleted: curLevels,
            hiscores: curHighScores,
            coins: updatedCoins
        };
        await accountFunctions.updateUser(req.session.user._id, updatedConfig);
    }
    /* if the players has won, set their grade */
    if (accuracy >= 80 && score > timeThreshold * totalQs) {
        if ((accuracy >= 95 && score > (timeThreshold * totalQs * 1.2)) || (accuracy >= 92 && score > (timeThreshold * totalQs * 1.3))) {
            grade = 'A+';
        } else if ((accuracy >= 90 && score > (timeThreshold * totalQs) * 1.1) || (accuracy >= 88 && score > (timeThreshold * totalQs * 1.2))) {
            grade = 'A';
        } else if (accuracy >= 85 || (accuracy >= 82 && score > (timeThreshold * totalQs * 1.3))) {
            grade = 'B+';
        } else {
            grade = 'B';
        }
        result = 'passed!'
        fail = false;
    }
    return res.status(200).render('individualPages/lessonResult', { result: result, grade: grade, fail: fail, minScore: timeThreshold * totalQs, score: score, streak: streak, accuracy: accuracy, finalRound: Number(strLevel) == 38 || isNaN(Number(strLevel)), newHi: newHi, coins: coins });
}

module.exports = {
    renderLessonResult
}