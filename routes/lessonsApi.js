const express = require('express');
const router = express.Router();

router
    .route('/')
    .get(async (_, res) => {
        return res.render('individualPages/lessons');
    });

module.exports = router;