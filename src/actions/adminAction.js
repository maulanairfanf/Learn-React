import axios from "axios";
import { getToken } from "../Utils/Common";
export const POST_REGISTER = "POST_REGISTER";

const token = getToken();

export const postRegister = (data) => {
  return async (dispatch) => {
    axios({
      method: "post",
      url: "http://localhost:8000/register",
      headers: {
        Authorization: "Gradien " + token,
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
      },
      data: data,
    })
      .then(function (response) {
        console.log(response.data.data);
        dispatch({
          type: POST_REGISTER,
          payload: { data: response.data.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
