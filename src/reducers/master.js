import {
  GET_PROVINSI_LIST,
  GET_KABUPATEN_LIST,
  GET_KECAMATAN_LIST,
  GET_KELURAHAN_LIST,
  GET_TOTAL_LIST,
  GET_GENDER_LIST,
  GET_AGAMA_LIST,
  GET_PENDIDIKAN_LIST,
  GET_GOLONGANDARAH_LIST,
  GET_SUKU_LIST,
  GET_PEKERJAAN_LIST,
  GET_TIPEUSER_LIST,
  GET_KOMODITAS_LIST,
  GET_SATUAN_LIST,
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
  getGenderList: false,
  errorGenderList: false,
  getAgamaList: false,
  errorAgamaList: false,
  getPendidikanList: false,
  errorPendidikanList: false,
  getGolonganDarahList: false,
  errorGolonganDarahList: false,
  getSukuList: false,
  errorSukuList: false,
  getPekerjaanList: false,
  errorPekerjaanList: false,
  getTipeUserList: false,
  errorTipeUserList: false,
  getKomoditasList: false,
  errorKomoditasList: false,
  getSatuanList: false,
  errorSatuanList: false,

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
    case GET_GENDER_LIST:
      return {
        ...state,
        getGenderList: action.payload.data,
        errorGenderList: action.payload.errorMessage,
      };
    case GET_AGAMA_LIST:
      return {
        ...state,
        getAgamaList: action.payload.data,
        errorAgamaList: action.payload.errorMessage,
      };
    case GET_PENDIDIKAN_LIST:
      return {
        ...state,
        getPendidikanList: action.payload.data,
        errorPendidikanList: action.payload.errorMessage,
      };
    case GET_GOLONGANDARAH_LIST:
      return {
        ...state,
        getGolonganDarahList: action.payload.data,
        errorGolonganDarahList: action.payload.errorMessage,
      };
    case GET_SUKU_LIST:
      return {
        ...state,
        getSukuList: action.payload.data,
        errorSukuList: action.payload.errorMessage,
      };
    case GET_PEKERJAAN_LIST:
      return {
        ...state,
        getPekerjaanList: action.payload.data,
        errorPekerjaanList: action.payload.errorMessage,
      };
    case GET_TIPEUSER_LIST:
      return {
        ...state,
        getTipeUserList: action.payload.data,
        errorTipeUserList: action.payload.errorMessage,
      };
    case GET_KOMODITAS_LIST:
      return {
        ...state,
        getKomoditasList: action.payload.data,
        errorKomoditasList: action.payload.errorMessage,
      };
    case GET_SATUAN_LIST:
      return {
        ...state,
        getSatuanList: action.payload.data,
        errorSatuanList: action.payload.errorMessage,
      };
  
    default:
      return state;
  }
};

export default master;
