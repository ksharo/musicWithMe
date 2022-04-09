const express = require('express');
const router = express.Router();
const data = require('../data');
const globals = data.globals.globals;

router
    .route('/')
    .get(async(_, res) => {
        const purchased = await data.accountFunctions.getPurchased(globals.user._id);
        for (let x of purchased) {
            x.id = x._id;
        }
        return res.render('individualPages/lessons', {
            bbLevels: globals.bbLevels,
            btLevels: globals.btLevels,
            atLevels: globals.atLevels,
            abLevels: globals.abLevels,
            bbPerc: cleanPerc(globals.bbLevels, 13),
            btPerc: cleanPerc(globals.btLevels, 13),
            atPerc: cleanPerc(globals.atLevels, 13),
            abPerc: cleanPerc(globals.abLevels, 13),
            purchasedSongs: purchased
        });
    });


function cleanPerc(num, den) {
    return Math.ceil((Number(num) / Number(den)) * 100)
}
module.exports = router;