import React from "react";
import {
  GET_USERS_LIST,
  GET_USERS_DETAIL,
  POST_USERS_CREATE,
  PUT_USERS_UPDATE,
} from "../actions/userAction";

let initialState = {
  getUsersList: false,
  errorUsersList: false,
  getUsersDetail: false,
  errorUsersDetail: false,
  getResponseDataUser: false,
  errorResponseDataUser: false,
  title: "users",
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage,
      };
      break;
    case GET_USERS_DETAIL:
      return {
        ...state,
        getUsersDetail: action.payload.data,
        errorUsersDetail: action.payload.errorMessage,
      };
      break;
    case POST_USERS_CREATE:
      return {
        ...state,
        getResponseDataUser: action.payload.data,
        errorResponseDataUser: action.payload.errorMessage,
      };
    case PUT_USERS_UPDATE:
      return {
        ...state,
        getResponseDataUser: action.payload.data,
        errorResponseDataUser: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default users;
