import { combineReducers } from "redux";
import users from "./users";
import pupuk from "./pupuk";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  users,
  pupuk,
  form: formReducer,
});
