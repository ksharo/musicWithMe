const mongoCollections = require('../config/mongoCollections');
const songsDB = mongoCollections.songs;
const { ObjectId } = require("mongodb");

async function getSong(songId) {
    const songsCollection = await songsDB();
    const songObjectId = ObjectId(songId);
    const queryParameters = {
        _id: songObjectId,
    };

    const song = await songsCollection.findOne(queryParameters);

    return song;
}

const create = async function create(name, notes, indices, level, price, image, details, clef) {
    const noteList = [];
    for (let x of indices) {
        noteList.push(notes[x]);
    }
    const mySongs = await songsDB();
    const insert = await mySongs.insertOne({ name: name, notes: noteList, level: level, price: price, image: image, details: details, clef: clef });
    if (!insert.acknowledged || !insert.insertedId) {
        throw "Error: Could not add song!";
    }
    const insertedSong = await getSong(insert.insertedId);
    return insertedSong;
}

async function getAll() {
    const mySongs = await songsDB();
    const allSongs = await mySongs.find();
    return allSongs.toArray();
}

async function getTreble() {
    const mySongs = await songsDB();
    const trebleSongs = await mySongs.find({ 'clef': 'treble' });
    return trebleSongs.toArray();
}

async function getBass() {
    const mySongs = await songsDB();
    const bassSongs = await mySongs.find({ 'clef': 'bass' });
    return bassSongs.toArray();
}

module.exports = {
    create,
    getSong,
    getAll,
    getTreble,
    getBass
};