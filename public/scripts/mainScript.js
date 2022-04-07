const INCORRECT_BEEP = false;
let streak = 0;
let maxStreak = 0;
let currScore = 0;
let scoreCurrQuestion = 1000;
let numRight = 0;
let totalQs = 0;
let interval = null;
let counting = true;

window.addEventListener("load", () => {
    if (window.location.href.includes("end") && window.location.href.includes("Level")) {
        if (document.getElementById('failBtn') != undefined) {
            new Audio("/public/assets/sounds/failedLevel.wav").play();
        } else if (document.getElementById('passBtn') != undefined) {
            new Audio("/public/assets/sounds/success.wav").play();
        }
    }
});

document.addEventListener("keydown", (event) => {
    if (
        (window.location.href.includes("noteLesson") || window.location.href.includes("songLesson")) &&
        !counting
    ) {
        const el = document.getElementById(event.key.toUpperCase());
        if (el != undefined && el != null) {
            el.click();
        }
    } else if (
        (window.location.href.includes("noteLesson") || window.location.href.includes("songLesson")) &&
        counting
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
    }
});

function playSound(noteName) {
    if (noteName != "") {
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
    // will not work for Sharps and Flats yet!
    const rightNote = rightAnswer.substring(
        rightAnswer.indexOf(".png") - 2,
        rightAnswer.indexOf(".png")
    );
    if (clickedButton == rightNote.substring(0, rightNote.length - 1)) {
        scoreCorrect();
        playSound(rightNote);
    } else {
        scoreIncorrect();
        stopTimer();
        playSound("");
        INCORRECT_BEEP && playSound("");
    }
}

async function processClick(noteName, rightAnswer, imgList, numQs) {
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

async function startBass() {
    const fetchResult = await fetch(
        "http://localhost:3030/bass/newLesson/notes/0"
    );
    window.location.href = fetchResult.url;
}

async function startTreble() {
    const fetchResult = await fetch(
        "http://localhost:3030/treble/newLesson/notes/0"
    );
    window.location.href = fetchResult.url;
}

async function restart() {
    if (window.location.href.includes("noteLesson")) {
        const curLocation = window.location.href.split("noteLesson/")[1];
        if (window.location.href.includes("treble")) {
            const fetchResult = await fetch(
                "http://localhost:3030/treble/newLesson/notes/" +
                Number(curLocation).toString()
            );
            setTimeout(() => {
                window.location.href = fetchResult.url;
            }, 1000);
        } else if (window.location.href.includes("bass")) {
            const fetchResult = await fetch(
                "http://localhost:3030/bass/newLesson/notes/" +
                Number(curLocation).toString()
            );
            setTimeout(() => {
                window.location.href = fetchResult.url;
            }, 1000);
        }
    } else if (window.location.href.includes("songLesson")) {
        const curLocation = window.location.href.split("songLesson/")[1];
        if (window.location.href.includes("treble")) {
            const fetchResult = await fetch(
                "http://localhost:3030/treble/newLesson/songs/" +
                Number(curLocation).toString()
            );
            setTimeout(() => {
                window.location.href = fetchResult.url;
            }, 1000);
        } else if (window.location.href.includes("bass")) {
            const fetchResult = await fetch(
                "http://localhost:3030/bass/newLesson/songs/" +
                Number(curLocation).toString()
            );
            setTimeout(() => {
                window.location.href = fetchResult.url;
            }, 1000);
        }
    }
}

async function nextLevel(level) {
    if (window.location.href.includes("songs")) {
        if (window.location.href.includes("treble")) {
            const fetchResult = await fetch(
                "http://localhost:3030/treble/songLesson/" + Number(level).toString()
            );
            window.location.href = fetchResult.url;
        } else if (window.location.href.includes("bass")) {
            const fetchResult = await fetch(
                "http://localhost:3030/bass/songLesson/" + Number(level).toString()
            );
            window.location.href = fetchResult.url;
        }
    } else if (window.location.href.includes("notes")) {
        if (window.location.href.includes("treble")) {
            const fetchResult = await fetch(
                "http://localhost:3030/treble/noteLesson/" + Number(level).toString()
            );
            window.location.href = fetchResult.url;
        } else if (window.location.href.includes("bass")) {
            const fetchResult = await fetch(
                "http://localhost:3030/bass/noteLesson/" + Number(level).toString()
            );
            window.location.href = fetchResult.url;
        }
    }
}

async function toLink(url) {
    if (url[0] != '/') {
        url = '/' + url;
    }

    if (url.includes('/0') && !url.includes('song')) {
        if (url.includes('bass')) {
            url = '/bass';
        } else {
            url = '/treble';
        }
    }
    const fetchResult = await fetch(
        "http://localhost:3030" + url
    );
    window.location.href = fetchResult.url;
}

async function nextLesson(retry = false) {
    let level = Number(window.location.href.split("Level/")[1]) + 1;
    if (retry) {
        level = level - 1;
    }
    if (window.location.href.includes("Song")) {
        if (window.location.href.includes("treble")) {
            const fetchResult = await fetch(
                "http://localhost:3030/treble/newLesson/songs/" + Number(level).toString()
            );
            window.location.href = fetchResult.url;
        } else if (window.location.href.includes("bass")) {
            const fetchResult = await fetch(
                "http://localhost:3030/bass/newLesson/songs/" + Number(level).toString()
            );
            window.location.href = fetchResult.url;
        }
    } else if (window.location.href.includes("Note")) {
        if (window.location.href.includes("treble")) {
            const fetchResult = await fetch(
                "http://localhost:3030/treble/newLesson/notes/" + Number(level).toString()
            );
            window.location.href = fetchResult.url;
        } else if (window.location.href.includes("bass")) {
            const fetchResult = await fetch(
                "http://localhost:3030/bass/newLesson/notes/" + Number(level).toString()
            );
            window.location.href = fetchResult.url;
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
            score: currScore,
            streak: maxStreak,
            correct: numRight,
            total: totalQs
        })
    };
    const postResult = await fetch("http://localhost:3030/" + clef + "/send" + type + 'Data/' + level.toString(), requestOptions);
    if (postResult.ok) {
        const fetchResult = await fetch("http://localhost:3030/" + clef + "/end" + type + 'Level/' + level.toString());
        setTimeout(() => {
            window.location.href = fetchResult.url;
        }, 1000);
    }
}

function beginTimer() {
    scoreCurrQuestion = 1000;
    interval = setInterval(() => {
        if (scoreCurrQuestion <= 500) {
            stopTimer();
        } else {
            scoreCurrQuestion -= 10;
            document.getElementById("timer").innerText = scoreCurrQuestion;
        }
    }, 150);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    scoreCurrQuestion = 1000;
    clearInterval(interval);
}

function scoreCorrect() {
    clearInterval(interval);
    currScore += scoreCurrQuestion;
    streak++;
    totalQs++;
    numRight++;
    document.getElementById("currentScore").innerText = "Total: " + currScore;
    document.getElementById("streak").innerText = "Streak: " + streak;
}

function scoreIncorrect() {
    if (streak > maxStreak) {
        maxStreak = streak;
    }
    streak = 0;
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

function filter(type, clef) {
    if (type == 'lessons') {
        document.getElementById('hideLessons').textContent = 'Hide';
    }
    if (type == 'songs') {
        document.getElementById('hideSongs').textContent = 'Hide';
    }

    if (type == 'none' && clef == 'none') {
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
        const lessons = document.getElementsByClassName('lessonCard');
        for (let x of lessons) {
            if (!x.classList.contains('trebleCard')) {
                x.style.display = 'none';
            } else {
                x.style.display = 'block';
            }
        }
        const lessonBtns = document.getElementsByClassName('lessonFilterBtn');
        for (let x of lessonBtns) {
            x.style.color = 'white';
        }
        const filterBtn = document.getElementById('trebleLessonFilter');
        if (filterBtn) {
            filterBtn.style.color = 'var(--secondary)';
        }
        return;
    }

    if (type == 'lessons' && clef == 'bass') {
        const lessons = document.getElementsByClassName('lessonCard');
        for (let x of lessons) {
            if (!x.classList.contains('bassCard')) {
                x.style.display = 'none';
            } else {
                x.style.display = 'block';
            }
        }
        const lessonBtns = document.getElementsByClassName('lessonFilterBtn');
        for (let x of lessonBtns) {
            x.style.color = 'white';
        }
        const filterBtn = document.getElementById('bassLessonFilter');
        if (filterBtn) {
            filterBtn.style.color = 'var(--secondary)';
        }
        return;
    }

    if (type == 'songs' && clef == 'treble') {
        const songs = document.getElementsByClassName('songCard');
        for (let x of songs) {
            if (!x.classList.contains('trebleCard')) {
                x.style.display = 'none';
            } else {
                x.style.display = 'block';
            }
        }
        const songBtns = document.getElementsByClassName('songFilterBtn');
        for (let x of songBtns) {
            x.style.color = 'white';
        }
        const filterBtn = document.getElementById('trebleSongFilter');
        if (filterBtn) {
            filterBtn.style.color = 'var(--secondary)';
        }
        return;
    }
    if (type == 'songs' && clef == 'bass') {
        const songs = document.getElementsByClassName('songCard');
        for (let x of songs) {
            if (!x.classList.contains('bassCard')) {
                x.style.display = 'none';
            } else {
                x.style.display = 'block';
            }
        }
        const songBtns = document.getElementsByClassName('songFilterBtn');
        for (let x of songBtns) {
            x.style.color = 'white';
        }
        const filterBtn = document.getElementById('bassSongFilter');
        if (filterBtn) {
            filterBtn.style.color = 'var(--secondary)';
        }
        return;
    }
    if (type == 'songs' && clef == 'purchased') {
        const songs = document.getElementsByClassName('songCard');
        for (let x of songs) {
            if (!x.classList.contains('purchasedCard')) {
                x.style.display = 'none';
            } else {
                x.style.display = 'block';
            }
        }
        const songBtns = document.getElementsByClassName('songFilterBtn');
        for (let x of songBtns) {
            x.style.color = 'white';
        }
        const filterBtn = document.getElementById('purchasedSongFilter');
        if (filterBtn) {
            filterBtn.style.color = 'var(--secondary)';
        }
        return;
    }
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

startCountOff();