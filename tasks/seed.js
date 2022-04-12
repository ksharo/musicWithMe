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
    const tAb1 = 17;
    const tAs1 = 18;
    const tBb1 = 19;
    const tCs1 = 20;
    const tDb1 = 21;
    const tDs1 = 22;
    const tEb1 = 23;
    const tFs1 = 24;
    const tGb1 = 25;
    const tGs1 = 26;
    const tAb2 = 27;
    const tAs2 = 28;
    const tBb2 = 29;
    const tCs2 = 30;
    const tDb2 = 31;
    const tDs2 = 32;
    const tEb2 = 33;
    const tFs2 = 34;
    const tGb2 = 35;
    const tGs2 = 36;
    const tAb3 = 37;
    const tAs3 = 38;
    const tBb3 = 39;
    const tCs3 = 40;

    trebleNotes = [
            'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'A3', 'B3', 'C3', 'Ab1', 'A%231', 'Bb1', 'C%231', 'Db1', 'D%231', 'Eb1', 'F%231', 'Gb1', 'G%231', 'Ab2', 'A%232', 'Bb2', 'C%232', 'Db2', 'D%232', 'Eb2', 'F%232', 'Gb2', 'G%232', 'Ab3', 'A%233', 'Bb3', 'C%233'
        ]
        //   0      1     2     3     4     5     6    7     8      9    10     11    12    13    14    15   16


    const amazingGrace = [tC1, tF1, tA2, tF1, tA2, tG1, tF1, tD1, tC1, tC1, tF1, tA2, tF1, tA2, tG1, tC2, tA2, tC2, tA2, tC2, tA2, tF1, tC1, tD1, tF1, tF1, tD1, tC1, tC1, tF1, tA2, tF1, tA2, tG1, tF1];
    const raining = [tG1, tG1, tE1, tA2, tG1, tE1, tF1, tG1, tE1, tA2, tG1, tE1, tE1, tF1, tF1, tD1, tD1, tF1, tF1, tD1, tD1, tG1, tF1, tE1, tD1, tE1, tC1];
    const birthday = [tG1, tG1, tA2, tG1, tC2, tB2, tG1, tG1, tA2, tG1, tD2, tC2, tG1, tG1, tG2, tE2, tC2, tB2, tA2, tF2, tF2, tE2, tC2, tD2, tC2];
    const baseball = [tC1, tC2, tA2, tG1, tE1, tG1, tD1, tC1, tC2, tA2, tG1, tE1, tG1, tA2, tGs1, tA2, tE1, tF1, tG1, tA2, tF1, tD1, tA2, tA2, tA2, tB2, tC2, tD2, tB2, tA2, tG1, tE1, tD1, tC1, tC2, tA2, tG1, tE1, tG1, tD1, tD1, tC1, tD1, tE1, tF1, tG1, tA2, tA2, tB2, tC2, tC2, tC2, tB2, tA2, tG1, tFs1, tG1, tA2, tB2, tC2, tG1, tE1, tC1];
    const clair = [tG1, tG2, tE2, tD2, tE2, tD2, tC2, tD2, tC2, tE2, tC2, tB2, tC2, tB2, tF1, tA2, tB2, tA2, tD2, tA2, tG1, tA2, tG1, tF1, tG1, tF1, tE1, tE1, tF1, tE1, tA2, tE1, tD1, tE1, tD1, tC1, tD1, tB1, tG1, tG2, tE2, tD2, tE2, tD2, tC2, tD2, tG2, tE2, tD2, tE2, tD2, tC2]

    trebleSongNames = [
        'Amazing Grace',
        'It\'s Raining, It\'s Pouring',
        'Happy Birthday',
        'The Baseball Song',
        'Clair De Lune'
    ]

    trebleSongPrices = [
        500,
        200,
        300,
        500,
        200
    ]

    trebleDifficulty = [
        'Medium',
        'Easy',
        'Medium',
        'Hard',
        'Easy'
    ]

    trebleImages = [
        "https://images.unsplash.com/photo-1490682143684-14369e18dce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
        "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=8",
        "https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
        'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/596134/pexels-photo-596134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]

    trebleDetails = [
        'The words to Amazing Grace were written by John Newton in 1772. It was set to a tune by William Walker in 1835 and is commonly sung in churches today.',
        'It\'s Raining, It\'s Pouring is a popular English nursery rhyme. The words were originally published in 1912, and Charles Ives added the music in 1939.',
        'Happy Birthday is the most recognized song in the English language. It was published in 1893, but nobody knows for sure who wrote it.',
        'Take me out to the Ball Game was written in 1908 by two men who had never attended a baseball game.',
        'Clair de Lune - Moonlight in French - is part of a suite written by Claude Debussy in 1890. The title refers to a French folk song about love.'
    ];

    const trebleSongs = [amazingGrace, raining, birthday, baseball, clair];

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
    const bCs1 = 17;
    const bDb1 = 18;
    const bDs1 = 19;
    const bEb1 = 20;
    const bFs1 = 21;
    const bGb1 = 22;
    const bGs1 = 23;
    const bAb1 = 24;
    const bAs1 = 25;
    const bBb1 = 26;
    const bCs2 = 27;
    const bDb2 = 28;
    const bDs2 = 29;
    const bEb2 = 30;
    const bFs2 = 31;
    const bGb2 = 32;
    const bGs2 = 33;
    const bAb2 = 34;
    const bAs2 = 35;
    const bBb2 = 36;
    const bCs3 = 37;
    const bDb3 = 38;
    const bDs3 = 39;
    const bEb3 = 40;
    bassNotes = [
            'C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'C%231', 'Db1', 'D%231', 'Eb1', 'F%231', 'Gb1', 'G%231', 'Ab1', 'A%231', 'Bb1', 'C%232', 'Db2', 'D%232', 'Eb2', 'F%232', 'Gb2', 'G%232', 'Ab2', 'A%232', 'Bb2', 'C%233', 'Db3', 'D%233', 'Eb3'
        ]
        //   0     1     2     3     4     5     6     7     8      9    10    11    12    13    14    15    16


    const underSea = [bC2, bC2, bC2, bC2, bB1, bD2, bC2, bG1, bE1, bG1, bG1, bE1, bD1, bG1, bE1, bG1, bC2, bC2, bC2, bB1, bD2, bC2, bG1, bE1, bG1, bG1, bE1, bD1, bG1, bE1, bA1, bC2, bC2, bA1, bG1, bC2, bG1, bC2, bB1, bD2, bD2, bC2, bE2, bD2, bC2, bA1, bC2, bC2, bA1, bG1, bC2, bG1, bC2, bB1, bD2, bD2, bC2, bE2, bD2, bC2, bE2, bD2, bC2, bA1, bE2, bD2, bC2, bD2, bE2, bD2, bC2, bA1, bG1, bE2, bD2, bC2, bA1, bG1, bE2, bD2, bC2, bE2, bE2, bD2, bC2, bA1, bC2, bC2, bA1, bD2, bD2, bC2, bD2, bE2, bE2, bD2, bD2, bC2, bE2, bD2, bC2, bA1, bG1, bE2, bD2, bC2, bA1, bG1, bE2, bD2, bC2, bC2];
    const bareNecessities = [bG1, bA1, bC2, bE2, bD2, bE2, bD2, bC2, bC2, bD2, bC2, bD2, bC2, bD2, bC2, bA1, bG1, bC2, bG1, bC2, bE2, bA2, bG2, tD2, bE2, bD2, bG2, bA2, bG2, bA2, bG2, bA2, bG2, bE2, bC2, bD2, bC2, bD2, bC2, bE2, bC2, bA1, bC2, bE2, bG2, bE2, bG2, bE2, bC2, bA1, bG1, bC2, bC2, bB1, bB1, bA1, bG1, bD2, bD2, bE2, bC2, bA1, bC2, bC2, bB1, bB1, bA1, bG1, bD2, bD2, bC2, bD2, bE2, bE2, bF2, bG2, bA2, bA2, bA2, bF2, bE2, bD2, bE2, bF2, bG2, bA2, bG2, bE2, bD2, bE2, bF2, bG2, bA2, bA2, bA2, bF2, bE2, bD2, bC2, bB1, bC2];
    const jurassic = [bG2, bFs2, bG2, bG2, bFs2, bG2, bG2, bFs2, bG2, bA2, bA2, bC3, bC3, bB2, bG2, bA2, bFs2, bD2, bB2, bG2, bA2, bD3, bG2, bC3, bB2, bB2, bA2, bA2, bG2, bFs2, bG2, bD2, bC2, bG2, bFs2, bG2, bD2, bC2, bG2, bFs2, bFs2, bG2, bD2, bG1, bF2, bG2, bFs2, bG2, bD2, bC2, bG2, bFs2, bG2, bD2, bC2, bG2, bFs2, bFs2, bG2, bD2, bG1, bG2, bFs2, bG2, bD2, bC2, bB1, bB1]
    const mulan = [bD3, bA2, bC3, bG2, bA2, bC3, bG2, bA2, bBb2, bC3, bG2, bD3, bA2, bC3, bG2, bA2, bC3, bG2, bA2, bBb2, bC3, bC3, bC2, bC2, bD2, bD2, bD2, bG2, bF2, bE2, bE2, bF2, bG2, bA2, bBb2, bA2, bC2, bD2, bBb2, bA2, bF2, bD2, bA2, bG2, bF2, bE2, bF2, bD2]
    const linus = [bAb1, bEb2, bAb2, bAb1, bEb2, bAb2, bAb1, bEb2, bF2, bAb1, bEb2, bF2, bAb1, bEb2, bAb2, bAb1, bEb2, bAb2, bAb1, bEb2, bF2, bAb1, bEb2, bF2, bAb1, bBb1, bC2, bC2, bBb1, bAb1, bBb1, bAb1, bAb1, bBb1, bC2, bC2, bAb1, bBb1, bC2, bC2, bBb1, bAb1, bBb1, bAb1, bAb1, bBb1, bBb1, bAb1, bBb1, bC2, bC2, bBb1, bAb1, bBb1, bAb1, bAb1, bBb1, bC2, bC2, bAb1, bBb1, bC2, bC2, bBb1, bAb1, bBb1, bAb1, bAb1, bBb1, bBb1, bAb1, bBb1, bBb1, bAb1, bDb2, bDb2, bDb2, bEb2, bEb2, bF2, bF2, bEb2, bF2, bF2, bEb2, bF2, bF2, bEb2, bAb1, bDb2, bDb2, bDb2, bEb2, bEb2, bF2, bF2, bEb2, bF2, bF2, bEb2, bF2, bF2, bEb2, bAb1, bDb2, bDb2, bDb2, bEb2, bEb2, bF2, bF2, bEb2, bF2, bF2, bEb2, bF2, bF2, bEb2, bAb1, bAb1, bEb2, bAb2, bAb1, bEb2, bAb2, bAb1, bEb2, bF2, bAb1, bEb2, bF2, bAb1, bEb2, bAb2, bAb1, bEb2, bAb2, bAb1];

    bassSongNames = [
        'Under the Sea',
        'The Bare Necessities',
        'Jurassic Park',
        'I\'ll Make a Man Out of You',
        'Linus and Lucy'
    ]

    bassSongPrices = [
        750,
        750,
        400,
        300,
        1000
    ]

    bassDifficulty = [
        'Medium',
        'Medium',
        'Hard',
        'Medium',
        'Hard'
    ]

    bassImages = [
        "https://images.unsplash.com/photo-1471927866530-2b87d315d8b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
        "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
        'https://images.pexels.com/photos/1319591/pexels-photo-1319591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/5971314/pexels-photo-5971314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/10565573/pexels-photo-10565573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]

    bassDetails = [
        'Under the Sea was written by Alan Menken for the 1989 Disney film, The Little Mermaid. In the movie, it is sung by Sebastian, the Jamaican crab, as he attempts to convince Ariel to stay where she belongs - under the sea.',
        'The Bare Necessities was written by Terry Gilkyson for the 1967 Disney film, The Jungle Book. It is an exciting jazz song sung by the bear Baloo, who is teaching young Mowgli how to survive in the wild.',
        'The theme for Jurassic Park was written by John Williams for the 1993 film, Jurassic Park. It made it to position 28 on the US Billboard music charts in 1993.',
        'I\'ll Make a Man Out Of You was written by Donny Osmond for the 1998 animated Disney film, Mulan.',
        'Linus and Lucy was written by Vince Guaraldi in 1964 for Lee Mendelson, the producer of the Peanuts films. While this jazzy tune is typically heard around Christmas time, it is an all-year favorite.'
    ];

    const bassSongs = [underSea, bareNecessities, jurassic, mulan, linus];
    const ids = [];

    for (let x in trebleSongs) {
        const song = await songs.create(trebleSongNames[x], trebleNotes, trebleSongs[x], trebleDifficulty[x], trebleSongPrices[x], trebleImages[x], trebleDetails[x], 'treble');
        ids.push(song._id);
    }

    for (let x in bassSongs) {
        const song = await songs.create(bassSongNames[x], bassNotes, bassSongs[x], bassDifficulty[x], bassSongPrices[x], bassImages[x], bassDetails[x], 'bass');
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