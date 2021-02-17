import React from "react";
import {
  GET_PUPUK_LIST,
  GET_PUPUK_DETAIL,
  POST_PUPUK_CREATE,
  PUT_PUPUK_UPDATE,
} from "../actions/pupukAction";

let initialState = {
  getPupukList: false,
  errorPupukList: false,
  getPupukDetail: false,
  errorPupukDetail: false,
  getResponseDataPupuk: false,
  errorResponseDataPupuk: false,
  title: "pupuk",
};

const pupuk = (state = initialState, action) => {
  switch (action.type) {
    case GET_PUPUK_LIST:
      return {
        ...state,
        getPupukList: action.payload.data,
        errorPupukList: action.payload.errorMessage,
      };
    case GET_PUPUK_DETAIL:
      return {
        ...state,
        getPupukDetail: action.payload.data,
        errorPupukDetail: action.payload.errorMessage,
      };
    case POST_PUPUK_CREATE:
      return {
        ...state,
        getResponseDataPupuk: action.payload.data,
        errorResponseDataPupuk: action.payload.errorMessage,
      };
    case PUT_PUPUK_UPDATE:
      return {
        ...state,
        getResponseDataPupuk: action.payload.data,
        errorResponseDataPupuk: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default pupuk;
