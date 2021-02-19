import {
  GET_PANEN_LIST,
  GET_PANEN_DETAIL,
  POST_PANEN_CREATE,
  PUT_PANEN_UPDATE,
} from "../actions/panenAction";

let initialState = {
  getPanenList: false,
  errorPanenList: false,
  getPanenDetail: false,
  errorPanenDetail: false,
  getResponseDataPanen: false,
  errorResponseDataPanen: false,
  title: "panen",
};

const panen = (state = initialState, action) => {
  switch (action.type) {
    case GET_PANEN_LIST:
      return {
        ...state,
        getPanenList: action.payload.data,
        errorPanenList: action.payload.errorMessage,
      };
    case GET_PANEN_DETAIL:
      return {
        ...state,
        getPanenDetail: action.payload.data,
        errorPanenDetail: action.payload.errorMessage,
      };
    case POST_PANEN_CREATE:
      return {
        ...state,
        getResponseDataPanen: action.payload.data,
        errorResponseDataPanen: action.payload.errorMessage,
      };
    case PUT_PANEN_UPDATE:
      return {
        ...state,
        getResponseDataPanen: action.payload.data,
        errorResponseDataPanen: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default panen;
