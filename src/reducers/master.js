import {
  GET_PROVINSI_LIST,
  GET_KABUPATEN_LIST,
  GET_KECAMATAN_LIST,
  GET_KELURAHAN_LIST,
  GET_TOTAL_LIST,
} from "../actions/masterAction";

let initialState = {
  getProvinsiList: false,
  errorProvinsiList: false,
  getKabupatenList: false,
  errorKabupatenList: false,
  getKecamatanList: false,
  errorKecamatanList: false,
  getKelurahanList: false,
  errorKelurahanList: false,
  getTotalList: false,
  errorTotalList: false,
  title: "master",
};

const master = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL_LIST:
      return {
        ...state,
        getTotalList: action.payload.data,
        errorTotalList: action.payload.errorMessage,
      };
    case GET_PROVINSI_LIST:
      return {
        ...state,
        getProvinsiList: action.payload.data,
        errorProvinsiList: action.payload.errorMessage,
      };
    case GET_KABUPATEN_LIST:
      return {
        ...state,
        getKabupatenList: action.payload.data,
        errorKabupatenList: action.payload.errorMessage,
      };
    case GET_KECAMATAN_LIST:
      return {
        ...state,
        getKecamatanList: action.payload.data,
        errorKecamatanList: action.payload.errorMessage,
      };
    case GET_KELURAHAN_LIST:
      return {
        ...state,
        getKelurahanList: action.payload.data,
        errorKelurahanList: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default master;
