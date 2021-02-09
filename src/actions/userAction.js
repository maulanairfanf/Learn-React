import axios from "axios";
export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";
export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get(
        "http://my-json-server.typicode.com/maulanairfanf/reactjs-redux/users"
      )
      .then((response) => {
        dispatch({
          type: GET_USERS_LIST,
          payload: { data: response.data, errorMessage: false },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_USERS_LIST,
          payload: { data: false, errorMessage: err.errorMessage },
        });
      });
  };
};

export const getUsersDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "http://my-json-server.typicode.com/maulanairfanf/reactjs-redux/users/" +
          id
      )
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_USERS_DETAIL,
          payload: { data: response.data, errorMessage: false },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: { data: false, errorMessage: err.errorMessage },
        });
      });
  };
};
