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

const create = async function create(username, password) {
    const myAccounts = await accountsDB();
    const insert = await myAccounts.insertOne({ username: username, password: password, hiscores: [], lessonsCompleted: [], purchasedSongs: [], coins: 50 });
    if (!insert.acknowledged || !insert.insertedId) {
        throw "Error: Could not add account!";
    }
    return getUser(insert.insertedId.toString());
}

const buySong = async function buySong(userId, songId) {
    const myAccounts = await accountsDB();
    const user = await getUser(userId);
    const userSongs = [...user.purchasedSongs];
    let userCoins = user.coins;
    userSongs.push(songId);
    const song = songFunctions.getSong(songId);
    userCoins -= song.price;

    const updated = await myAccounts.updateOne({
        _id: ObjectId(userId)
    }, {
        $set: {
            purchasedSongs: userSongs,
            coins: userCoins
        }
    })

    return updated;
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
module.exports = {
    create,
    getAndValidate,
    buySong
};