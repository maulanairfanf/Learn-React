// return the user data from the session storage
export const getUser = () => {
  const userStr = localStorage.getItem("username");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const getName = () => {
  return localStorage.getItem("username") || null;
};

// return the token from the session storage
export const getToken = () => {
  return localStorage.getItem("token") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("nik");
  localStorage.removeItem("telp");
  localStorage.removeItem("email");
  localStorage.removeItem("id_profil");
  window.location.reload();
  // sessionStorage.removeItem("token");
  // sessionStorage.removeItem("user");
};

// set the token and user from the session storage
export const setUserSession = (
  token,
  username,
  nik,
  telp,
  email,
  id_profil
) => {
  localStorage.setItem("token", token);
  localStorage.setItem("username", username);
  localStorage.setItem("nik", nik);
  localStorage.setItem("telp", telp);
  localStorage.setItem("email", email);
  localStorage.setItem("id_profil", id_profil);
  // sessionStorage.setItem("token", token);
  // sessionStorage.setItem("user", JSON.stringify(user));
};

// export const getData = (token, username, nik, telp, email, id_profil) => {
//   console.log(token);
// };
