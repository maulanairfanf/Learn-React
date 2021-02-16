import axios from "axios";
import { getToken } from "../Utils/Common";
export const GET_PUPUK_LIST = "GET_PUPUK_LIST";
export const GET_PUPUK_DETAIL = "GET_PUPUK_DETAIL";
export const POST_PUPUK_CREATE = "POST_PUPUK_CREATE";
export const PUT_PUPUK_UPDATE = "PUT_PUPUK_UPDATE";

const token = getToken();

export const getPupukList = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/jadwal-pupuk",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_PUPUK_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getPupukDetail = (id) => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/jadwal-pupuk/" + id,
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_PUPUK_DETAIL,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const postPupukCreate = (data) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "http://localhost:8000/jadwal-pupuk",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
      data: data,
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: POST_PUPUK_CREATE,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch((err) => {
        dispatch({
          type: POST_PUPUK_CREATE,
          payload: { data: false, errorMessage: err.errorMessage },
        });
      });
  };
};

export const putPupukUpdate = (data) => {

  return (dispatch) => {
    axios({
      method: "put",
      url: "http://localhost:8000/jadwal-pupuk",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((response) => {
        console.log(response);
        dispatch({
          type: PUT_PUPUK_UPDATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: PUT_PUPUK_UPDATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deletePupuk = (id) => {
  return (dispatch) => {
    axios({
      method: "delete",
      url: "http://localhost:8000/jadwal-pupuk/" + id,
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
    })
      .then(function (response) {
        console.log(response);
        dispatch(getPupukList());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteDataPupuk = () => {
  return (dispatch) => {
    dispatch({
      type: GET_PUPUK_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: POST_PUPUK_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
