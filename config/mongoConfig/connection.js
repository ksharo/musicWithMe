const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;

let _database = undefined;

module.exports = {

    connectToServer: async function() {
        if (_database) {
            return _database;
        } else {
            const client = new MongoClient(uri);
            await client.connect();
            const dbse = client.db('MusicWithMe');
            _database = dbse;
            return dbse;
        }
    },

    getDb: function() {
        return _database;
    }
};