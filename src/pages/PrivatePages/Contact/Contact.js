import React from "react";

export const Contact = () => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Client-Token",
    "jZjZCS8MNd74JTa6x=SDTgVpfTpMjb2VxZMV/L4hsU6KvMcx"
  );
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("username", "admin");
  urlencoded.append("password", "unilaoke");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("https://7e98f9299303.ngrok.io/login", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  return (
    <div className="w-full">
      <div className="flex h-full justify-center items-center">
        <h1>This is Contact</h1>
      </div>
    </div>
  );
};

export default Contact;
