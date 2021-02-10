import axios from "axios";
export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";
export const POST_USERS_CREATE = "POST_USERS_CREATE";
export const PUT_USERS_UPDATE = "PUT_USERS_UPDATE";

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

export const postUserCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        "http://my-json-server.typicode.com/maulanairfanf/reactjs-redux/users",
        data
      )
      .then((response) => {
        console.log(response);
        dispatch({
          type: POST_USERS_CREATE,
          payload: { data: response.data, errorMessage: false },
        });
      })
      .catch((err) => {
        dispatch({
          type: POST_USERS_CREATE,
          payload: { data: false, errorMessage: err.errorMessage },
        });
      });
  };
};

export const putUsersUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
        "http://my-json-server.typicode.com/maulanairfanf/reactjs-redux/users/" +
          id,
        data
      )
      .then(function (response) {
        console.log(response);

        dispatch({
          type: PUT_USERS_UPDATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_USERS_UPDATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteDataUser = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USERS_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: POST_USERS_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(
        "http://my-json-server.typicode.com/maulanairfanf/reactjs-redux/users/" +
          id
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
