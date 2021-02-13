import axios from "axios";
import { getToken } from "../Utils/Common";
export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";
export const POST_USERS_CREATE = "POST_USERS_CREATE";
export const PUT_USERS_UPDATE = "PUT_USERS_UPDATE";
export const DUMY_LIST = "DUMY_LIST";

const token = getToken();
console.log(token);

// const BASE_URL_USERS = "http://localhost:8000/profil";

// var configUsers = {
//   method: "get",
//   url: "http://localhost:8000/profil",
//   headers: {
//     Authorization: "Gradien " + token,
//     "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
//   },
// };

export const getUsersList = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/profil",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
    })
      .then(function (response) {
        dispatch({
          type: GET_USERS_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// export const getUsersList = () => {
//   return (dispatch) => {
//     axios
//       .get(
//         "http://my-json-server.typicode.com/maulanairfanf/reactjs-redux/users"
//       )
//       .then((response) => {
//         console.log(response);
//         console.log(response.data[0].nama);
//         dispatch({
//           type: GET_USERS_LIST,
//           payload: { data: response.data, errorMessage: false },
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: GET_USERS_LIST,
//           payload: { data: false, errorMessage: err.errorMessage },
//         });
//       });
//   };
// };

// export const getUsersDetail = (id) => {
//   return (dispatch) => {
//     axios
//       .get(
//         "http://my-json-server.typicode.com/maulanairfanf/reactjs-redux/users/" +
//           id
//       )
//       .then((response) => {
//         console.log(response.data);
//         dispatch({
//           type: GET_USERS_DETAIL,
//           payload: { data: response.data, errorMessage: false },
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: GET_USERS_DETAIL,
//           payload: { data: false, errorMessage: err.errorMessage },
//         });
//       });
//   };
// };
export const getUsersDetail = (id) => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/profil/" + id,
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
    })
      .then(function (response) {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// export const postUserCreate = (data) => {
//   return (dispatch) => {
//     axios
//       .post(
//         "http://my-json-server.typicode.com/maulanairfanf/reactjs-redux/users",
//         data
//       )
//       .then((response) => {
//         console.log(response);
//         dispatch({
//           type: POST_USERS_CREATE,
//           payload: { data: response.data, errorMessage: false },
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: POST_USERS_CREATE,
//           payload: { data: false, errorMessage: err.errorMessage },
//         });
//       });
//   };
// };

export const postUserCreate = (data) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "http://localhost:8000/profil/",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
      data: data,
    })
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

// export const putUsersUpdate = (data, id) => {
//   return (dispatch) => {
//     axios
//       .put(
//         "http://my-json-server.typicode.com/maulanairfanf/reactjs-redux/users/" +
//           id,
//         data
//       )
//       .then(function (response) {
//         console.log(response);

//         dispatch({
//           type: PUT_USERS_UPDATE,
//           payload: {
//             data: response.data,
//             errorMessage: false,
//           },
//         });
//       })
//       .catch(function (error) {
//         dispatch({
//           type: PUT_USERS_UPDATE,
//           payload: {
//             data: false,
//             errorMessage: error.message,
//           },
//         });
//       });
//   };
// };

export const putUsersUpdate = (data, id) => {
  return (dispatch) => {
    axios({
      method: "put",
      url: "http://localhost:8000/profil/" + id,
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
      data: data,
    })
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
    axios({
      method: "delete",
      url: "http://localhost:8000/profil/" + id,
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
