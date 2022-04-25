// Edit these constants to edit the game

const INCORRECT_BEEP = false;
const START_SCORE_QUESTION = 1100;
const MAX_MULTIPLIER = 2 //1.5
const STREAK_INCREASES_MULTIPLIER_BY = .1
const CLICKS_BEFORE_HINT_SHOWS_UP = 4;
const CLICKS_BEFORE_HINT_DISAPPEARS = CLICKS_BEFORE_HINT_SHOWS_UP;

const KEYBOARD_HINT = "Hint: use the keyboard to answer faster!"
const KEYBOARD_HINT_SHARPS = "Hint: Press and hold up on the keyboard for sharps and the down arrow for flats!"

//calculated constants
const MULTIPLIER_STEPS = (MAX_MULTIPLIER - 1) / STREAK_INCREASES_MULTIPLIER_BY // 1/.1
let streak = 0;
let maxStreak = 0;
let currLevelScore = 0;
let scoreCurrQuestionWithMultipliers = 0;
let scoreCurrQuestion = START_SCORE_QUESTION;
let numRight = 0;
let totalQs = 0;
let interval = null;
let counting = true;
let multiplier = 0;
let levelCoins = 0;
let clicksLeftBeforeHintShowsUpCounter = CLICKS_BEFORE_HINT_SHOWS_UP;
let hintIsShowing = false;


window.addEventListener("load", () => {
    if (window.location.href.includes("end") && window.location.href.includes("Level")) {
        if (document.getElementById('failBtn') != undefined) {
            new Audio("/public/assets/sounds/failedLevel.wav").play();
        } else {
            new Audio("/public/assets/sounds/success.wav").play();
        }
    }
    if (window.location.href.indexOf("/0") == window.location.href.length - 2) {
        document.getElementById('howTo').classList.add('howToAnimate');
        document.getElementById('howTo').hidden = false;
    }
    if (window.location.href.indexOf("/13") == window.location.href.length - 3) {
        document.getElementById('howTo').classList.add('howToAnimate');
        document.getElementById('howTo').hidden = false;
        document.getElementById('howTo').scroll(0, 450);
    }
    // if (window.location.href.split('loc').length > 2) {
    // window.scrollTo({ top: window.location.href.split('loc')[2].substring(2), left: window.location.href.split('loc')[3].substring(2), behavior: 'smooth' });
    // }
});

let key1 = null;
let key2 = null;
document.addEventListener("keyup", (event) => {
    if (event.key.toUpperCase() == 'ARROWUP' || event.key.toUpperCase() == 'ARROWDOWN') {
        if (key2 == null) {
            key1 = null;
            return;
        }
        key2 = null;
        return;
    }
    let saveKey = null;
    if (key1 != null) {
        let key = key1;
        if (key2 != null) {
            if (key1 == 'ARROWUP') {
                key = key2 + '#';
                if (event.key.toUpperCase() != key1) {
                    saveKey = key1;
                }
            } else if (key1 == 'ARROWDOWN') {
                key = key2 + 'b';
                if (event.key.toUpperCase() != key1) {
                    saveKey = key1;
                }
            } else if (key2 == 'ARROWUP') {
                key = key1 + '#';
                if (event.key.toUpperCase() != key2) {
                    saveKey = key2;
                }
            } else if (key2 == 'ARROWDOWN') {
                key = key1 + 'b';
                if (event.key.toUpperCase() != key2) {
                    saveKey = key2;
                }
            }
        }
        const el = document.getElementById(key);
        if (el != undefined && el != null) {
            el.click();
            clicksLeftBeforeHintShowsUpCounter = -1;
            if(hintIsShowing){
                document.getElementsByClassName("hintSection")[0].style.opacity = 0;
                hintIsShowing = false
            }
        }
        key1 = null;
        key2 = saveKey;
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key == 'ArrowUp' || event.key == 'ArrowDown') {
        event.preventDefault();
    }
    if (
        (window.location.href.includes("noteLesson") || window.location.href.includes("songLesson") || window.location.href.includes("theoryLesson") ||
            window.location.href.includes("allSongs")) && !counting
    ) {
        if (key1 == null) {
            key1 = event.key.toUpperCase();
        } else if (key2 == null) {
            key2 = event.key.toUpperCase();
        }
    } else if (
        (window.location.href.includes("noteLesson") || window.location.href.includes("songLesson") || window.location.href.includes("theoryLesson") ||
            window.location.href.includes("allSongs")) && counting
    ) {
        if (event.key == "Enter" || event.key == "Return") {
            // TODO: speed up countoff

        }
    } else if (window.location.href.includes("newLesson")) {
        if (event.key == "Enter" || event.key == "Return") {
            const el = document.getElementById("nextLevelBtn");
            if (el != undefined && el != null) {
                el.click();
            }
        }
    } else if (window.location.href.includes("end") && window.location.href.includes('Level')) {
        if (event.key == "Enter" || event.key == "Return") {
            const el = document.getElementsByClassName("actionButton")[0];
            if (el != undefined && el != null) {
                el.click();
            }
        }
    } else if (window.location.href.includes("/lessons")) {
        if (event.key == "Enter" || event.key == "Return") {
            if (document.activeElement.classList.contains('lessonCard') || document.activeElement.classList.contains('songCard')) {
                event.preventDefault();
                document.activeElement.click();
            }
        }
    }
});

