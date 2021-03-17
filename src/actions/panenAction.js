import axios from "axios";
import { getToken } from "../Utils/Common";
import swal from "sweetalert";

export const GET_PANEN_LIST = "GET_PANEN_LIST";
export const GET_PANEN_DETAIL = "GET_PANEN_DETAIL";
export const POST_PANEN_CREATE = "POST_PANEN_CREATE";
export const PUT_PANEN_UPDATE = "PUT_PANEN_UPDATE";

const token = getToken();

export const getPanenList = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/panen",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_PANEN_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getPanenDetail = (id) => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/panen/" + id,
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_PANEN_DETAIL,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const postPanenCreate = (data) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "http://localhost:8000/panen",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
      data: data,
    })
      .then(function (response) {
        swal({
          title: "Panen berhasil ditambahkan !",
          icon: "success",
          button: "Oke",
        });
        console.log(response.data.data);
        dispatch({
          type: POST_PANEN_CREATE,
          payload: { data: response.data.data, errorMessage: false },
        });
        dispatch(getPanenList());
      })
      .catch((err) => {
        swal({
          title: "Panen gagal ditambahkan !",
          icon: "error",
          button: "Oke",
        });
        dispatch({
          type: POST_PANEN_CREATE,
          payload: { data: false, errorMessage: err.errorMessage },
        });
      });
  };
};

export const putPanenUpdate = (data) => {
  return (dispatch) => {
    axios({
      method: "put",
      url: "http://localhost:8000/panen",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((response) => {
        console.log(response);
        swal({
          title: "Panen berhasil diperbarui !",
          icon: "success",
          button: "Oke",
        });
        dispatch({
          type: PUT_PANEN_UPDATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        swal({
          title: "Panen gagal diperbarui !",
          icon: "error",
          button: "Oke",
        });
        dispatch({
          type: PUT_PANEN_UPDATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deletePanen = (id) => {
  return (dispatch) => {
    axios({
      method: "delete",
      url: "http://localhost:8000/panen/" + id,
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
    })
      .then(function (response) {
        console.log(response);
        dispatch(getPanenList());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteDataPanen = () => {
  return (dispatch) => {
    dispatch({
      type: GET_PANEN_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: POST_PANEN_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
