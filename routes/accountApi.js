const express = require('express');
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
    .route('/view')
    .post(async(req, res) => {
        // get account by username
        let account = await accountFunctions.getAndValidate(req.body['username'], req.body['password']);
        if (!account) {
            return res.status(200).render('individualPages/login', { error: "Error: Invalid Username or Password" });
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

module.exports = router;