function playSound(noteName) {
    if (noteName != "") {
        noteName = noteName.replace('#', '%23');
        if (window.location.href.includes("treble")) {
            new Audio(
                "/public/assets/sounds/treble/Piano_treble_" +
                noteName.toUpperCase() +
                ".wav"
            ).play();
        } else if (window.location.href.includes("bass")) {
            new Audio(
                "/public/assets/sounds/bass/Piano_bass_" +
                noteName.toUpperCase() +
                ".wav"
            ).play();
        }
    } else {
        new Audio("/public/assets/sounds/buzzer.wav").play();
    }
}

function checkAnswer(clickedButton, rightAnswer) {
    const rightNoteSplit = rightAnswer.split('_');
    let rightNote = rightNoteSplit[rightNoteSplit.length - 1]
    rightNote = rightNote.substring(0, rightNote.indexOf(".png")).replace('%23', '#');
    noteName = rightNote.substring(0, rightNote.length - 1)
    if (clickedButton == noteName) {
        scoreCorrect();
        playSound(rightNote);
        document.getElementById(noteName).classList.add("buttonAnswerSuccess");
        setTimeout(() => {
            document.getElementById(noteName).classList.remove("buttonAnswerSuccess");
        }, 700)
    } else {
        scoreIncorrect();
        stopTimer();
        playSound("");
        INCORRECT_BEEP && playSound("");
        document.getElementById("wrongAnswerX").style.opacity = .95;
        document.getElementById(noteName).classList.add("buttonAnswerError");
        setTimeout(() => {
            document.getElementById("wrongAnswerX").style.opacity = 0;
        }, 500)
        setTimeout(() => {
            document.getElementById(noteName).classList.remove("buttonAnswerError");
        }, 700)
    }
}

function processClick(noteName, rightAnswer, imgList, numQs) {
    console.log(clicksLeftBeforeHintShowsUpCounter)
    if(--clicksLeftBeforeHintShowsUpCounter == 0){
        document.getElementsByClassName("hintSection")[0].innerText = KEYBOARD_HINT
        document.getElementsByClassName("hintSection")[0].style.opacity = 1
        hintIsShowing = true;
    }
    if(clicksLeftBeforeHintShowsUpCounter < 0 - CLICKS_BEFORE_HINT_DISAPPEARS) {
        document.getElementsByClassName("hintSection")[0].style.opacity = 0
        hintIsShowing = false;
    }

    if (totalQs >= numQs) {
        return;
    }
    let pictures = imgList.split(",");
    let curQ = document
        .getElementById("qTracker")
        .textContent.split("/")[0]
        .split(" ")[1];
    checkAnswer(noteName, pictures[Number(curQ) - 1]);
    if (Number(curQ) + 1 > Number(numQs)) {
        // level complete!
        document.getElementById("qTrackerProgressBar").value = Number(curQ);
        try {
            if (window.location.href.includes("noteLesson")) {
                const curLocation = window.location.href.split("noteLesson/")[1];
                if (window.location.href.includes("treble")) {
                    levelComplete('treble', 'Note', Number(curLocation));
                } else if (window.location.href.includes("bass")) {
                    levelComplete('bass', 'Note', Number(curLocation));
                }
            } else if (window.location.href.includes("songLesson")) {
                const curLocation = window.location.href.split("songLesson/")[1];
                if (window.location.href.includes("treble")) {
                    levelComplete('treble', 'Song', Number(curLocation));
                } else if (window.location.href.includes("bass")) {
                    levelComplete('bass', 'Song', Number(curLocation));
                }
            } else if (window.location.href.includes("allSongs")) {
                const curLocation = window.location.href.split("play/")[1];
                if (window.location.href.includes("treble")) {
                    levelComplete('treble', 'Song', curLocation);
                } else if (window.location.href.includes("bass")) {
                    levelComplete('bass', 'Song', curLocation);
                }
            } else if (window.location.href.includes("theoryLesson")) {
                const curLocation = window.location.href.split("theoryLesson/")[1];
                if (window.location.href.includes("treble")) {
                    levelComplete('treble', 'Theory', curLocation);
                } else if (window.location.href.includes("bass")) {
                    levelComplete('bass', 'Theory', curLocation);
                }
            }
        } catch (e) {
            console.log(e);
        }
    } else {
        beginTimer();
        // set the new text and new image
        document.getElementById("qImg").src = pictures[Number(curQ)];
        document.getElementById("qTracker").textContent =
            "Question: " + (Number(curQ) + 1).toString() + "/" + numQs.toString();
        document.getElementById("qTrackerProgressBar").value = Number(curQ);
    }
}

