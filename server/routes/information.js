const express = require("express");
const router = express.Router();

const db = require("../db/information");

//LOST ROUTES

router.get("/howToSeed", (req, res) => {
  db.getInfo().then(Information => {
    res.json(Information);
  });
});

// router.get('/lostDog', (req, res) => {
//     db.getLost()
//         .then(lostAnimals => {
//         let lostDogAnimals = lostAnimals.filter(animal => animal.species === 'dog')
//         res.json(lostDogAnimals)
//     })
// })

// router.get('/lostCat', (req, res) => {
//     db.getLost()
//         .then(lostAnimals => {
//         let lostCatAnimals = lostAnimals.filter(animal => animal.species === 'cat')
//         res.json(lostCatAnimals)
//     })
// })

// //FOUDN ROUTES

// router.get('/found', (req, res) => {
//     db.getFound()
//         .then(foundAnimals => {
//         res.json(foundAnimals)
//     })
// })

// //Post found input to database
// router.post('/addfound', (req, res) => {
//     const add = {
//       species: req.body.species,
//       contact: req.body.contact,
//       photo: req.body.photo,
//     }
//     db.createFound(add).then(foundId => {
//       res.json({id: foundId.first()})
//     })
//   })

//   //Post lost input to database
// router.post('/addlost', (req, res) => {
//     const addLost = {
//       name: req.body.name,
//       species: req.body.species,
//       owner: req.body.owner,
//       photo: req.body.photo,
//     }
//     db.createLost(addLost).then(lostId => {
//       res.json({id: lostId.first()})
//     })
//   })

// router.get('/foundDog', (req, res) => {
//     db.getFound()
//         .then(foundAnimals => {
//         let foundDogAnimals = foundAnimals.filter(animal => animal.species === 'dog')
//         res.json(foundDogAnimals)
//     })
// })

// router.get('/foundCat', (req, res) => {
//     db.getFound()
//         .then(foundAnimals => {
//         let foundCatAnimals = foundAnimals.filter(animal => animal.species === 'cat')
//         res.json(foundCatAnimals)
//     })
// })

module.exports = router;
