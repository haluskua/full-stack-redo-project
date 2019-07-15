import { combineReducers } from "redux";

import auth from "./auth";

import information from "./information";

export default combineReducers({
  auth,
  information
});
