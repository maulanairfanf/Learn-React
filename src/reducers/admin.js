import { POST_REGISTER } from "../actions/adminAction";

let initialState = {
  postRegister: false,
  errorRegister: false,
  title: "register",
};

const lahan = (state = initialState, action) => {
  switch (action.type) {
    case POST_REGISTER:
      return {
        ...state,
        postRegister: action.payload.data,
        errorRegister: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default lahan;