function startBass() {
    window.location.href = "http://localhost:3030/bass/newLesson/notes/0";
}

function startTreble() {
    window.location.href = "http://localhost:3030/treble/newLesson/notes/0";
}

function restart() {
    if (window.location.href.includes("noteLesson")) {
        const curLocation = window.location.href.split("noteLesson/")[1];
        if (window.location.href.includes("treble")) {
            window.location.href = "http://localhost:3030/treble/newLesson/notes/" + Number(curLocation).toString()
        } else if (window.location.href.includes("bass")) {
            window.location.href = "http://localhost:3030/bass/newLesson/notes/" + Number(curLocation).toString();
        }
    } else if (window.location.href.includes("songLesson")) {
        const curLocation = window.location.href.split("songLesson/")[1];
        if (window.location.href.includes("treble")) {
            window.location.href = "http://localhost:3030/treble/newLesson/songs/" + Number(curLocation).toString();
        } else if (window.location.href.includes("bass")) {
            window.location.href = "http://localhost:3030/bass/newLesson/songs/" + Number(curLocation).toString();
        }
    } else if (window.location.href.includes("theoryLesson")) {
        const curLocation = window.location.href.split("theoryLesson/")[1];
        if (window.location.href.includes("treble")) {
            window.location.href = "http://localhost:3030/treble/newLesson/theory/" + Number(curLocation).toString();
        } else if (window.location.href.includes("bass")) {
            window.location.href = "http://localhost:3030/bass/newLesson/theory/" + Number(curLocation).toString();
        }
    } else if (window.location.href.includes("allSongs")) {
        window.location.href = window.location.href.replace("play", "begin");
    }
}

function nextLevel(level) {
    if (window.location.href.includes("allSongs")) {
        const clef = window.location.href.includes("bass") ? "bass" : "treble";
        window.location.href = "http://localhost:3030/allSongs/play/" + level + "?" + clef;
        return;
    } else if (window.location.href.includes("songs")) {
        if (window.location.href.includes("treble")) {
            window.location.href = "http://localhost:3030/treble/songLesson/" + Number(level).toString();
        } else if (window.location.href.includes("bass")) {
            window.location.href = "http://localhost:3030/bass/songLesson/" + Number(level).toString();
        }
    } else if (window.location.href.includes("notes")) {
        if (window.location.href.includes("treble")) {
            window.location.href = "http://localhost:3030/treble/noteLesson/" + Number(level).toString();
        } else if (window.location.href.includes("bass")) {
            window.location.href = "http://localhost:3030/bass/noteLesson/" + Number(level).toString();
        }
    } else if (window.location.href.includes("theory")) {
        if (window.location.href.includes("treble")) {
            window.location.href = "http://localhost:3030/treble/theoryLesson/" + Number(level).toString();
        } else if (window.location.href.includes("bass")) {
            window.location.href = "http://localhost:3030/bass/theoryLesson/" + Number(level).toString();
        }
    }
}

function toLink(url, disabled = '', text = 'Finish beginner levels to unlock!') {
    if (disabled != '') {
        document.activeElement.blur();
        let modalBackdrop = document.createElement('section');
        let popUpModal = document.createElement('section');
        let modalText = document.createElement('section');
        let closeButton = document.createElement('button');

        modalText.innerText = text;
        closeButton.innerText = "Close";

        modalBackdrop.classList.add("modalBackdrop");
        popUpModal.classList.add("popUpModal");
        modalText.classList.add("modalText");
        closeButton.classList.add("modalButton", "actionButton");

        closeButton.setAttribute("onclick", "closePopUp(animation=true, reload=false)");
        modalBackdrop.setAttribute("onclick", "closePopUp(animation=true, reload=false)");

        popUpModal.appendChild(modalText);
        popUpModal.appendChild(closeButton);

        document.getElementById("modalInsert").appendChild(modalBackdrop);
        document.getElementById("modalInsert").appendChild(popUpModal);
        closeButton.focus();
        return;
    }
    if (url[0] != '/') {
        url = '/' + url;
    }

    if (url.includes('/0') && !url.includes('song') && !url.includes('theory')) {
        if (url.includes('bass')) {
            url = '/bass';
        } else {
            url = '/treble';
        }
    }
    window.location.href = "http://localhost:3030" + url;
}

