const express = require('express');
const router = express.Router();
const data = require('../data');
const noteFunctions = data.noteFunctions;
const l1 = ['F1', 'G1'];
const l2 = l1.concat(['A2']);
const l3 = l2.concat(['B2', 'E1']);
const l4 = l3.concat(['C2', 'D2']);
const l5 = l4.concat(['E2', 'F2']);
const l6 = l5.concat(['C1', 'D1']);
const l7 = l6.concat(['A1', 'B1']);
const l8 = l7.concat(['A3', 'G2']);
const l9 = l8.concat(['C3', 'B3']);
const levels = [l1, l2, l3, l4, l5, l6, l7, l8, l9];
let curLevel = 0;

router
    .route('/')
    .get(async (_, res) => {
  console.log("hi mom");
        return res.render('individualPages/homepage');
    });

router
    .route('/nextLevel')
    .get(async (_, res) => {
  console.log("hi dad");
        curLevel = Number(curLevel) + 1;
        return noteFunctions.renderRandomLevel(curLevel, levels, res);
    });

router
    .route('/noteLesson/:level')
    .get(async (req, res) => {
        curLevel = Number(req.params.level);
        return noteFunctions.renderRandomLevel(curLevel, levels, res);
    });

router
    .route('/newLesson/:level')
    .get(async (req, res) => {
        return res.render('individualPages/newLesson', {name: 'Notes', level: req.params.level});
    });


module.exports = router;