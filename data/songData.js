const tA1 = 0;
const tB1 = 1;
const tC1 = 2;
const tD1 = 3;
const tE1 = 4
const tF1 = 5;
const tG1 = 6;
const tA2 = 7;
const tB2 = 8;
const tC2 = 9;
const tD2 = 10;
const tE2 = 11;
const tF2 = 12;
const tG2 = 13;
const tA3 = 14;
const tB3 = 15;
const tC3 = 16;

trebleNotes = [
        'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'A3', 'B3', 'C3'
    ]
    //   0      1     2     3     4     5     6    7     8      9    10     11    12    13    14    15   16


const amazingGrace = [tC1, tF1, tA2, tF1, tA2, tG1, tF1, tD1, tC1, tC1, tF1, tA2, tF1, tA2, tG1, tC2, tA2, tC2, tA2, tC2, tA2, tF1, tC1, tD1, tF1, tF1, tD1, tC1, tC1, tF1, tA2, tF1, tA2, tG1, tF1];
const raining = [tG1, tG1, tE1, tA2, tG1, tE1, tF1, tG1, tE1, tA2, tG1, tE1, tE1, tF1, tF1, tD1, tD1, tF1, tF1, tD1, tD1, tG1, tF1, tE1, tD1, tE1, tC1];
const birthday = [tG1, tG1, tA2, tG1, tC2, tB2, tG1, tG1, tA2, tG1, tD2, tC2, tG1, tG1, tG2, tE2, tC2, tB2, tA2, tF2, tF2, tE2, tC2, tD2, tC2];


const bC1 = 0;
const bD1 = 1;
const bE1 = 2;
const bF1 = 3;
const bG1 = 4
const bA1 = 5;
const bB1 = 6;
const bC2 = 7;
const bD2 = 8;
const bE2 = 9;
const bF2 = 10;
const bG2 = 11;
const bA2 = 12;
const bB2 = 13;
const bC3 = 14;
const bD3 = 15;
const bE3 = 16;
bassNotes = [
        'C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3'
    ]
    //   0     1     2     3     4     5     6     7     8      9    10    11    12    13    14    15    16


const underSea = [bC2, bC2, bC2, bC2, bB1, bD2, bC2, bG1, bE1, bG1, bG1, bE1, bD1, bG1, bE1, bG1, bC2, bC2, bC2, bB1, bD2, bC2, bG1, bE1, bG1, bG1, bE1, bD1, bG1, bE1, bA1, bC2, bC2, bA1, bG1, bC2, bG1, bC2, bB1, bD2, bD2, bC2, bE2, bD2, bC2, bA1, bC2, bC2, bA1, bG1, bC2, bG1, bC2, bB1, bD2, bD2, bC2, bE2, bD2, bC2, bE2, bD2, bC2, bA1, bE2, bD2, bC2, bD2, bE2, bD2, bC2, bA1, bG1, bE2, bD2, bC2, bA1, bG1, bE2, bD2, bC2, bE2, bE2, bD2, bC2, bA1, bC2, bC2, bA1, bD2, bD2, bC2, bD2, bE2, bE2, bD2, bD2, bC2, bE2, bD2, bC2, bA1, bG1, bE2, bD2, bC2, bA1, bG1, bE2, bD2, bC2, bC2];
const bareNecessities = [bG1, bA1, bC2, bE2, bD2, bE2, bD2, bC2, bC2, bD2, bC2, bD2, bC2, bD2, bC2, bA1, bG1, bC2, bG1, bC2, bE2, bA2, bG2, tD2, bE2, bD2, bG2, bA2, bG2, bA2, bG2, bA2, bG2, bE2, bC2, bD2, bC2, bD2, bC2, bE2, bC2, bA1, bC2, bE2, bG2, bE2, bG2, bE2, bC2, bA1, bG1, bC2, bC2, bB1, bB1, bA1, bG1, bD2, bD2, bE2, bC2, bA1, bC2, bC2, bB1, bB1, bA1, bG1, bD2, bD2, bC2, bD2, bE2, bE2, bF2, bG2, bA2, bA2, bA2, bF2, bE2, bD2, bE2, bF2, bG2, bA2, bG2, bE2, bD2, bE2, bF2, bG2, bA2, bA2, bA2, bF2, bE2, bD2, bC2, bB1, bC2];

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

trebleDifficulty = [
    'Medium',
    'Easy',
    'Medium'
]

bassSongNames = [
    'Under the Sea',
    'Bear Necessities'
]

bassSongPrices = [
    50,
    50
]

bassDificulty = [
    'Hard',
    'Hard'
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