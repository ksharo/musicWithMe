function renderRandomLevel(curLevel, levels, res) {
    // set number of rounds
    let numQs = 10;
    if (curLevel < 4) {
        numQs = 5;
    }
    // get a random picture 
    const image = '/public/assets/images/treble/treble_' + levels[curLevel][Math.floor(Math.random() * levels[curLevel].length)] + '.png';
    // get a list of random pictures
    let imgList = image;
    for (let i = 0; i < numQs-1; i++) {
        let newImg = ',/public/assets/images/treble/treble_' + levels[curLevel][Math.floor(Math.random() * levels[curLevel].length)] + '.png';
        while (imgList.endsWith(newImg.substring(1))) {
            newImg = ',/public/assets/images/treble/treble_' + levels[curLevel][Math.floor(Math.random() * levels[curLevel].length)] + '.png';
        }
        imgList+=newImg;
    }
    // set the function that will be called
    const func = "processClick(this.innerHTML,'" + image + "'," + "'" + imgList + "'," + numQs + ")";
    // get only the note names
    const noteNames = [];
    const justNotes = [];
    for (let x of levels[curLevel]) {
        if (!justNotes.includes(x.substring(0, x.length-1))) {
            noteNames.push({note: x.substring(0, x.length-1), img: image, func: func, imgList: imgList, numQs: numQs});
            justNotes.push(x.substring(0, x.length-1));
        }
    }
    return res.render('individualPages/noteLesson', {notes: levels[curLevel], noteNames: noteNames, img: image, imgList: imgList, i:1, numQs: numQs});
}

function renderSongLevel(songIndices, levels, res) {
    const notes = levels[levels.length-1];
    let imgList = [];
    // set pictures for the song
    for (let x of songIndices) {
        imgList += '/public/assets/images/treble/treble_' + notes[x] + '.png,';
    }
    // get rid of ending comma
    imgList = imgList.substring(0, imgList.length-1);
    const image = imgList.split(',')[0]
    // set the function that will be called
    const func = "processClick(this.innerHTML,'" + image + "'," + "'" + imgList + "'," + songIndices.length + ")";
    // get only the note names
    const noteNames = [];
    const justNotes = [];
    for (let x of notes) {
        if (!justNotes.includes(x.substring(0, x.length-1))) {
            noteNames.push({note: x.substring(0, x.length-1), img: image, func: func, imgList: imgList, numQs: songIndices.length});
            justNotes.push(x.substring(0, x.length-1));
        }
    }
    return res.render('individualPages/noteLesson', {notes: notes, noteNames: noteNames, img: image, imgList: imgList, i:1, numQs: songIndices.length});
}

module.exports = {
    renderRandomLevel,
    renderSongLevel
}