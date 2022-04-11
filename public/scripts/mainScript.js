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

let key1 = null;
let key2 = null;
document.addEventListener("keyup", () => {
    if (key1 != null) {
        let key = key1;
        if (key2 != null) {
            if (key1 == 'ARROWUP') {
                key = key2 + '#';
            } else if (key1 == 'ARROWDOWN') {
                key = key2 + 'b';
            } else if (key2 == 'ARROWUP') {
                key = key1 + '#';
            } else if (key1 == 'ARROWDOWN') {
                key = key1 + 'b';
            }
        }
        const el = document.getElementById(key);
        if (el != undefined && el != null) {
            el.click();
        }
        key1 = null;
        key2 = null;
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key == 'ArrowUp' || event.key == 'ArrowDown') {
        event.preventDefault();
    }
    if (
        (window.location.href.includes("noteLesson") || window.location.href.includes("songLesson") ||
            window.location.href.includes("allSongs")) && !counting
    ) {
        if (key1 == null) {
            key1 = event.key.toUpperCase();
        } else if (key2 == null) {
            key2 = event.key.toUpperCase();
        }
    } else if (
        (window.location.href.includes("noteLesson") || window.location.href.includes("songLesson") ||
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
    // will not work for Sharps and Flats yet!
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
            } else if (window.location.href.includes("allSongs")) {
                const curLocation = window.location.href.split("play/")[1];
                if (window.location.href.includes("treble")) {
                    levelComplete('treble', 'Song', curLocation);
                } else if (window.location.href.includes("bass")) {
                    levelComplete('bass', 'Song', curLocation);
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
    window.location.href = "http://localhost:3030/bass/newLesson/notes/0";
}

async function startTreble() {
    window.location.href = "http://localhost:3030/treble/newLesson/notes/0";
}

async function restart() {
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
    }
}

async function nextLevel(level) {
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
    window.location.href = "http://localhost:3030" + url;
}

async function nextLesson(retry = false) {
    let level = Number(window.location.href.split("Level/")[1]) + 1;
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
        window.location.href = "http://localhost:3030/" + clef + "/end" + type + 'Level/' + level.toString();
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
        const filterBtn = document.getElementById('trebleLessonFilter');
        if (filterBtn && filterBtn.style.color == 'var(--secondary)') {
            /* already on, turn off */
            const lessons = document.getElementsByClassName('lessonCard');
            for (let x of lessons) {
                x.style.display = 'block';
            }
            filterBtn.style.color = 'white';
            return;
        }
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
        if (filterBtn) {
            filterBtn.style.color = 'var(--secondary)';
        }
        return;
    }

    if (type == 'lessons' && clef == 'bass') {
        const filterBtn = document.getElementById('bassLessonFilter');
        if (filterBtn && filterBtn.style.color == 'var(--secondary)') {
            /* already on, turn off */
            const lessons = document.getElementsByClassName('lessonCard');
            for (let x of lessons) {
                x.style.display = 'block';
            }
            filterBtn.style.color = 'white';
            return;
        }
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
        if (filterBtn) {
            filterBtn.style.color = 'var(--secondary)';
        }
        return;
    }

    if (type == 'songs' && clef == 'treble') {
        const filterBtn = document.getElementById('trebleSongFilter');
        if (filterBtn && filterBtn.style.color == 'var(--secondary)') {
            /* already on, turn off */
            const songs = document.getElementsByClassName('songCard');
            for (let x of songs) {
                x.style.display = 'block';
            }
            filterBtn.style.color = 'white';
            return;
        }
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
        if (filterBtn) {
            filterBtn.style.color = 'var(--secondary)';
        }
        return;
    }

    if (type == 'songs' && clef == 'bass') {
        const filterBtn = document.getElementById('bassSongFilter');
        if (filterBtn && filterBtn.style.color == 'var(--secondary)') {
            /* already on, turn off */
            const songs = document.getElementsByClassName('songCard');
            for (let x of songs) {
                x.style.display = 'block';
            }
            filterBtn.style.color = 'white';
            return;
        }
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
        if (filterBtn) {
            filterBtn.style.color = 'var(--secondary)';
        }
        return;
    }

    if (type == 'songs' && clef == 'purchased') {
        const filterBtn = document.getElementById('purchasedSongFilter');
        if (filterBtn && filterBtn.style.color == 'var(--secondary)') {
            /* already on, turn off */
            const songs = document.getElementsByClassName('songCard');
            for (let x of songs) {
                x.style.display = 'block';
            }
            filterBtn.style.color = 'white';
            return;
        }
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

function purchaseSong(name, id, price, canAfford = true, coins) {
    let modalBackdrop = document.createElement('section')
    let popUpModal = document.createElement('section')
    let modalText = document.createElement('section')
    let okButton = document.createElement('button')
    let cancelButton = document.createElement('button')

    modalText.innerText = canAfford ? "You are about to buy " + name + " for " + price + "♪" :
        "You need " + (price - coins) + "♪ more to buy " + name + ".\nPlay to collect more!"
    cancelButton.innerText = "Cancel"
    okButton.innerText = "OK"

    modalBackdrop.classList.add("modalBackdrop")
    popUpModal.classList.add("popUpModal")
    modalText.classList.add("modalText")
    cancelButton.classList.add("modalButton", "actionButton")
    okButton.id = "modalOk"
    okButton.classList.add("modalButton", "actionButton")

    cancelButton.setAttribute("onclick", "closePopUp()")
    modalBackdrop.setAttribute("onclick", "closePopUp()")

    if (canAfford) {
        const funcCall = "buySong('" + id + "', `" + name + "`)"
        okButton.setAttribute("onclick", funcCall);
    } else {
        okButton.setAttribute("onclick", "closePopUp()");
    }


    popUpModal.appendChild(modalText)
    if (canAfford) {
        popUpModal.appendChild(cancelButton)
    }
    popUpModal.appendChild(okButton)

    document.getElementById("modalInsert").appendChild(modalBackdrop)
    document.getElementById("modalInsert").appendChild(popUpModal)
}

function purchaseStatusModal(name, purchaseStatus) {
    let modalBackdrop = document.createElement('section')
    let popUpModal = document.createElement('section')
    let modalText = document.createElement('section')
    let closeButton = document.createElement('button')

    modalText.innerText = purchaseStatus ? "Purchase of " + name + " successful!" :
        "Failed to purchase " + name + ". Please try again later";
    closeButton.innerText = "Close"

    modalBackdrop.classList.add("modalBackdrop")
    popUpModal.classList.add("popUpModal")
    modalText.classList.add("modalText")
    closeButton.classList.add("modalButton", "actionButton")

    closeButton.setAttribute("onclick", "closePopUp()")
    modalBackdrop.setAttribute("onclick", "closePopUp()")

    popUpModal.appendChild(modalText)
    popUpModal.appendChild(closeButton)

    document.getElementById("modalInsert").appendChild(modalBackdrop)
    document.getElementById("modalInsert").appendChild(popUpModal)
}

function closePopUp(animate = true) {
    if (animate) {
        document.getElementsByClassName("popUpModal")[0].classList.add("animateSwipeUpAway")
        document.getElementsByClassName("modalBackdrop")[0].classList.add("animateFadeOut")

        setTimeout(() => {
            document.getElementsByClassName("modalBackdrop")[0].remove()
            document.getElementsByClassName("popUpModal")[0].remove()
        }, 350)
    } else {
        document.getElementsByClassName("modalBackdrop")[0].remove()
        document.getElementsByClassName("popUpModal")[0].remove()
    }
}

async function buySong(songId, name) {
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
            purchaseStatusModal(name, true);
        } else {
            closePopUp(animate = false);
            purchaseStatusModal(name, false);
        }
    }, 300)

}

function initializeHidden() {
    const x = document.getElementById("wrongAnswerX");
    if (x) {
        x.style.display = "block";
    }
}

function openNav(){
    document.getElementById("sideNav").style.width = "250px";
}

function closeNav(){
    document.getElementById("sideNav").style.width = "0";
}

startCountOff();
window.addEventListener("load", function() {
    initializeHidden();
});