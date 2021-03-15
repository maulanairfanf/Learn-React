import axios from "axios";
import { getToken } from "../Utils/Common";
export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";
export const POST_USERS_CREATE = "POST_USERS_CREATE";
export const PUT_USERS_UPDATE = "PUT_USERS_UPDATE";
export const PUT_USERS_UPDATE_IMAGE = "PUT_USERS_UPDATE_IMAGE";
export const GET_USER_SORT = "GET_USER_SORT";

const token = getToken();

export const getUsersList = () => {
  return async (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/profil?page=1&limit_page=5",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
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

export const getUserSort = (
  id_provinsi,
  id_kabupaten,
  id_kecamtan,
  id_desa
) => {
  return async (dispatch) => {
    axios({
      method: "get",
      url: `http://localhost:8000/profil?id_provinsi=${id_provinsi}&id_kabupaten=${id_kabupaten}&id_kecamatan=${id_kecamtan}&id_desa=${id_desa}`,
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_USER_SORT,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getUsersDetail = (id) => {
  return async (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/profil/" + id,
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
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

export const postUserCreate = (data) => {
  return async (dispatch) => {
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
          payload: { data: response.data.data, errorMessage: false },
        });
        dispatch(getUsersList());
      })
      .catch((err) => {
        dispatch({
          type: POST_USERS_CREATE,
          payload: { data: false, errorMessage: err.errorMessage },
        });
      });
  };
};

export const putUsersUpdate = (data) => {
  console.log(data);
  return async (dispatch) => {
    axios({
      method: "put",
      url: "http://localhost:8000/profil/",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then(function (response) {
        dispatch({
          type: PUT_USERS_UPDATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        console.log(error);
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

export const putUsersUpdateImage = (data) => {
  return async (dispatch) => {
    axios({
      method: "put",
      url: "http://localhost:8000/profil/image",
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
          type: PUT_USERS_UPDATE_IMAGE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: PUT_USERS_UPDATE_IMAGE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
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
        dispatch(getUsersList());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteDataUser = () => {
  return async (dispatch) => {
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

export const delleteDataPict = () => {
  return (dispatch) => {
    dispatch({
      type: PUT_USERS_UPDATE_IMAGE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