function nextLesson(retry = false) {
    let level = Number(window.location.href.split("Level/")[1]) + 1;
    if (isNaN(level)) {
        window.location.href = 'http://localhost:3030/allSongs/begin/' + window.location.href.split("Level/")[1];
        return;
    }
    if (retry) {
        level = level - 1;
    }
    if (window.location.href.includes("Song")) {
        if (window.location.href.includes("treble")) {
            window.location.href = "http://localhost:3030/treble/newLesson/songs/" + Number(level).toString();
        } else if (window.location.href.includes("bass")) {
            window.location.href = "http://localhost:3030/bass/newLesson/songs/" + Number(level).toString();
        }
    } else if (window.location.href.includes("Note")) {
        if (window.location.href.includes("treble")) {
            window.location.href = "http://localhost:3030/treble/newLesson/notes/" + Number(level).toString();
        } else if (window.location.href.includes("bass")) {
            window.location.href = "http://localhost:3030/bass/newLesson/notes/" + Number(level).toString();
        }
    } else if (window.location.href.includes("Theory")) {
        if (window.location.href.includes("treble")) {
            window.location.href = "http://localhost:3030/treble/newLesson/theory/" + Number(level).toString();
        } else if (window.location.href.includes("bass")) {
            window.location.href = "http://localhost:3030/bass/newLesson/theory/" + Number(level).toString();
        }
    }
}

async function levelComplete(clef, type, level) {
    if (streak > maxStreak) {
        maxStreak = streak;
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            score: currLevelScore,
            streak: maxStreak,
            correct: numRight,
            total: totalQs,
            levelCoins: levelCoins
        })
    };
    const postResult = await fetch("http://localhost:3030/" + clef + "/send" + type + 'Data/' + level.toString(), requestOptions);
    if (postResult.ok) {
        setTimeout(() => {
            window.location.href = "http://localhost:3030/" + clef + "/end" + type + 'Level/' + level.toString();
        }, 1000);
    }
}

function beginTimer() {
    scoreCurrQuestion = START_SCORE_QUESTION;
    interval = setInterval(() => {
        if (scoreCurrQuestion <= 200) {
            stopTimer();
        } else {
            scoreCurrQuestion -= 10;
            document.getElementById("timer").firstChild.data = scoreCurrQuestion + (scoreCurrQuestion / 10 * multiplier);
        }
    }, 90);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    scoreCurrQuestion = START_SCORE_QUESTION;
    clearInterval(interval);
}

function scoreCorrect() {
    clearInterval(interval);
    scoreCurrQuestionWithMultipliers = scoreCurrQuestion + (scoreCurrQuestion / 10 * multiplier)
    let coins = Math.floor(scoreCurrQuestionWithMultipliers / 100)
    levelCoins += coins
    currLevelScore += scoreCurrQuestionWithMultipliers;
    streak++;
    totalQs++;
    numRight++;
    streak <= MULTIPLIER_STEPS &&
        ++multiplier &&
        (document.getElementById("multiplier").innerHTML = "x" + (1 + multiplier / 10)) &&
        (document.getElementById("timer").style.transform = "scale(" + (1 + multiplier / MULTIPLIER_STEPS) + ")")
    document.getElementById("currentScore").innerText = "Total: " + currLevelScore;
    document.getElementById("streak").innerText = "Streak: " + streak;
    document.getElementById("levelCoins").innerText = "Coins: " + levelCoins;
}

function scoreIncorrect() {
    if (streak > maxStreak) {
        maxStreak = streak;
    }
    streak = 0;
    if (multiplier != 0) {
        multiplier = 0;
        document.getElementById("multiplier").innerHTML = "x1"
        document.getElementById("timer").style.transform = "scale(1)"
    }
    totalQs++;
    document.getElementById("streak").innerText = "Streak: " + streak;
}

