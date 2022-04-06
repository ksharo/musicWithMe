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


let trebleSongData = [
    {
        name: "Amazing Grace",
        price: 50,
        picture: "https://images.unsplash.com/photo-1490682143684-14369e18dce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
    },
    {
        name: 'It\'s Raining, It\'s Pouring',
        price: 15,
        picture: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=8",
    },
    {
        name: 'Happy Birthday',
        price: 30,
        picture: "https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
    },
    /*
    {
        name: ,
        price: ,
        picture: ,
    },
    */
]

let bassSongData = [
    {
        name: 'Under the Sea',
        price: 500,
        picture: "https://images.unsplash.com/photo-1471927866530-2b87d315d8b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
    },
    {
        name: 'Bear Necessities',
        price: 50,
        picture: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=8",
    },
     /*
    {
        name: ,
        price: ,
        picture: ,
    },
    */
]

bassSongNames = [
    'Under the Sea',
    'Bear Necessities'
]

bassSongPrices = [
    50,
    50
]

// trebleSongData = [];

// for (let x in trebleSongNames) {
//     trebleSongData.push({
//         name: trebleSongNames[x],
//         price: trebleSongPrices[x]
//     });
// }

// bassSongData = [];
// for (let x in bassSongNames) {
//     bassSongData.push({
//         name: bassSongNames[x],
//         price: bassSongPrices[x]
//     })
// }

module.exports = {
    trebleSongData,
    bassSongData
}