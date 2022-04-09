const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const data = require('../data');
const globals = data.globals.globals;
const accountFunctions = data.accountFunctions;

router
    .route('/')
    .get(async(_, res) => {
        return res.status(200).render('individualPages/login');
    });
router
    .route('/checkAccount')
    .post(async(req, res) => {
        // get account by username
        try {
            let account = await accountFunctions.getAndValidate(req.body['username'], req.body['password']);
            if (!account) {
                return res.status(400).render('individualPages/login', { error: "Error: Invalid Username or Password" });
            }
            /* set up global variable */
            const newUser = {
                _id: account._id,
                username: account.username,
                coins: account.coins,
                purchased: account.purchasedSongs,
                levels: account.lessonsCompleted
            }
            req.session.user = newUser;
            // fill in handlebars data
            return res.redirect('/account/view');
        } catch (e) {
            return res.status(400).render('individualPages/login', { error: e });
        }
    });

router
    .route('/create')
    .post(async(req, res) => {
        // create new account
        try {
            let account = await accountFunctions.create(req.body['username'], req.body['password']);
            if (!account) {
                return res.status(400).render('individualPages/createAccount', { error: "Error: Problem creating account" });
            }
            /* set up global variable */
            const newUser = {
                _id: account._id,
                username: account.username,
                coins: account.coins,
                purchased: account.purchasedSongs,
                levels: account.lessonsCompleted
            }
            req.session.user = newUser;
            // fill in handlebars data
            return res.redirect('/account/view');
        } catch (e) {
            return res.status(400).render('individualPages/createAccount', { error: e });
        }
    });

router
    .route('/view')
    .get(async(req, res) => {
        return res.status(200).render('individualPages/viewAccount', { username: req.session.user.username, lessonsCompleted: req.session.user.levels });
    })
router
    .route('/create')
    .get(async(_, res) => {
        return res.status(200).render('individualPages/createAccount');
    });

router
    .route('/logout')
    .get(async(req, res) => {
        req.session.destroy();
        return res.status(200).redirect('/');
    });


module.exports = router;