function startCountOff() {
    counting = true;
    let countOff = document.getElementsByClassName("countNumberSection")[0];
    if (countOff != undefined) {
        countOff = countOff.children;
    } else {
        return;
    }
    const blur = document.getElementsByClassName("blurBackground")[0];
    const sounds = [
        "countdown3.wav",
        "countdown2.wav",
        "countdown1.wav",
        "countdownGO.wav",
    ];
    let i = 0;
    let looper = setInterval(() => {
        new Audio("/public/assets/sounds/" + sounds[i]).play();
        if (i == 0) {
            countOff[i].classList.add("animateNumber");
            i++;
        } else if (i + 1 <= countOff.length) {
            countOff[i - 1].classList.remove("animateNumber");
            countOff[i].classList.add("animateNumber");
            i++;
        } else {
            clearInterval(looper);
            setTimeout(() => {
                blur.classList.add("animateBlur");
                countOff[i - 1].classList.remove("animateNumber");
                countOff[i - 1].classList.add("animateHide");
                setTimeout(() => {
                    blur.classList.remove("blurBackground");
                }, 300);
                beginTimer();
                counting = false;
            }, 100);
        }
    }, 850);
}

function sort(type) {
    if (type == 'name') {
        sortHelper('nameSort', getName);
    }
    if (type == 'difficulty') {
        sortHelper('difficultySort', getDifficulty);
    }
    if (type == 'price') {
        sortHelper('priceSort', getPrice);
    }
}

/* get the price of an element with classname of price#### */
function getPrice(e) {
    for (let x of e.classList) {
        if (x.includes('price')) {
            return Number(x.substring(5));
        }
    }
}

function getName(e) {
    for (let x of e.classList) {
        if (x.includes('name')) {
            return x.substring(4);
        }
    }
}

function getDifficulty(e) {
    if (e.classList.contains('Easy')) {
        return 1;
    } else if (e.classList.contains('Medium')) {
        return 2;
    } else {
        return 3;
    }
}


function sortHelper(radioId, sortFunction) {
    const sortingBtns = document.getElementsByClassName('songSortBtn');
    for (let x of sortingBtns) {
        if (x.id != radioId) {
            x.checked = false;
        }
    }
    const allSongs = document.getElementsByClassName('storeCard');
    /* TREBLE SECTION */
    const newTrebleList = [];
    for (let x of allSongs) {
        if (x.classList.contains('trebleCard')) {
            if (newTrebleList == []) {
                newTrebleList.push(x);
            } else {
                let i = 0;
                for (let y of newTrebleList) {
                    if (sortFunction(x) > sortFunction(y)) {
                        i++;
                    } else {
                        break;
                    }
                }
                newTrebleList.splice(i, 0, x);
            }
        }
    }
    const trebleSection = document.getElementById('trebleStoreSection')
    trebleSection.textContent = '';
    for (let x of newTrebleList) {
        trebleSection.appendChild(x);
    }

    /* BASS SECTION */
    const newBassList = [];
    for (let x of allSongs) {
        if (x.classList.contains('bassCard')) {
            if (newBassList == []) {
                newBassList.push(x);
            } else {
                let i = 0;
                for (let y of newBassList) {
                    if (sortFunction(x) > sortFunction(y)) {
                        i++;
                    } else {
                        break;
                    }
                }
                newBassList.splice(i, 0, x);
            }
        }
    }
    const bassSection = document.getElementById('bassStoreSection')
    bassSection.textContent = '';
    for (let x of newBassList) {
        bassSection.appendChild(x);
    }
}

