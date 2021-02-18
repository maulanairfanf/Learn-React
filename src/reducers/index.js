import { combineReducers } from "redux";
import users from "./users";
import pupuk from "./pupuk";
import lahan from "./lahan";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  users,
  pupuk,
  lahan,
  form: formReducer,
});
