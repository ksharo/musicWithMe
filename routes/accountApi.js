const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const data = require('../data');
const globals = data.globals.globals;
const accountFunctions = data.accountFunctions;
const songFunctions = data.songFunctions;

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
        return res.status(200).render('individualPages/login', { user: user });
    });
router
    .route('/checkAccount')
    .post(async(req, res) => {
        // get account by username
        try {
            let account = await accountFunctions.getAndValidate(req.body['username'], req.body['password']);
            if (!account) {
                let user = null;
                if (req.session.user) {
                    user = {
                        username: req.session.user.username,
                        coins: req.session.user.coins
                    }
                }
                return res.status(400).render('individualPages/login', { error: "Error: Invalid Username or Password", user: user });
            }
            /* set up global variable */
            const newUser = {
                _id: account._id,
                username: account.username,
                coins: account.coins,
                purchased: account.purchasedSongs,
                levels: account.lessonsCompleted,
                hiscores: account.hiscores
            }
            req.session.user = newUser;
            // fill in handlebars data
            if (newUser.levels.length == 0) {
                return res.redirect('/account/view');
            } else {
                return res.redirect('/lessons');
            }
        } catch (e) {
            let user = null;
            if (req.session.user) {
                user = {
                    username: req.session.user.username,
                    coins: req.session.user.coins
                }
            }
            return res.status(400).render('individualPages/login', { error: e, user: user });
        }
    });

router
    .route('/create')
    .post(async(req, res) => {
        // create new account
        try {
            let levels = [];
            let highScores = {};
            let coins = 200;
            if (req.session.tmpUser) {
                levels = req.session.tmpUser.levels;
                highScores = req.session.tmpUser.highScores;
                coins = req.session.tmpUser.coins;
            }
            const account = await accountFunctions.create(req.body['username'], req.body['password'], levels, highScores, coins);
            if (!account) {
                let user = null;
                if (req.session.user) {
                    user = {
                        username: req.session.user.username,
                        coins: req.session.user.coins
                    }
                }
                return res.status(400).render('individualPages/createAccount', { error: "Error: Problem creating account", user: user });
            }
            /* set up global variable */
            const newUser = {
                _id: account._id,
                username: account.username,
                coins: account.coins,
                purchased: account.purchasedSongs,
                levels: account.lessonsCompleted,
                hiscores: account.hiscores
            }
            req.session.user = newUser;
            // fill in handlebars data
            return res.redirect('/account/view');
        } catch (e) {
            let user = null;
            if (req.session.user) {
                user = {
                    username: req.session.user.username,
                    coins: req.session.user.coins
                }
            }
            return res.status(400).render('individualPages/createAccount', { error: e, user: user });
        }
    });

router
    .route('/view')
    .get(async(req, res) => {
        const user = await accountFunctions.getUser(req.session.user._id);
        let userData = {
            username: user.username,
            coins: user.coins
        };
        const lessonsCompleted = [];
        for (let x of user.lessonsCompleted) {
            let name = 'No Name Available';
            let link = '';
            let difficulty = 'N/A';
            if (x.includes('bass')) {
                name = 'Bass ';
                link = '/bass/newLesson';
                if (x.includes('song')) {
                    let level = x.split('song')[1].toString();
                    if (isNaN(Number(level))) {
                        // get name of song!
                        const song = await songFunctions.getSong(level);
                        name = song.name;
                        link = '/allSongs/begin/' + level + '?bass';
                        difficulty = song.level;
                    } else {
                        name += 'Song Level ' + level;
                        link += '/songs/' + level;
                        level = Number(level);
                        if (level < 8) {
                            difficulty = 'Easy';
                        } else if (level < 20) {
                            difficulty = 'Medium';
                        } else {
                            difficulty = 'Hard';
                        }
                    }
                } else if (x.includes('note')) {
                    let level = x.split('note')[1].toString();
                    name += 'Note Level ' + level;
                    link += '/notes/' + level;
                    level = Number(level);
                    if (level < 8) {
                        difficulty = 'Easy';
                    } else if (level < 20) {
                        difficulty = 'Medium';
                    } else {
                        difficulty = 'Hard';
                    }
                }
            } else if (x.includes('treble')) {
                name = 'Treble ';
                link = '/treble/newLesson';
                if (x.includes('song')) {
                    let level = x.split('song')[1].toString();
                    if (isNaN(Number(level))) {
                        // get name of song!
                        const song = await songFunctions.getSong(level);
                        name = song.name;
                        link = '/allSongs/begin/' + level + '?treble';
                        difficulty = song.level;
                    } else {
                        name += 'Song Level ' + level;
                        link += '/songs/' + level;
                        level = Number(level);
                        if (level < 8) {
                            difficulty = 'Easy';
                        } else if (level < 20) {
                            difficulty = 'Medium';
                        } else {
                            difficulty = 'Hard';
                        }
                    }
                } else if (x.includes('note')) {
                    let level = x.split('note')[1].toString();
                    name += 'Note Level ' + level;
                    link += '/notes/' + level;
                    level = Number(level);
                    if (level < 8) {
                        difficulty = 'Easy';
                    } else if (level < 20) {
                        difficulty = 'Medium';
                    } else {
                        difficulty = 'Hard';
                    }
                }
            }
            let newLesson = {
                name: name,
                level: difficulty,
                hiscore: user.hiscores[x],
                link: link,
            }
            lessonsCompleted.push(newLesson);
        }
        // sort lessons completed by name
        lessonsCompleted.sort((a, b) => a.name.localeCompare(b.name));
        return res.status(200).render('individualPages/viewAccount', { username: user.username, lessonsCompleted: lessonsCompleted, user: userData });
    });

router
    .route('/create')
    .get(async(req, res) => {
        let user = null;
        if (req.session.user) {
            user = {
                username: req.session.user.username,
                coins: req.session.user.coins
            }
        }
        return res.status(200).render('individualPages/createAccount', { user: user });
    });

router
    .route('/logout')
    .get(async(req, res) => {
        req.session.destroy();
        return res.status(200).redirect('/');
    });


module.exports = router;