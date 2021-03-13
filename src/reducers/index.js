import { combineReducers } from "redux";
import users from "./users";
import pupuk from "./pupuk";
import lahan from "./lahan";
import panen from "./panen";
import master from "./master";
import admin from "./admin"
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  admin,
  users,
  pupuk,
  lahan,
  panen,
  master,
  form: formReducer,
});
