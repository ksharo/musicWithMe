const { ObjectId } = require('mongodb');
const mongoCollections = require('../config/mongoCollections');
const accountsDB = mongoCollections.accounts;
const songFunctions = require('./songFunctions');

async function getUser(userId) {
    const accountCollection = await accountsDB();
    const userObjectId = ObjectId(userId);
    const queryParameters = {
        _id: userObjectId,
    };

    const user = await accountCollection.findOne(queryParameters);

    return user;
}

const create = async function create(username, password, levels = [], highScores = {}, coins = 200) {
    const myAccounts = await accountsDB();
    /* check if there is already a user with username in the database */
    let hasUsername = await myAccounts.findOne({ username: username.toLowerCase() });
    if (hasUsername != undefined && hasUsername != null) throw `Error: Username ${username} already exists.`;
    const insert = await myAccounts.insertOne({ username: username.toLowerCase(), password: password, hiscores: highScores, lessonsCompleted: levels, purchasedSongs: [], coins: coins });
    if (!insert.acknowledged || !insert.insertedId) {
        throw "Error: Could not add account!";
    }
    return getUser(insert.insertedId.toString());
}

async function updateUser(userId, updatedConfig) {
    const myAccounts = await accountsDB();
    const updated = await myAccounts.updateOne({
        _id: ObjectId(userId)
    }, {
        $set: updatedConfig
    });
    let user = null;
    if (updated.matchedCount == 1) {
        user = await this.getUser(userId);
    }
    return user;

}

const buySong = async function buySong(userId, songId) {
    const myAccounts = await accountsDB();
    const user = await getUser(userId);
    const userSongs = [...user.purchasedSongs];
    let userCoins = Number(user.coins);
    userSongs.push(ObjectId(songId));
    const song = await songFunctions.getSong(songId);
    userCoins -= Number(song.price);

    const updated = await myAccounts.updateOne({
        _id: ObjectId(userId)
    }, {
        $set: {
            purchasedSongs: userSongs,
            coins: userCoins
        }
    })

    return { coins: userCoins };
}

const getAndValidate = async function getAndValidate(username, password) {
    const myAccounts = await accountsDB();
    let accounts = await myAccounts.find({ username: username }).toArray();
    if (!accounts) {
        throw "Error: Could not find account!";
    }
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i]['password'] === password) {
            return accounts[i];
        }
    }
}

async function getPurchased(uID) {
    const user = await getUser(uID);
    const toReturn = [];
    if (user != undefined) {
        const songs = user.purchasedSongs;
        if (songs != undefined) {
            for (let x of songs) {
                let song = await songFunctions.getSong(x)
                toReturn.push(song);
            }
        }
    }
    return toReturn;
}

module.exports = {
    create,
    getAndValidate,
    buySong,
    getPurchased,
    updateUser,
    getUser
};