const connection = require("./connection");

function getInfo(db = connection) {
  return db("howToSeed")
    .select()
    .orderBy("id");
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
  getInfo
  // getFound,
  // createFound,
  // createLost,
};
