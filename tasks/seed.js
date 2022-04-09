const dbConnection = require("../config/mongoConnection");
const data = require("../data");
const accounts = data.accountFunctions;
const songs = data.songFunctions;

async function main() {

    const db = await dbConnection.connectToDb();
    await db.collection("songs").drop();
    await db.collection("accounts").drop();


    const k = await accounts.create('ksharo', '12345', []);
    const c = await accounts.create('cchoy', '12345', []);
    const l = await accounts.create('lrechler', '12345', []);
    const j = await accounts.create('jschneid', '12345', []);

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
    const hotCrossedBuns = [tG1, tG1, tA2, tG1, tC2, tB2, tG1, tG1, tA2, tG1, tD2, tC2, tG1, tG1, tG2, tE2, tC2, tB2, tA2, tF2, tF2, tE2, tC2, tD2, tC2];

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
        'Happy Birthday',
        "Hot Crossed Buns"
    ]

    trebleSongPrices = [
        50,
        15,
        30,
        5000
    ]

    trebleDifficulty = [
        'Medium',
        'Easy',
        'Medium',
        "Easy"
    ]

    trebleImages = [
        "https://images.unsplash.com/photo-1490682143684-14369e18dce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
        "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=8",
        "https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
        "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=8",
    ]

    const trebleSongs = [amazingGrace, raining, birthday, hotCrossedBuns];


    bassSongNames = [
        'Under the Sea',
        'Bare Necessities'
    ]

    bassSongPrices = [
        50,
        50
    ]

    bassDifficulty = [
        'Hard',
        'Hard'
    ]

    bassImages = [
        "https://images.unsplash.com/photo-1471927866530-2b87d315d8b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
        "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
    ]

    const bassSongs = [underSea, bareNecessities];
    const ids = [];

    for (let x in trebleSongs) {
        const song = await songs.create(trebleSongNames[x], trebleNotes, trebleSongs[x], trebleDifficulty[x], trebleSongPrices[x], trebleImages[x], 'treble');
        ids.push(song._id);
    }

    for (let x in bassSongs) {
        const song = await songs.create(bassSongNames[x], bassNotes, bassSongs[x], bassDifficulty[x], bassSongPrices[x], bassImages[x], 'bass');
        ids.push(song._id);
    }

    for (let x of ids) {
        await accounts.buySong(k._id, x);
    }
    console.log("Done seeding database");

    await dbConnection.closeConnection();
}

main().catch((error) => {
    console.log(error);
});