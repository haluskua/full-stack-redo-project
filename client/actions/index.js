import { getFound, getLost , getLostDog, getLostCat, getFoundDog, getFoundCat} from "../apis/animals"

export function fetchFound() {
    return dispatch => {
        getFound()
        .then(animals => {
            dispatch(setAnimals(animals))
        })
    }
}

export function fetchLost() {
    return dispatch => {
        getLost()
        .then(animals => {
            dispatch(setAnimals(animals))
        })
    }
}



// FETCH LOST DOG
export function fetchLostDog() {
    return dispatch => {
        getLostDog()
        .then(animals => {
            dispatch(setAnimals(animals))
        })
    }
}

// FETCH LOST CAT

export function fetchLostCat() {
    return dispatch => {
        getLostCat()
        .then(animals => {
            dispatch(setAnimals(animals))
        })
    }
}

// FETCH FOUND DOG

export function fetchFoundDog() {
    return dispatch => {
        getFoundDog()
        .then(animals => {
            dispatch(setAnimals(animals))
        })
    }
}

// FETCH FOUND CAT

export function fetchFoundCat() {
    return dispatch => {
        getFoundCat()
        .then(animals => {
            dispatch(setAnimals(animals))
        })
    }
}

export function setAnimals(animals) {
    return {
        type: 'SET_ANIMALS',
        animals
    }
}
