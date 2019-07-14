import request from 'superagent'


// GET FOUND

export function getFound() {
    return request
        .get('/api/animals/found')
        .then(res => res.body)
}

export function getFoundDog() {
    return request
        .get('/api/animals/foundDog')
        .then(res => res.body)
}

export function getFoundCat() {
    return request
        .get('/api/animals/foundCat')
        .then(res => res.body)
}


// GET LOST

export function getLost() {
    return request
        .get('/api/animals/lost')
        .then(res => res.body)
}

export function sendDetails(species, contact, photo) {
    request
      .post('/api/animals/addfound')
      .send({
        species: species,
        contact: contact,
        photo: photo,
      })
      .end((err, res) => {  
      })
  }

  export function sendLostDetails(name, species, owner, photo) {
    request
      .post('/api/animals/addlost')
      .send({
        name: name,
        species: species,
        owner: owner,
        photo: photo,
      })
      .end((err, res) => {
      })
  }

export function getLostDog() {
    return request
        .get('/api/animals/lostDog')
        .then(res => res.body)
}

export function getLostCat() {
    return request
        .get('/api/animals/lostCat')
        .then(res => res.body)
}

