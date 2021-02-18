import {
  GET_LAHAN_LIST,
  GET_LAHAN_DETAIL,
  POST_LAHAN_CREATE,
  PUT_LAHAN_UPDATE,
} from "../actions/lahanAction";

let initialState = {
  getLahanList: false,
  errorPupukList: false,
  getLahanDetail: false,
  errorPupukDetail: false,
  getResponseDataLahan: false,
  errorResponseDataLahan: false,
  title: "lahan",
};

const lahan = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAHAN_LIST:
      return {
        ...state,
        getLahanList: action.payload.data,
        errorPupukList: action.payload.errorMessage,
      };
    case GET_LAHAN_DETAIL:
      return {
        ...state,
        getLahanDetail: action.payload.data,
        errorLahanDetail: action.payload.errorMessage,
      };
    case POST_LAHAN_CREATE:
      return {
        ...state,
        getResponseDataLahan: action.payload.data,
        errorResponseDataLahan: action.payload.errorMessage,
      };
    case PUT_LAHAN_UPDATE:
      return {
        ...state,
        getResponseDataLahan: action.payload.data,
        errorResponseDataLahan: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default lahan;
