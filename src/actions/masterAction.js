import axios from "axios";
import { getToken } from "../Utils/Common";
export const GET_PROVINSI_LIST = "GET_PROVINSI_LIST";
export const GET_KABUPATEN_LIST = "GET_KABUPATEN_LIST";
export const GET_KECAMATAN_LIST = "GET_KECAMATAN_LIST";
export const GET_KELURAHAN_LIST = "GET_KELURAHAN_LIST";
export const GET_TOTAL_LIST = "GET_TOTAL_LIST";

const token = getToken();


export const getTotalList = (data) => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/dashboard",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_TOTAL_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};


export const getProvinsiList = (data) => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/wilayah/provinsi",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_PROVINSI_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getKabupatenList = (id) => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/wilayah/kabupatenkota?provinsi=" + id,
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_KABUPATEN_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getKecamatanList = (id_provinsi, id_kabupaten) => {
  return (dispatch) => {
    axios({
      method: "get",
      url: `http://localhost:8000/wilayah/kecamatan?provinsi=${id_provinsi}&kabupatenkota=${id_kabupaten}`,
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_KECAMATAN_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getKelurahanList = (id_provinsi, id_kabupaten, id_kecamtan) => {
  return (dispatch) => {
    axios({
      method: "get",
      url: `http://localhost:8000/wilayah/kelurahan?provinsi=${id_provinsi}&kabupatenkota=${id_kabupaten}&kecamatan=${id_kecamtan}`,
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_KELURAHAN_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
