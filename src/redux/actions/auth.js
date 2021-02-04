import * as constants from "../constant";

export const registerUser = (data, onSucces, onError) => ({
  type: constants.API,
  payload: {
    method: "POST",
    url: "api/users/register",
    data,
    success: (response) => setUserInfo(response),
    postProcessSucces: onSucces,
    postProcessError: onError,
  },
});

export const loginUser = (data, onSucces, onError) => ({
  type: constants.API,
  payload: {
    method: "POST",
    url: "/api/user/login",
    data,
    succes: (response) => setUserInfo(response),
    postProcessSucces: onSucces,
    postProcessError: onError,
  },
});

export const setUserInfo = (data) => {
  const parsedToken = JSON.parse(atob(data.token.split(".")[1]));
  const userInfo = {
    userId: parsedToken.id,
    fullName: `${parsedToken.firstName} ${parsedToken.lastName}`,
    token: data.token,
    isLoggedIn: true,
  };
  localStorage.setItem("USER_INFO", JSON.stringify(userInfo));
  return { type: constants.SET_USER_INFO, payload: userInfo };
};
