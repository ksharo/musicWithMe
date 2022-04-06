trebleSongNames = [
    'Amazing Grace',
    'It\'s Raining, It\'s Pouring',
    'Happy Birthday'
]

trebleSongPrices = [
    50,
    15,
    30
]

bassSongNames = [
    'Under the Sea',
    'Bear Necessities'
]

bassSongPrices = [
    50,
    50
]

trebleSongData = [];

for (let x in trebleSongNames) {
    trebleSongData.push({
        name: trebleSongNames[x],
        price: trebleSongPrices[x]
    });
}

bassSongData = [];
for (let x in bassSongNames) {
    bassSongData.push({
        name: bassSongNames[x],
        price: bassSongPrices[x]
    })
}

module.exports = {
    trebleSongData,
    bassSongData
}