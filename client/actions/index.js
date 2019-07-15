import { getInfo } from "../apis/information";

export function fetchLost() {
  return dispatch => {
    getInfo().then(information => {
      dispatch(setInformation(information));
    });
  };
}

export function setInformation(information) {
  return {
    type: "SET_INFO",
    animals
  };
}