function filter(type, clef, store = false) {
    if (store) {
        document.getElementById('bassStoreHeader').style.display = 'block';
        document.getElementById('trebleStoreHeader').style.display = 'block';
        if (clef == 'treble') {
            document.getElementById('bassStoreHeader').style.display = 'none';
            filterHelper('trebleSongFilter', 'storeCard', 'trebleCard', 'songFilterBtn');
            return;
        }
        if (clef == 'bass') {
            document.getElementById('trebleStoreHeader').style.display = 'none';
            filterHelper('bassSongFilter', 'storeCard', 'bassCard', 'songFilterBtn');
            return;
        }
        if (clef == 'easy') {
            filterHelper('easySongFilter', 'storeCard', 'Easy', 'songFilterBtn');
            return;
        }
        if (clef == 'medium') {
            filterHelper('mediumSongFilter', 'storeCard', 'Medium', 'songFilterBtn');
            return;
        }
        if (clef == 'hard') {
            filterHelper('hardSongFilter', 'storeCard', 'Hard', 'songFilterBtn');
            return;
        }
        if (clef == 'owned') {
            filterHelper('ownedSongFilter', 'storeCard', 'ownstrue', 'songFilterBtn');
            return;
        }
        if (clef == 'afford') {
            filterHelper('affordSongFilter', 'storeCard', 'affordtrue', 'songFilterBtn');
            return;
        } else {
            const songs = document.getElementsByClassName('storeCard');
            for (let x of songs) {
                x.style.display = 'block';
            }
            const filterBtns = document.getElementsByClassName('songFilterBtn');
            for (let x of filterBtns) {
                x.style.color = 'white';
            }
            return;
        }
        return;
    }
    if (type == 'lessons') {
        document.getElementById('hideLessons').textContent = 'Hide';
    }
    if (type == 'songs') {
        document.getElementById('hideSongs').textContent = 'Hide';
        /* hide lessons so you can see the filtered songs */
        if (document.getElementById('hideLessons').textContent == 'Hide') {
            toggleLessons();
        }
    }

    if (type == 'none' && clef == 'none') {
        document.getElementById('hideSongs').textContent = 'Hide';
        document.getElementById('hideLessons').textContent = 'Hide';
        const lessons = document.getElementsByClassName('lessonCard');
        const songs = document.getElementsByClassName('songCard');
        for (let x of lessons) {
            x.style.display = 'block';
        }
        for (let x of songs) {
            x.style.display = 'block';
        }
        const lessonBtns = document.getElementsByClassName('lessonFilterBtn');
        for (let x of lessonBtns) {
            x.style.color = 'white';
        }
        const songBtns = document.getElementsByClassName('songFilterBtn');
        for (let x of songBtns) {
            x.style.color = 'white';
        }
        return;
    }

    if (type == 'lessons' && clef == 'treble') {
        filterHelper('trebleLessonFilter', 'lessonCard', 'trebleCard', 'lessonFilterBtn');
        return;
    }

    if (type == 'lessons' && clef == 'bass') {
        filterHelper('bassLessonFilter', 'lessonCard', 'bassCard', 'lessonFilterBtn');
        return;
    }

    if (type == 'lessons' && clef == 'theory') {
        filterHelper('theoryLessonFilter', 'lessonCard', 'theoryCard', 'lessonFilterBtn');
        return;
    }

    if (type == 'lessons' && clef == 'notes') {
        filterHelper('noteLessonFilter', 'lessonCard', 'noteCard', 'lessonFilterBtn');
        return;
    }

    if (type == 'lessons' && clef == 'beginner') {
        filterHelper('beginnerLessonFilter', 'lessonCard', 'beginnerCard', 'lessonFilterBtn');
        return;
    }

    if (type == 'lessons' && clef == 'advanced') {
        filterHelper('advancedLessonFilter', 'lessonCard', 'advancedCard', 'lessonFilterBtn');
        return;
    }

    if (type == 'lessons' && clef == 'unlocked') {
        filterHelper('unlockedLessonFilter', 'lessonCard', 'disabledLessonCard', 'lessonFilterBtn', true);
        return;
    }

    if (type == 'songs' && clef == 'treble') {
        filterHelper('trebleSongFilter', 'songCard', 'trebleCard', 'songFilterBtn');
        return;
    }

    if (type == 'songs' && clef == 'bass') {
        filterHelper('bassSongFilter', 'songCard', 'bassCard', 'songFilterBtn');
        return;
    }

    if (type == 'songs' && clef == 'purchased') {
        filterHelper('purchasedSongFilter', 'songCard', 'purchasedCard', 'songFilterBtn');
        return;
    }
}

// params i.e. bassSongFilter, songCard/lessonCard, purchasedCard/trebleCard, etc., songFilterBtn
function filterHelper(filterId, bigClass, smallClass, filterClass, opposite = false) {
    const filterBtn = document.getElementById(filterId);
    if (filterBtn && filterBtn.style.color == 'var(--secondary)') {
        /* already on, turn off */
        const songs = document.getElementsByClassName(bigClass);
        for (let x of songs) {
            x.style.display = 'block';
        }
        filterBtn.style.color = 'white';
        return;
    }
    const songs = document.getElementsByClassName(bigClass);
    for (let x of songs) {
        if (!x.classList.contains(smallClass)) {
            x.style.display = opposite ? 'block' : 'none';
        } else {
            x.style.display = opposite ? 'none' : 'block';
        }
    }
    const songBtns = document.getElementsByClassName(filterClass);
    for (let x of songBtns) {
        x.style.color = 'white';
    }
    if (filterBtn) {
        filterBtn.style.color = 'var(--secondary)';
    }
    return;
}

