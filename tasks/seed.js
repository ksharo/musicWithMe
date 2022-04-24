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
    const legend = [tBb2, tC2, tC2, tC2, tC2, tC2, tC2, tAb2, tAb2, tBb2, tC2, tC2, tC2, tBb2, tC2, tC2, tBb2, tAb2, tAb2, tF1, tC2, tC2, tDb2, tC2, tAb2, tDb2, tC2, tAb2, tAb2, tBb2, tC2, tBb2, tF1, tBb2, tC2, tC2, tC2, tBb2, tC2, tC2, tBb2, tAb2, tAb2, tC2, tC2, tC2, tEb2, tDb2, tC2, tC2, tBb2, tAb2, tAb2, tC2, tC2, tDb2, tC2, tAb2, tAb2, tDb2, tDb2, tC2, tAb2, tAb2, tBb2, tC2, tBb2, tDb2, tAb2, tF2, tEb2, tDb2, tC2, tBb2, tAb2, tG1, tF1, tEb1, tF1, tF2, tF2, tEb2, tDb2, tC2, tC2, tBb2, tAb2, tBb2, tC2, tEb2, tC2, tF2, tC2, tBb2, tAb2, tC2, tC2, tC2, tBb2, tBb2, tBb2, tAb2, tBb2, tEb1, tC2, tC2, tBb2, tBb2, tBb2, tAb2, tBb2, tEb1, tC2, tC2, tEb2, tC2, tF2, tC2, tF2, tC2, tBb2, tAb2, tC2, tC2, tC2, tBb2, tBb2, tBb2, tAb2, tBb2, tC2, tC2, tBb2, tBb2, tBb2, tAb2, tBb2, tC2, tC2, tDb2, tEb2, tAb3, tG2, tF2, tEb2, tC2, tC2, tC2, tC2, tDb2, tEb2, tAb3, tG2, tF2, tEb2, tC2, tC2, tBb2, tAb2];
    const letitgo = [tBb2, tC2, tC2, tC2, tC2, tC2, tC2, tBb2, tAb2, tAb2, tAb2, tAb2, tBb2, tBb2, tAb2, tG1, tF1, tF1, tC2, tC2, tC2, tC2, tEb2, tEb2, tC2, tAb2, tAb2, tBb2, tC2, tBb2, tAb2, tBb2, tC2, tC2, tEb2, tF2, tEb2, tC2, tEb2, tEb2, tEb2, tDb2, tC2, tDb2, tC2, tC2, tC2, tBb2, tAb2, tBb2, tBb2, tC2, tBb2, tAb2, tF1, tBb2, tBb2, tEb2, tEb2, tBb2, tBb2, tF2, tF2, tF2, tEb2, tF2, tF2, tEb2, tF2, tG2, tAb3, tG2, tG2, tBb2, tBb2, tEb2, tEb2, tBb2, tBb2, tF2, tF2, tEb2, tF2, tG2, tAb3, tF1, tG1, tAb2, tEb1, tEb1, tBb2, tAb2, tF1, tF1, tF1, tF1, tG1, tAb2, tF1, tG1, tAb2, tEb1, tC2, tC2, tBb2, tAb2, tBb2, tC2, tC2, tDb2, tC2, tBb2, tAb2, tBb2, tAb2, tEb2, tC2, tBb2, tAb2, tAb2, tEb2, tC2, tAb2, tAb2, tAb2, tG1, tEb1, tEb1, tDb1, tDb1, tDb1, tC1, tDb1, tC1, tDb1, tDb1, tC1, tAb1];
    const teapot = [tC1, tD1, tE1, tF1, tG1, tC2, tA2, tC2, tG1, tF1, tF1, tG1, tE1, tE1, tD1, tD1, tE1, tC1, tC1, tD1, tE1, tF1, tG1, tC2, tA2, tC2, tG1, tC2, tA2, tG1, tF1, tE1, tD1, tC1];
    const perfect = [tC1, tBb1, tAb1, tC1, tAb1, tBb1, tC1, tC1, tBb1, tAb1, tAb1, tAb1, tAb1, tBb1, tC1, tDb1, tDb1, tC1, tBb1, tBb1, tAb1, tAb1, tBb1, tC1, tBb1, tC1, tBb1, tAb1, tC1, tEb1, tC1, tBb1, tAb1, tAb1, tAb1, tBb1, tC1, tDb1, tDb1, tC1, tBb1, tBb1, tAb1, tAb1, tBb1, tC1, tBb1, tC1, tEb1, tEb1, tEb1, tF1, tC1, tBb1, tC1, tC1, tC1, tC1, tBb1, tAb1, tC1, tC1, tC1, tC1, tBb1, tAb1, tDb1, tC1, tAb1, tAb1, tC1, tDb1, tC1, tBb1, tC1, tBb1, tAb1, tC1, tC1, tC1, tAb1, tC1, tBb1, tAb1, tC1, tC1, tC1, tC1, tBb1, tAb1, tDb1, tC1, tAb1, tAb1, tBb1, tEb1, tC1, tBb1, tC1, tAb1, tAb2, tG1, tF1, tG1, tC1, tAb1, tEb1, tDb1, tC1, tBb1, tAb1, tAb2, tG1, tF1, tG1, tC1, tEb1, tEb1, tEb1, tEb1, tF1, tC1, tBb1, tAb1, tC1, tEb1, tAb2, tG1, tF1, tG1, tC1, tAb1, tBb1, tC1, tEb1, tDb1, tC1, tDb1, tC1, tBb1, tDb1, tC1, tAb1, tBb1, tC1, tBb1, tBb1, tAb1, tAb1, tAb1];
    const loveStory = [tB2, tC2, tC2, tC2, tC2, tB2, tC2, tD2, tC2, tC2, tB2, tC2, tC2, tC2, tC2, tB2, tC2, tD2, tC2, tB2, tC2, tA2, tC2, tC2, tC2, tB2, tB2, tG1, tG1, tG1, tA2, tC2, tB2, tC2, tC2, tC2, tC2, tC2, tB2, tB2, tC2, tD2, tC2, tC2, tB2, tC2, tC2, tC2, tC2, tB2, tC2, tD2, tC2, tB2, tC2, tA2, tC2, tB2, tG1, tG1, tA2, tC2, tB2, tC2, tC2, tC2, tC2, tC2, tC2, tC2, tB2, tC2, tD2, tC2, tC2, tC2, tC2, tC2, tD2, tC2, tC2, tC2, tC2, tG2, tF2, tE2, tD2, tE2, tD2, tE2, tD2, tE2, tD2, tE2, tC2, tD2, tD2, tD2, tD2, tC2, tF2, tE2, tE2, tE2, tC2, tC2, tC2, tF2, tE2, tC2, tC2, tD2, tD2, tC2, tE2, tC2, tD2, tC2, tD2, tE2, tD2, tC2, tD2, tD2, tC2, tE2, tC2, tD2, tC2, tD2, tC2, tE2, tD2, tC2, tD2, tC2, tE2, tD2, tC2, tC2, tD2, tE2, tD2, tE2, tE2, tD2, tE2, tE2, tD2, tC2];
    const snowman = [tBb2, tBb2, tBb2, tF1, tBb2, tD2, tC2, tD2, tBb2, tBb2, tF1, tBb2, tD2, tC2, tBb2, tBb2, tF1, tBb2, tD2, tEb2, tD2, tBb2, tF1, tEb2, tD2, tBb2, tBb2, tBb2, tF1, tBb2, tD2, tF2, tF2, tF2, tEb2, tD2, tEb2, tF2, tBb2, tBb2, tC2, tD2, tBb2, tC2, tD2, tC2, tBb2, tC2, tD2, tG2, tBb2, tBb2, tBb2, tF1, tBb2, tD2, tC2, tD2, tBb2, tBb2, tBb2, tBb2, tF1, tBb2, tD2, tC2, tBb2, tBb2, tA2, tBb2];
    const firework = [tGs1, tB2, tB2, tGs1, tGs1, tE1, tFs1, tFs1, tE1, tE1, tE1, tFs1, tFs1, tE1, tE1, tE1, tE1, tE1, tFs1, tGs1, tA2, tGs1, tGs1, tB2, tB2, tGs1, tGs1, tE1, tFs1, tFs1, tE1, tE1, tE1, tFs1, tFs1, tE1, tE1, tE1, tE1, tFs1, tE1, tE1, tGs1, tFs1, tA2, tGs1, tB2, tA2, tCs2, tE2, tE2, tB2, tFs2, tE2, tE2, tGs2, tE2, tE2, tCs2, tB2, tB3, tA3, tGs2, tFs2, tFs2, tE2, tGs2, tB3, tA3, tGs2, tFs2, tFs2, tE2, tGs2, tB3, tA3, tGs2, tFs2, tFs2, tFs2, tFs2, tB2, tB2, tB3, tA3, tGs2, tFs2, tFs2, tFs2, tFs2, tGs2, tB3, tA3, tGs2, tFs2, tFs2, tE2, tGs2, tB3, tA3, tGs2, tFs2, tFs2, tE2, tCs2, tB3, tA3, tGs2, tFs2, tFs2, tFs2, tFs2, tB2, tB2, tB2, tB3, tA3, tGs2, tFs2, tFs2, tFs2, tFs2, tE2];
    const thinking = [tFs1, tA2, tB2, tA2, tFs1, tE1, tD1, tE1, tFs1, tB1, tD1, tFs1, tA2, tB2, tA2, tFs1, tE1, tD1, tE1, tFs1, tB1, tD1, tFs1, tA2, tB2, tA2, tFs1, tE1, tD1, tE1, tFs1, tB1, tD1, tFs1, tA2, tB2, tA2, tFs1, tE1, tD1, tD1, tD2, tD2, tE2, tFs2, tA2, tA2, tD2, tE2, tFs2, tFs2, tE2, tD2, tG2, tFs2, tE2, tD2, tD2, tD2, tE2, tFs2, tA2, tA2, tD2, tE2, tFs2, tFs2, tE2, tD2, tG2, tFs2, tE2, tD2, tFs2, tG2, tFs2, tG2, tFs2, tE2, tD2, tE2, tD2, tFs2, tFs2, tE2, tD2, tD2, tFs2, tG2, tFs2, tE2, tD2, tD2, tD2, tE2, tD2, tFs2, tG2, tFs2, tG2, tFs2, tE2, tD2, tE2, tD2, tFs2, tFs2, tE2, tD2, tD2, tFs2, tG2, tFs2, tE2, tD2, tD2, tD2, tE2, tD2, tE2, tFs2, tA2, tD2, tE2, tFs2, tFs2, tE2, tE2, tG2, tFs2, tE2, tD2, tA2, tD2, tE2, tFs2, tA2, tD2, tE2, tFs2, tFs2, tE2, tE2, tG2, tG2, tE2, tD2, tA2, tD2, tE2, tFs2, tE2, tD2, tA2, tD2, tCs2, tD2, tD2, tE2, tFs2, tE2, tD2, tA2, tG2, tA3, tFs2, tE2, tD2];
    const ratherBe = [tAb2, tC2, tEb2, tF2, tEb2, tDb2, tEb2, tC2, tAb2, tAb2, tC2, tEb2, tF2, tEb2, tDb2, tEb2, tC2, tAb2, tC2, tEb2, tF2, tEb2, tDb2, tEb2, tC2, tAb2, tAb2, tC2, tC2, tAb2, tC2, tAb2, tBb2, tC2, tEb2, tF2, tEb2, tDb2, tEb2, tC2, tAb2, tAb2, tC2, tEb2, tF2, tEb2, tDb2, tEb2, tC2, tC2, tEb2, tF2, tEb2, tDb2, tEb2, tC2, tAb2, tAb2, tC2, tC2, tAb2, tC2, tAb2, tBb2, tC2, tC2, tAb2, tAb2, tF1, tF1, tBb2, tBb2, tG1, tG1, tEb1, tEb1, tBb2, tBb2, tAb2, tAb2, tBb2, tBb2, tC2, tC2, tAb2, tAb2, tF1, tF1, tBb2, tBb2, tG1, tG1, tEb1, tEb1, tBb2, tBb2, tAb2, tAb2, tBb2, tBb2, tAb2, tAb2, tC2, tEb2, tAb3, tBb3, tG2, tAb2, tC2, tEb2, tF2, tEb2, tC2, tEb2, tAb2, tC2, tEb2, tAb3, tBb3, tG2, tAb2, tC2, tEb2, tF2, tEb2, tC2, tBb2, tAb2];
    const yellow = [tA2, tB2, tA2, tB2, tA2, tB2, tA2, tB2, tD2, tA2, tG1, tA2, tG1, tA2, tD2, tG1, tE1, tG1, tE1, tG1, tG1, tE1, tD1, tA2, tB2, tA2, tB2, tA2, tB2, tA2, tB2, tD2, tA2, tG1, tA2, tG1, tA2, tD2, tG1, tE1, tG1, tE1, tG1, tG1, tE1, tD1, tG1, tE2, tD2, tG1, tG1, tD2, tD2, tB2, tB2, tG1, tE2, tD2, tG1, tG1, tD2, tD2, tB2, tB2, tG1, tE2, tD2, tG1, tG1, tD2, tD2, tB2, tB2, tE1, tE2, tG2, tE2, tG2, tE2, tD2];
    const thisIsMe = [tFs2, tFs2, tFs2, tFs2, tFs2, tD2, tE2, tFs2, tFs2, tFs2, tA3, tG2, tFs2, tFs2, tD2, tD2, tD2, tE2, tFs2, tE2, tE2, tD2, tCs2, tD2, tD2, tE2, tFs2, tFs2, tFs2, tD2, tA3, tB3, tFs2, tFs2, tA3, tG2, tFs2, tFs2, tD2, tD2, tE2, tFs2, tE2, tE2, tD2, tE2, tD2, tD2, tFs2, tFs2, tE2, tE2, tD2, tE2, tFs2, tB2, tFs2, tFs2, tE2, tE2, tD2, tE2, tFs2, tA2, tD2, tE2, tFs2, tG2, tFs2, tE2, tFs2, tA3, tB3, tB3, tA3, tFs2, tFs2, tFs2, tA3, tFs2, tE2, tD2, tFs2, tA3, tB3, tB3, tA3, tFs2, tFs2, tFs2, tA3, tFs2, tE2, tD2, tD2, tA3, tFs2, tD2, tA3, tFs2, tD2, tA3, tFs2, tFs2, tFs2, tE2, tE2, tFs2, tA3, tB3, tB3, tA3, tFs2, tFs2, tFs2, tA3, tFs2, tE2, tD2, tFs2, tA3, tB3, tA3, tA3, tFs2, tFs2, tA3, tFs2, tE2, tD2, tD2, tA3, tFs2, tD2, tA3, tFs2, tD2, tA3, tFs2, tFs2, tFs2, tE2, tE2, tD2, tD2, tD2];
    const thousandYears = [tBb2, tBb2, tBb2, tD2, tC2, tBb2, tBb2, tBb2, tBb2, tF2, tEb2, tD2, tBb2, tG1, tF2, tEb2, tD2, tC2, tD2, tA2, tBb2, tBb2, tBb2, tBb2, tD2, tC2, tBb2, tBb2, tBb2, tBb2, tF2, tEb2, tD2, tBb2, tG1, tF2, tEb2, tD2, tC2, tD2, tA2, tBb2, tG1, tG2, tA3, tBb3, tA3, tD2, tF2, tD2, tD2, tF2, tD2, tG2, tF2, tC2, tBb2, tD2, tF2, tD2, tD2, tF2, tD2, tG2, tF2, tC2, tBb2, tBb2, tC2, tEb2, tD2, tG1, tBb2, tC2, tBb2, tC2, tEb2, tD2, tC2, tD2, tF2, tD2, tD2, tF2, tD2, tG2, tF2, tC2, tBb2, tD2, tF2, tD2, tD2, tF2, tD2, tG2, tF2, tC2, tBb2, tBb2, tC2, tEb2, tD2, tG1, tBb2, tC2, tBb2, tC2, tEb2, tD2, tC2, tBb2];

    trebleSongNames = [
        'Amazing Grace',
        'It\'s Raining, It\'s Pouring',
        'Happy Birthday',
        'The Baseball Song',
        'Clair De Lune',
        'All of Me - John Legend',
        'Let It Go',
        'I\'m a Little Teapot',
        'Perfect - Ed Sheeran',
        'Love Story - Taylor Swift',
        'Do You Want to Build A Snowman?',
        'Firework - Katy Perry',
        'Thinking Out Loud',
        'Rather Be',
        'Yellow',
        'This Is Me',
        'A Thousand Years'
    ]

    trebleSongPrices = [
        1250, // amazing grace
        700, // its raining its pouring
        800, // happy birthday
        1000, // the baseball song
        700, // clair de lune
        3000, // all of me john legend
        3000, // let it go
        700, // teapot
        3500, // perfect
        1250, // love story
        1000, // snowman
        1250, // firework
        2750, // thinking out loud
        2000, // rather be
        800, // yellow
        1500, // this is me
        1250, // a thousand years
    ]

    trebleDifficulty = [
        'Medium', // amazing grace
        'Easy', // its raining its pouring
        'Medium', // happy birthday
        'Hard', // the baseball song
        'Easy', // clair de lune
        'Hard', // all of me john legend
        'Hard', // let it go
        'Easy', // teapot
        'Hard', // perfect
        'Easy', // love story
        'Medium', // snowman
        'Medium', // firework
        'Medium', // thinking out loud
        'Hard', // rather be
        'Easy', // yellow
        'Medium', // this is me
        'Medium', // a thousand years
    ]

    trebleImages = [
        "https://images.unsplash.com/photo-1490682143684-14369e18dce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
        "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=8",
        "https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
        'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/596134/pexels-photo-596134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/712520/pexels-photo-712520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1170982/pexels-photo-1170982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1067194/pexels-photo-1067194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/704748/pexels-photo-704748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/7682430/pexels-photo-7682430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/949592/pexels-photo-949592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/888899/pexels-photo-888899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/7195055/pexels-photo-7195055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    ]

    trebleDetails = [
        'The words to Amazing Grace were written by John Newton in 1772. It was set to a tune by William Walker in 1835 and is commonly sung in churches today.',
        'It\'s Raining, It\'s Pouring is a popular English nursery rhyme. The words were originally published in 1912, and Charles Ives added the music in 1939.',
        'Happy Birthday is the most recognized song in the English language. It was published in 1893, but nobody knows for sure who wrote it.',
        'Take me out to the Ball Game was written in 1908 by two men who had never attended a baseball game.',
        'Clair de Lune - Moonlight in French - is part of a suite written by Claude Debussy in 1890. The title refers to a French folk song about love.',
        'Written in 2013, All of Me by John Legend was written for his then-fiancee, now wife, Chrissy Teigen.',
        'Let it Go was written by Kristen Anderson-Lopez and Robert Lopez for Disney\'s popular 2013 animated film, Frozen.',
        'I\'m a Little Teapot was written in 1939 by George Harold Sanders and Clarence Z. Kelley. It is a novelty song for children and is often accompanied with dance moves.',
        'Perfect, by Ed Sheeran, was written for his girlfriend and features his brother, because it was their grandmother\'s dying wish that they worked together on a song.',
        'Love Story, by Taylor Swift, is based on Shakespeare\'s Romeo and Juliet, a romantic tragedy that is well-known by many even still today.',
        'Do You Want To Build a Snowman, written for Disney\'s 2013 animated film, Frozen, is second on the list of all-time best selling Christmas/holiday digital singles, even though it isn\'t a Christmas song.',
        'Firework, by Katy Perry, was written in 2010 is the artist\'s personal favorite song from her album Teenage Dream because of the message that it spreads to be yourself and be proud.',
        'Another great song by Ed Sheeran, Thinking Out Loud spent 19 weeks in the top 40 in the UK before peaking at number 1, making it Sheeran\'s second number 1 single there.',
        'Rather Be was released in 2014 by Clean Bandit and features Jess Glynne on vocals. It became an international hit because of its music video.',
        'Yellow was Coldplay\'s first top-five hit in the UK and began with the inspiration from stars and ended with inspiration from yellow pages, as the band struggled to find a fitting word to complete their song.',
        'This Is Me, from the 2017 film, The Greatest Showman, won the Golden Globe Award for Best Original Song at the 75th Golden Globe Awards.',
        'Written for the popular Twilight Saga moview, A Thousand Years by Christina Perri has become a hit worldwide since its release in 2011.'
    ];

    const trebleSongs = [amazingGrace, raining, birthday, baseball, clair, legend, letitgo, teapot, perfect, loveStory, snowman, firework, thinking, ratherBe, yellow, thisIsMe, thousandYears];

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
    const pie = [bD1, bD2, bD2, bD2, bB1, bG1, bC2, bA1, bB1, bC2, bB1, bA1, bG1, bFs1, bG1, bFs1, bG1, bFs1, bG1, bFs1, bD1, bD1, bD2, bD2, bD2, bB1, bD2, bE2, bG1, bG1, bA1, bB1, bC2, bB1, bA1, bB1, bC2, bA1, bG1, bE1, bG1, bE1, bG1, bE1, bG1, bB1, bA1, bE1, bB1, bB1, bB1, bB1, bC2, bB1, bG1, bA1, bB1, bB1, bB1, bB1, bB1, bC2, bB1, bG1, bE1, bG1, bG1, bG1, bFs1, bE1, bG1, bA1, bG1, bA1, bB1, bE2, bD2, bB1, bB1, bE2, bD2, bD2, bB1, bC2, bB1, bG1, bFs1, bE1, bA1, bB1, bC2, bB1, bB1, bA1, bB1, bA1, bB1, bB1, bB1, bB1, bB1, bB1, bG1, bE1, bG1, bE1, bG1, bC2, bB1, bG1, bD1, bD2, bC2, bC2, bB1, bB1, bA1, bG1, bA1, bD2, bD2, bD2, bD2, bD2, bC2, bC2, bC2, bC2, bB1, bB1, bA1, bG1, bD1, bD2, bD2, bC2, bC2, bC2, bB1, bB1, bA1, bG1, bA1, bB1, bA1, bC2, bB1, bA1, bG1, bFs1, bE1, bFs1, bG1];
    const bruno = [bEb2, bC2, bEb2, bC2, bEb2, bD2, bBb1, bAb1, bF1, bG1, bEb2, bC2, bEb2, bC2, bEb2, bF2, bD2, bG2, bG2, bEb2, bG2, bG2, bEb2, bEb2, bF2, bG2, bF2, bG2, bF2, bG2, bF2, bG2, bG2, bAb2, bG2, bBb2, bAb2, bG2, bF2, bEb2, bBb1, bEb2, bG2, bEb2, bC2, bD2, bG1, bD2, bG2, bAb2, bAb2, bAb2, bAb2, bAb2, bEb2, bAb2, bEb2, bG2, bC2, bD2, bEb2, bF2, bG2, bAb2, bG2, bC3, bC2, bD2, bEb2, bF2, bG2, bAb2, bG2, bC2, bD2, bEb2, bF2, bG2, bAb2, bBb2, bAb2, bF2, bAb2, bF2, bAb2, bG2, bD2, bBb1, bG1, bAb1, bAb2, bF2, bAb2, bF2, bAb2, bBb2, bG2];
    const grandmother = [bD2, bD2, bD2, bD2, bB1, bC2, bD2, bD2, bD2, bD2, bG2, bG2, bG2, bFs2, bE2, bD2, bD2, bC2, bC2, bC2, bC2, bB1, bB1, bB1, bB1, bA1, bA1, bB1, bCs2, bD2, bD2, bD2, bD2, bD2, bB1, bC2, bD2, bD2, bD2, bD2, bG2, bG2, bG2, bFs2, bE2, bD2, bD2, bC2, bC2, bC2, bC2, bB1, bB1, bB1, bB1, bA1, bC2, bB1, bA1, bG1];
    const pirates = [bBb1, bBb1, bBb1, bBb1, bBb1, bBb1, bBb1, bBb1, bBb1, bBb1, bBb1, bBb1, bBb1, bBb1, bBb1, bF1, bAb1, bBb1, bBb1, bBb1, bBb1, bBb1, bBb1, bEb2, bDb2, bC2, bBb1, bBb1, bBb1, bBb1, bBb1, bBb1, bBb1, bF1, bAb1, bBb1, bBb1, bBb1, bC2, bDb2, bDb2, bDb2, bEb2, bC2, bC2, bBb1, bAb1, bAb1, bBb1, bF1, bAb1, bBb1, bBb1, bBb1, bC2, bDb2, bDb2, bDb2, bEb2, bC2, bC2, bBb1, bAb1, bAb1, bBb1, bF1, bAb1, bBb1, bBb1, bBb1, bDb2, bEb2, bEb2, bEb2, bF2, bGb2, bGb2, bF2, bEb2, bF2, bBb1, bBb1, bC2, bDb2, bDb2, bEb2, bF2, bBb1, bBb1, bDb2, bC2, bC2, bBb1, bA1, bBb1, bBb1, bC2, bDb2, bDb2, bEb2, bF2, bDb2, bBb1, bF1, bGb2, bDb2, bBb1, bGb1, bF1, bA1, bBb1];
    const fireflies = [bG1, bD2, bD2, bC2, bD2, bC2, bG1, bG1, bA1, bA1, bG1, bA1, bC2, bD2, bE2, bD2, bC2, bG1, bG1, bG1, bD2, bC2, bA1, bG1, bD2, bD2, bC2, bD2, bC2, bG1, bG1, bA1, bA1, bG1, bA1, bC2, bD2, bG1, bG1, bE2, bD2, bC2, bG1, bG1, bE2, bD2, bA1, bC2, bE2, bD2, bC2, bG2, bE2, bD2, bC2, bD2, bG1, bC2, bB1, bA1, bG1, bB1, bA1, bA1, bA1, bC2, bC2, bC2, bE2, bD2, bC2, bG1, bG1, bA1, bA1, bC2, bD2, bA1, bA1, bA1, bC2, bC2, bE2, bD2, bC2, bG1, bC2, bD2, bC2, bE2, bD2, bC2, bC2];
    const crocodile = [bD2, bBb1, bBb1, bF2, bEb2, bD2, bBb1, bBb1, bBb2, bA2, bG2, bG2, bG2, bA2, bBb2, bG2, bF2, bD2, bD2, bD2, bC2, bBb1, bG1, bG1, bD2, bC2, bBb1, bG1, bG1, bBb1, bC2, bD2, bE2, bD2, bC2, bBb1, bC2, bD2, bBb1, bC2, bF1, bF1, bD2, bBb1, bBb1, bF2, bEb2, bD2, bBb1, bBb1, bBb2, bA2, bG2, bG2, bG2, bA2, bBb2, bG2, bF2, bD2, bD2, bBb2, bA2, bG2, bBb2, bG2, bF2, bBb2, bA2, bG2, bBb2, bG2, bF2, bBb2, bA2, bG2, bA2, bBb2, bG2, bF2, bD2, bC2, bBb1, bD2, bC2, bBb1];
    const indiana = [bE1, bF1, bG1, bC2, bD1, bE1, bF1, bG1, bA1, bB1, bF2, bA1, bB1, bC2, bD2, bE2, bE1, bF1, bG1, bC2, bD2, bE2, bF2, bG1, bG1, bE2, bD2, bG1, bE2, bD2, bG1, bE2, bD2, bG1, bE2, bD2, bE1, bF1, bG1, bC2, bD1, bE1, bF1, bG1, bA1, bB1, bF2, bA1, bB1, bC2, bD2, bE2, bE1, bF1, bG1, bC2, bD2, bE2, bF2, bG1, bG1, bE2, bD2, bG1, bE2, bD2, bG1, bE2, bD2, bG1, bE2, bD2, bE1, bG1, bF1, bD1, bF1, bE1, bG1, bE2, bE1, bG1, bF1, bD1, bF1, bE1, bD1, bC1, bE1, bG1, bF1, bD1, bF1, bE1, bG1, bE2, bD2, bE2, bF2, bAs1, bA1, bAs1, bF2, bAs1, bA1, bAs1, bF2, bAs1, bE2, bE1, bF1, bG1, bC2, bD1, bE1, bF1, bG1, bA1, bB1, bF2, bA1, bB1, bC2, bD2, bE2, bE1, bF1, bG1, bC2, bD2, bE2, bF2, bG1, bG1, bE2, bD2, bC2, bE2, bD2, bC2, bE2, bD2, bC2, bF2, bE2, bD2, bC2];
    const hello = [bA1, bB1, bA1, bA1, bG1, bA1, bB1, bB1, bB1, bB1, bB1, bA1, bA1, bG1, bA1, bB1, bA1, bE1, bG1, bG1, bB1, bB1, bA1, bG1, bA1, bA1, bA1, bB1, bG1, bB1, bB1, bB1, bB1, bB1, bB1, bA1, bG1, bA1, bA1, bA1, bG1, bE1, bA1, bB1, bA1, bA1, bA1, bG1, bA1, bB1, bB1, bB1, bB1, bB1, bA1, bG1, bG1, bA1, bA1, bA1, bA1, bG1, bE1, bE2, bE2, bG2, bG2, bA2, bA2, bA2, bG2, bG2, bE2, bE2, bE2, bG2, bG2, bA2, bA2, bA2, bB2, bA2, bG2, bG2, bD3, bG2, bB2, bG2, bD2, bG2, bG2, bG2, bG2, bFs2, bE2, bD2, bD2, bD3, bG2, bB2, bG2, bD2, bG2, bG2, bFs2, bE2, bD2, bD2, bE2, bB1, bA1, bG1];
    const scientist = [bF1, bF1, bG1, bF1, bC2, bA1, bF1, bG1, bF1, bC2, bA1, bF1, bG1, bF1, bA1, bA1, bA1, bA1, bG1, bF1, bF1, bG1, bF1, bC2, bA1, bF1, bF1, bG1, bF1, bC2, bA1, bF1, bG1, bF1, bA1, bA1, bA1, bA1, bG1, bF1, bF2, bD2, bC2, bF2, bD2, bC2, bF2, bD2, bC2, bA1, bA1, bC2, bA1, bD2, bA1, bA1, bA1, bG1, bF1, bE1, bBb1, bBb1, bBb1, bBb1, bBb1, bBb1, bBb1, bA1, bF1];
    const centuries = [bE1, bFs1, bG1, bB1, bE1, bFs1, bG1, bB1, bE1, bB1, bA1, bG1, bA1, bG1, bA1, bG1, bE1, bE1, bG1, bFs1, bE1, bE1, bD1, bE1, bE1, bG1, bFs1, bE1, bE1, bE1, bE1, bE1, bE1, bB1, bB1, bD1, bE1, bB1, bB1, bD1, bE1, bB1, bB1, bG1, bFs1, bE1, bE1, bE1, bE1, bE1, bG1, bFs1, bE1, bE1, bE1, bE1, bE1, bE1, bB1, bB1, bD1, bE1, bB1, bB1, bD1, bE1, bB1, bB1, bB1, bA1, bG1, bA1, bE1, bE1, bB1, bA1, bG1, bA1, bE1, bE1, bB1, bB1, bD1, bE1, bB1, bB1, bD1, bE1, bB1, bB1, bB1, bA1, bG1, bA1, bG1, bG1, bE1, bB1, bA1, bG1, bA1, bG1, bG1, bE1, bB1, bA1, bG1, bA1, bG1, bG1, bE1, bG1, bFs1, bE1, bE1, bG1, bA1, bB1, bA1, bG1, bG1, bG1, bA1, bB1, bA1, bG1, bG1, bG1, bA1, bB1, bA1, bG1, bA1, bG1, bA1, bE1, bE2, bE1, bG1, bFs1, bE1, bE1, bD1, bE1, bE1, bG1, bFs1, bE1, bE1, bE1, bE1, bE1, bE1, bB1, bB1, bD1, bE1, bB1, bB1, bD1, bE1, bB1, bB1, bE1, bFs1, bG1, bB1, bE1, bFs1, bG1, bB1, bE1, bB1, bA1, bG1, bA1, bG1, bA1, bG1, bE2];
    const silence = [bD1, bD1, bF1, bF1, bA1, bA1, bG1, bC1, bC1, bC1, bE1, bE1, bG1, bG1, bF1, bF1, bF1, bA1, bA1, bC2, bC2, bD2, bD2, bC2, bF1, bF1, bA1, bA1, bC2, bD2, bD2, bC2, bF1, bF1, bD2, bD2, bD2, bE2, bF2, bF2, bE2, bD2, bC2, bD2, bC2, bA1, bF1, bF1, bF1, bC2, bE1, bF1, bD1];
    const loseYou = [bF2, bG2, bEb2, bBb1, bBb1, bBb1, bEb2, bEb2, bC2, bF2, bG2, bEb2, bBb1, bBb1, bBb1, bEb2, bEb2, bC2, bF2, bF2, bF2, bF2, bF2, bG2, bF2, bF2, bF2, bF2, bF2, bG2, bF2, bG2, bF2, bF2, bG2, bEb2, bBb1, bBb1, bBb1, bEb2, bEb2, bC2, bF2, bG2, bEb2, bBb1, bBb1, bBb1, bEb2, bEb2, bC2, bF2, bF2, bF2, bF2, bF2, bG2, bF2, bF2, bF2, bF2, bF2, bG2, bG2, bG2, bF2, bEb2, bF2, bF2, bG2, bF2, bEb2, bF2, bF2, bF2, bF2, bAb2, bG2, bEb2, bF2, bF2, bEb2, bG2, bG2, bF2, bEb2, bF2, bF2, bG2, bF2, bEb2, bF2, bF2, bF2, bF2, bAb2, bAb2, bEb2, bF2, bF2, bEb2, bG2, bG2, bG2, bF2, bF2, bF2, bBb1, bBb1, bF2, bF2, bF2, bF2, bF2, bF2, bAb2, bG2, bEb2, bF2, bF2, bEb2, bG2, bG2, bG2, bF2, bF2, bF2, bBb1, bBb1, bF2, bF2, bF2, bF2, bF2, bF2, bAb2, bG2, bEb2, bF2, bF2, bEb2];

    bassSongNames = [
        'Under the Sea',
        'The Bare Necessities',
        'Jurassic Park',
        'I\'ll Make a Man Out of You',
        'Linus and Lucy',
        'American Pie',
        'We Don\'t Talk About Bruno',
        'To Grandmother\'s House',
        'Pirates of the Caribbean',
        'Fireflies - Owl City',
        'Never Smile At a Crocodile',
        'Indiana Jones Theme',
        'Hello - Adele',
        'The Scientist',
        'Centuries',
        'The Sound of Silence',
        'Lose You to Love Me',
    ]

    bassSongPrices = [
        2500, // under the sea
        2500, // bare necessities
        1700, // jurassic park
        900, // ill make a man out of you
        5500, // linus and lucy
        3500, // american pie
        2500, // bruno
        700, // grandmothers house
        1250, // pirates
        2000, // fireflies
        1000, // crocodile
        2750, // indiana jones
        1500, // hello
        1000, // scientist
        3250, // centuries
        800, // silence
        4000, // lose you to love me
    ]

    bassDifficulty = [
        'Medium', // under the sea
        'Medium', // bare necessities
        'Hard', // jurassic park
        'Medium', // ill make a man out of you
        'Hard', // linus and lucy
        'Medium', // american pie
        'Hard', // bruno
        'Easy', // grandmother
        'Medium', // pirates
        'Easy', // fireflies
        'Hard', // crocodile
        'Hard', // indiana jones
        'Easy', // hello
        'Easy', // scientist
        'Medium', // centuries
        'Easy', // silence
        'Hard', // lose you to love me

    ]

    bassImages = [
        "https://images.unsplash.com/photo-1471927866530-2b87d315d8b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
        "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
        'https://images.pexels.com/photos/1319591/pexels-photo-1319591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/5971314/pexels-photo-5971314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/10565573/pexels-photo-10565573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2955816/pexels-photo-2955816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/11594055/pexels-photo-11594055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/37730/sunset-boat-sea-ship-37730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/10911755/pexels-photo-10911755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3661224/pexels-photo-3661224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3900437/pexels-photo-3900437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/4439454/pexels-photo-4439454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3825468/pexels-photo-3825468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/54539/pexels-photo-54539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3731878/pexels-photo-3731878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    ]

    bassDetails = [
        'Under the Sea was written by Alan Menken for the 1989 Disney film, The Little Mermaid. In the movie, it is sung by Sebastian, the Jamaican crab, as he attempts to convince Ariel to stay where she belongs - under the sea.',
        'The Bare Necessities was written by Terry Gilkyson for the 1967 Disney film, The Jungle Book. It is an exciting jazz song sung by the bear Baloo, who is teaching young Mowgli how to survive in the wild.',
        'The theme for Jurassic Park was written by John Williams for the 1993 film, Jurassic Park. It made it to position 28 on the US Billboard music charts in 1993.',
        'I\'ll Make a Man Out Of You was written by Donny Osmond for the 1998 animated Disney film, Mulan.',
        'Linus and Lucy was written by Vince Guaraldi in 1964 for Lee Mendelson, the producer of the Peanuts films. While this jazzy tune is typically heard around Christmas time, it is an all-year favorite.',
        'American Pie, by Don McLean, was the number one US hit for four weeks in 1972, just after being released in October 1971.',
        'We Don\'t Talk About Bruno was written for the 2021 Disney Animated film, Encanto, by Lin-Manuel Miranda. It peaked at number 1 on four billboards, including the global billboard, a new record for Disney songs.',
        'Over the River and Through the Wood (To Grandmother\'s House) is a Thanksgiving Day song that was originally about a boy going to his grandfather\'s house for Thanksgiving.',
        'He\'s a Pirate was written by Klaus Badelt and Hans Zimmer for Disney\'s Pirates of the Caribbean movie series. There are also famous remixes of it, such as the one by Tiesto.',
        'Fireflies was written by Owl City in 2009. Owl City is a band created by Adam Young and his song reached the top of many charts in quite a few countries.',
        'Never Smile at a Crocodile was written in 1939 for the 1953 animated film, Peter Pan. It appears in the film without lyrics, but is best known with the lyrics.',
        'The Raider\'s March is better known as the Indiana Jones theme song, written by John Williams for the 1981 film, Raiders of the Lost Ark.',
        'Hello, by Adele, topped the records charts in 36 countries. It took six months to complete the recording and production process for this song, much longer than usual.',
        'The Scientist, by Coldplay, is a piano ballad telling the story of a man\'s desire to love.',
        'Centuries was released in 2014 by Fall Out Boy in an attempt to write a "David and Goliath" style song.',
        'The musical duo Simon and Garfunkel released The Sound of Silence in 1965, almost a year after they began writing it. It originally did not release well due to the duo\'s breakup, but soon grew in popularity so that it reached number one on many charts around the world.',
        'Lose You to Love Me was written and released in 2019 by Selena Gomez. It was her first number one song on the Billboard Hot 100 charts.'
    ];

    const bassSongs = [underSea, bareNecessities, jurassic, mulan, linus, pie, bruno, grandmother, pirates, fireflies, crocodile, indiana, hello, scientist, centuries, silence, loseYou];
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