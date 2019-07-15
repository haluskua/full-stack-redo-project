const connection = require('./connection')

function getLost(db = connection) {
    return db('howToSeed').select().orderBy('id')
}

// function getFound(db = connection) {
//     return db('found').select().orderBy('id')
// }

// function createFound (photo, db = connection) {
//     return db('found').insert(photo)
//   }

// function createLost (photo, db = connection) {
//     return db('lost').insert(photo)
// }

module.exports = {
    getLost,
    // getFound,
    // createFound,
    // createLost,
}