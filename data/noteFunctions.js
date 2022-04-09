function renderRandomLevel(curLevel, levels, res, clef = 'treble') {
    // set number of rounds
    let numQs = 25;
    if (curLevel < 2) {
        numQs = 5;
    } else if (curLevel < 4) {
        numQs = 10;
    } else if (curLevel == 5) {
        numQs = 20;
    } else if (curLevel < 8) {
        numQs = 15;
    } else if (curLevel < 13) {
        numQs = 25;
    } else if (curLevel < 15) {
        numQs = 7;
    } else if (curLevel < 18) {
        numQs = 12;
    } else if (curLevel < 20) {
        numQs = 15;
    } else if (curLevel == levels.length - 1) {
        numQs = 50;
    }
    // get a random picture 
    const image = '/public/assets/images/' + clef + '/' + clef + '_' + levels[curLevel][Math.floor(Math.random() * levels[curLevel].length)] + '.png';
    // get a list of random pictures
    let imgList = image;
    for (let i = 0; i < numQs - 1; i++) {
        let newImg = ',/public/assets/images/' + clef + '/' + clef + '_' + levels[curLevel][Math.floor(Math.random() * levels[curLevel].length)] + '.png';
        while (imgList.endsWith(newImg.substring(1))) {
            newImg = ',/public/assets/images/' + clef + '/' + clef + '_' + levels[curLevel][Math.floor(Math.random() * levels[curLevel].length)] + '.png';
        }
        imgList += newImg;
    }
    // set the function that will be called
    const func = "processClick(this.innerHTML,'" + image + "'," + "'" + imgList + "'," + numQs + ")";
    // get only the note names
    const noteNames = [];
    const justNotes = [];
    for (let x of levels[curLevel]) {
        const n = x.substring(0, x.length - 1).replace('%23', '#');
        if (!justNotes.includes(n)) {
            noteNames.push({ note: n, img: image, func: func, imgList: imgList, numQs: numQs });
            justNotes.push(n);
        }
    }
    return res.render('individualPages/noteLesson', { notes: levels[curLevel].sort(), noteNames: noteNames.sort((a, b) => (a.note > b.note) ? 1 : -1), img: image, imgList: imgList, i: 1, numQs: numQs });
}

function renderSongLevel(songIndices, songName, levels, res, clef = 'treble', mode = 'indices') {
    const notes = levels[levels.length - 1];
    let imgList = [];
    // set pictures for the song
    for (let x of songIndices) {
        if (mode == 'indices') {
            imgList += '/public/assets/images/' + clef + '/' + clef + '_' + notes[x] + '.png,';
        } else {
            imgList += '/public/assets/images/' + clef + '/' + clef + '_' + x + '.png,';
        }
    }
    // get rid of ending comma
    imgList = imgList.substring(0, imgList.length - 1);
    const image = imgList.split(',')[0]
        // set the function that will be called
    const func = "processClick(this.innerHTML,'" + image + "'," + "'" + imgList + "'," + songIndices.length + ")";
    // get only the note names
    const noteNames = [];
    const justNotes = [];
    for (let x of notes) {
        const n = x.substring(0, x.length - 1).replace('%23', '#');
        if (!justNotes.includes(n)) {
            noteNames.push({ note: n, img: image, func: func, imgList: imgList, numQs: songIndices.length });
            justNotes.push(n);
        }
    }
    return res.render('individualPages/noteLesson', { notes: notes.sort(), songName: songName, noteNames: noteNames.sort((a, b) => (a.note > b.note) ? 1 : -1), img: image, imgList: imgList, i: 1, numQs: songIndices.length });
}

module.exports = {
    renderRandomLevel,
    renderSongLevel
}