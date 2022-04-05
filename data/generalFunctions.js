function renderLessonResult(res, strLevel, accuracy, score, totalQs, streak, song = false) {
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

    let result = 'did not pass :('
    let fail = true;
    if (accuracy >= 80 && score > timeThreshold * totalQs) {
        result = 'passed!'
        fail = false;
    }
    return res.status(200).render('individualPages/lessonResult', { result: result, grade: grade, fail: fail, minScore: timeThreshold * totalQs, score: score, streak: streak, accuracy: accuracy });
}

module.exports = {
    renderLessonResult
}