function toggleLessons() {
    const lessons = document.getElementsByClassName('lessonCard');
    const lessonBtns = document.getElementsByClassName('lessonFilterBtn');
    for (let x of lessonBtns) {
        x.style.color = 'white';
    }
    for (let x of lessons) {
        if (x.style.display != 'none') {
            document.getElementById('hideLessons').textContent = 'Show';
            for (let y of lessons) {
                y.style.display = 'none';
            }
            return;
        }
    }
    for (let x of lessons) {
        document.getElementById('hideLessons').textContent = 'Hide';
        x.style.display = 'block';
    }
}

function toggleSongs() {
    const songs = document.getElementsByClassName('songCard');
    const songBtns = document.getElementsByClassName('songFilterBtn');
    for (let x of songBtns) {
        x.style.color = 'white';
    }
    for (let x of songs) {
        if (x.style.display != 'none') {
            document.getElementById('hideSongs').textContent = 'Show';
            for (let y of songs) {
                y.style.display = 'none';
            }
            return;
        }
    }
    for (let x of songs) {
        document.getElementById('hideSongs').textContent = 'Hide';
        x.style.display = 'block';
    }
}

function fillLeaderboard(titles, scores) {
    let count = 0;
    let container = document.getElementById('leaderboard-container');
    for (song of titles) {
        let customID = 'leader-table' + count;
        let titleRow = document.createElement('tr')
        let titleHeader = document.createElement('td');
        let leaderTable = document.createElement('table');
        // let headers = document.createElement('tr');
        // let nameHeader = document.createElement('th');
        // let scoreHeader = document.createElement('th');

        // scoreHeader.innerHTML = "Score";
        // nameHeader.innerHTML = "Username";
        titleHeader.innerHTML = song;
        titleHeader.colSpan = "2"

        titleHeader.classList.add('leaderboard-h3');
        titleHeader.colSpan = 2
            // scoreHeader.classList.add('leaderboard-th');
            // nameHeader.classList.add('leaderboard-th');
        leaderTable.classList.add('leaderboard');
        leaderTable.setAttribute('id', customID);
        titleRow.appendChild(titleHeader)

        leaderTable.appendChild(titleRow);

        // headers.appendChild(nameHeader);
        // headers.appendChild(scoreHeader);

        // leaderTable.appendChild(headers);
        let tableIsPopulated = false;

        for (user of scores) { //user is array of username, song title and song score
            let userScore = document.createElement('tr');
            let name = document.createElement('td');
            let score = document.createElement('td');
            score.classList.add("userScore")

            name.innerHTML = user[0];

            for (i = 1; i < user.length; i++) {
                if (user[i] == song && user[i + 1] > 0) {
                    score.innerHTML = user[i + 1].toLocaleString("en-US");

                    userScore.appendChild(name);
                    userScore.appendChild(score);

                    leaderTable.appendChild(userScore);
                    tableIsPopulated = true;
                }
            }


        }
        if (!tableIsPopulated) {
            let noEntriesRow = document.createElement('tr')
            let noEntries = document.createElement('td')
            noEntries.innerText = "No high scores yet. Be the first to set one!"
            noEntries.classList.add("noEntriesMessage")
            noEntries.colSpan = "2"
            noEntriesRow.appendChild(noEntries)
            leaderTable.appendChild(noEntriesRow)
        }
        container.appendChild(leaderTable);
        count++;
    }
}

function sortTable(songs) {
    var table, rows, switching, i, x, y, shouldSwitch;
    for (s = 0; s < songs.length; s++) {
        let idToSearch = 'leader-table' + s;
        table = document.getElementById(idToSearch)
        switching = true;
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[1];
                y = rows[i + 1].getElementsByTagName("TD")[1];
                if (Number(x.innerHTML) < Number(y.innerHTML)) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }
}

