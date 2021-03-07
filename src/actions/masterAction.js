import axios from "axios";
import { getToken } from "../Utils/Common";
export const GET_PROVINSI_LIST = "GET_PROVINSI_LIST";
export const GET_KABUPATEN_LIST = "GET_KABUPATEN_LIST";
export const GET_KECAMATAN_LIST = "GET_KECAMATAN_LIST";
export const GET_KELURAHAN_LIST = "GET_KELURAHAN_LIST";
export const GET_TOTAL_LIST = "GET_TOTAL_LIST";
export const GET_GENDER_LIST = "GET_GENDER_LIST";
export const GET_AGAMA_LIST = "GET_AGAMA_LIST";
export const GET_PENDIDIKAN_LIST = "GET_PENDIDIKAN_LIST";
export const GET_GOLONGANDARAH_LIST = "GET_GOLONGANDARAH_LIST";
export const GET_SUKU_LIST = "GET_SUKU_LIST";
export const GET_PEKERJAAN_LIST = "GET_PEKERJAAN_LIST";
export const GET_TIPEUSER_LIST = "GET_TIPEUSER_LIST";
export const GET_KOMODITAS_LIST = "GET_KOMODITAS_LIST";
export const GET_SATUAN_LIST = "GET_SATUAN_LIST";

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

export const getGenderList = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/master?id_mastertype=10001",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_GENDER_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getAgamaList = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/master?id_mastertype=10002",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_AGAMA_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getPendidikanList = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/master?id_mastertype=10003",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_PENDIDIKAN_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getGolonganDarahList = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/master?id_mastertype=10004",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_GOLONGANDARAH_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getSukuList = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/master?id_mastertype=10005",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_SUKU_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getPekerjaanList = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/master?id_mastertype=10006",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_PEKERJAAN_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getTipeUserList = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/master?id_mastertype=10000",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_TIPEUSER_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getSatuanList = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/master?id_mastertype=101",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_SATUAN_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getKomoditasList = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:8000/master?id_mastertype=10102",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: GET_KOMODITAS_LIST,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
