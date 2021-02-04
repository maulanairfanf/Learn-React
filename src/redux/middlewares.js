import axios from "axios";
import * as constants from "./constant";

export const apiMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type !== constants.API) return next(action);
  const BASE_URL = "http//localhost:3000";
  const {
    url,
    method,
    succes,
    data,
    postProcessSucces,
    postProcessError,
  } = action.payload;

  axios({
    method,
    url: BASE_URL + url,
    data: data ? data : null,
  })
    .then((response) => {
      if (succes) dispatch(succes(response.data));
      if (postProcessSucces) postProcessSucces(response.data);
    })
    .catch((err) => {
      if (!err.response) console.warn(err);
      else {
        if (err.response.data.error.message) {
          if (postProcessError)
            postProcessError(err.response.data.error.message);
        }
      }
    });
};