function purchaseSong(name, id, price, canAfford = true, ownsSong = false, coins, clef = 'treble') {
    document.activeElement.blur();
    let modalBackdrop = document.createElement('section')
    let popUpModal = document.createElement('section')
    let modalText = document.createElement('section')
    let okButton = document.createElement('button')
    let cancelButton = document.createElement('button')

    modalText.innerText = ownsSong ? "You already own this song!" : canAfford ? "You are about to buy " + name + " for " + price + "♪" :
        "You need " + (price - coins) + "♪ more to buy " + name + ".\nPlay to collect more!"
    if (ownsSong) {
        cancelButton.innerText = "Close"
        okButton.innerText = "Play"
    } else {
        cancelButton.innerText = "Cancel"
        okButton.innerText = "OK"
    }


    modalBackdrop.classList.add("modalBackdrop")
    popUpModal.classList.add("popUpModal")
    modalText.classList.add("modalText")
    cancelButton.classList.add("modalButton", "actionButton")
    okButton.id = "modalOk"
    okButton.classList.add("modalButton", "actionButton")

    cancelButton.setAttribute("onclick", "closePopUp(animate=true, reload=false)")
    modalBackdrop.setAttribute("onclick", "closePopUp(animate=true, reload=false)")

    if (canAfford && !ownsSong) {
        const funcCall = "buySong('" + id + "', `" + name + "`, '" + clef + "')"
        okButton.setAttribute("onclick", funcCall);
    } else { //cant afford song or can afford but already reload
        link = '/allSongs/begin/' + id + '?' + clef;
        okButton.setAttribute("onclick", "toLink('" + link + "')");
    }


    popUpModal.appendChild(modalText)
        // if (canAfford) {
    popUpModal.appendChild(cancelButton)
        // }
    popUpModal.appendChild(okButton)

    document.getElementById("modalInsert").appendChild(modalBackdrop)
    document.getElementById("modalInsert").appendChild(popUpModal)
    okButton.focus();
}

function purchaseStatusModal(name, purchaseStatus, songId, clef = 'treble') {
    document.activeElement.blur();
    let modalBackdrop = document.createElement('section')
    let popUpModal = document.createElement('section')
    let modalText = document.createElement('section')
    let closeButton = document.createElement('button')
    let playButton = document.createElement('button')

    modalText.innerText = purchaseStatus ? "Purchase of " + name + " successful!" :
        "Failed to purchase " + name + ". Please try again later";
    closeButton.innerText = "Close"
    playButton.innerText = "Play"

    modalBackdrop.classList.add("modalBackdrop")
    popUpModal.classList.add("popUpModal")
    modalText.classList.add("modalText")
    closeButton.classList.add("modalButton", "actionButton")
    playButton.classList.add("modalButton", "actionButton")

    closeButton.setAttribute("onclick", "closePopUp()")
    link = '/allSongs/begin/' + songId + '?' + clef;
    playButton.setAttribute("onclick", "toLink('" + link + "')");
    modalBackdrop.setAttribute("onclick", "closePopUp()")

    popUpModal.appendChild(modalText)
    popUpModal.appendChild(closeButton)
    popUpModal.appendChild(playButton)

    document.getElementById("modalInsert").appendChild(modalBackdrop)
    document.getElementById("modalInsert").appendChild(popUpModal)
    playButton.focus();
}

function closePopUp(animate = true, reload = true) {
    if (animate) {
        document.getElementsByClassName("popUpModal")[0].classList.add("animateSwipeUpAway");
        document.getElementsByClassName("modalBackdrop")[0].classList.add("animateFadeOut");

        setTimeout(() => {
            if (document.getElementsByClassName("modalBackdrop").length > 0) {
                document.getElementsByClassName("modalBackdrop")[0].remove();
            } else if (document.getElementsByClassName("popUpModal").length > 0) {
                document.getElementsByClassName("popUpModal")[0].remove();
            }
            document.getElementById("modalInsert").innerHTML = "";
            // let x = window.scrollX;
            // let y = window.scrollY;
            // if (reload) {
            //     window.location.href = window.location.href.split('?locy')[0] + '?locy=' + y + 'locx=' + x;
            // }
        }, 350)
    } else {
        document.getElementsByClassName("modalBackdrop")[0].remove();
        document.getElementsByClassName("popUpModal")[0].remove();
        document.getElementById("modalInsert").innerHTML = "";
    }
}

async function buySong(songId, name, clef = 'treble') {
    document.getElementById("modalOk").innerText = "Loading..."
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            song: songId
        })
    };
    const postResult = await fetch("http://localhost:3030/buySong", requestOptions);
    //show the loading prompt for a little, so no jarring prompt flash if the req is served instantly
    setTimeout(() => {
        if (postResult.ok) {
            closePopUp(animate = false);
            purchaseStatusModal(name, true, songId, clef);
        } else {
            closePopUp(animate = false, reload = false);
            purchaseStatusModal(name, false, songId, clef);
        }
    }, 300)

}

function initializeHidden() {
    const x = document.getElementById("wrongAnswerX");
    if (x) {
        x.style.display = "block";
    }

    const hint = document.getElementsByClassName("hintSection")[0];
    if (hint) {
        hint.style.display = "block";
    }

    const buttonGroup = document.getElementsByClassName("buttonGroup")[0];
    if (buttonGroup) {
        buttonGroup.style.display = "flex";
    }
}

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

startCountOff();
window.addEventListener("load", function() {
    initializeHidden();
});