import axios from "axios";
import { getToken } from "../Utils/Common";
export const GET_LAHAN_LIST = "GET_LAHAN_LIST";
export const GET_LAHAN_DETAIL = "GET_LAHAN_DETAIL";
export const POST_LAHAN_CREATE = "POST_LAHAN_CREATE";
export const PUT_LAHAN_UPDATE = "PUT_LAHAN_UPDATE";

const token = getToken();

export const getLahanList = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/lahan",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_LAHAN_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getLahanDetail = (id) => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/lahan/" + id,
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_LAHAN_DETAIL,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const postLahanCreate = (data) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "http://localhost:8000/lahan",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
      data: data,
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: POST_LAHAN_CREATE,
          payload: { data: response.data.data, errorMessage: false },
        });
        dispatch(getLahanList());
      })
      .catch((err) => {
        dispatch({
          type: POST_LAHAN_CREATE,
          payload: { data: false, errorMessage: err.errorMessage },
        });
      });
  };
};

export const putLahanUpdate = (data) => {
  return (dispatch) => {
    axios({
      method: "put",
      url: "http://localhost:8000/lahan",
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
          type: PUT_LAHAN_UPDATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: PUT_LAHAN_UPDATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteLahan = (id) => {
  return (dispatch) => {
    axios({
      method: "delete",
      url: "http://localhost:8000/lahan/" + id,
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
    })
      .then(function (response) {
        console.log(response);
        dispatch(getLahanList());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteDataLahan = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LAHAN_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: POST_LAHAN_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
