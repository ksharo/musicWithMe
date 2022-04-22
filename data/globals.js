const globals = {};
// globals.user = undefined; // info about the user
globals.user = {
    _id: '624fa1a602009b3fece0e4ee', // user id
    coins: 50, // number of coins the user has
    username: 'ksharo',
    purchased: ["624fa1a602009b3fece0e4f2",
        "624fa1a602009b3fece0e4f3",
        "624fa1a602009b3fece0e4f4",
        "624fa1a602009b3fece0e4f5",
        "624fa1a602009b3fece0e4f6",
        "624fa1a602009b3fece0e4f7"
    ]
}
globals.btLevels = 2; // basic treble levels completed
globals.bbLevels = 0; // basic bass levels completed
globals.atLevels = 0; // advanced treble levels completed
globals.abLevels = 0; // advanced bass levels completed


module.exports = {
    globals
}