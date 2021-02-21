import { combineReducers } from "redux";
import users from "./users";
import pupuk from "./pupuk";
import lahan from "./lahan";
import panen from "./panen";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  users,
  pupuk,
  lahan,
  panen,
  form: formReducer,
});
