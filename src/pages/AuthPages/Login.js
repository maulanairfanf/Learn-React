import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Label, FormGroup, Container } from "reactstrap";

import { setUserSession } from "../../Utils/Common";

function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const axios = require("axios");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = JSON.stringify({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });

    const config = {
      method: "post",
      url: "http://localhost:8000/login",
      headers: {
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        Authorization:
          "Gradien 21232f297a57a5a743894a0e4a801fc3MAv5xkShGiocbZtloZJMyoyHJEWOSRwv3jXLrV71FxyuLs8jVVEQMDC54DBP23dDhuwDu9CEYYu3IiMNVMtqU0Lzj5vtWCWYBS9SlYD3EzIZDJesQ1UeD930qkkjo9HU",
        "Access-Control-Request-Headers": "APP-KEY",
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        if (response.data.status === "ERROR") {
          setError("username atau password yang dimasukkan salah");
          setLoading(false);
        } else {
          setUserSession(
            response.data.data.api_token,
            response.data.data.username
          );
          props.history.push("/");
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
        setError(error);
      });
  };

  return (
    <>
      <section
        style={{
          height: "100%",
          width: "100%",
          boxSizing: "border-box",
          backgroundColor: "#F5F5F5",
        }}
      >
        <div
          className="d-flex flex-column align-items-center h-100 flex-lg-row"
          style={{ fontFamily: " 'Poppins', sans-serif;" }}
        >
          <div className="position-relative d-none d-lg-block h-100 width-left-content-3-5">
            <img
              className="position-absolute img-fluid centered-content-3-5"
              src="http://api.elements.buildwithangga.com/storage/files/2/assets/Empty%20State/EmptyState3/Empty-3-5.png"
              alt=""
            />
          </div>
          <div className="d-flex mx-auto align-items-center justify-content-left width-right-content-3-5 ">
            <div className="right-content-3-5">
              <div className="align-items-center justify-content-center d-lg-none d-flex">
                <img
                  className="img-fluid"
                  src="http://api.elements.buildwithangga.com/storage/files/2/assets/Empty%20State/EmptyState3/Empty-3-5.png"
                  alt=""
                />
              </div>
              <h3 className="title-text-content-3-5">Log In to continue</h3>
              <p className="caption-text-content-3-5">
                Please log in using that account has
                <br />
                registered on the website.
              </p>
              <form onSubmit={handleSubmit} action="" method="post">
                {error && (
                  <div className="alert alert-danger text-center" role="alert">
                    <span className="text-center">{error}</span>
                  </div>
                )}
                <div style={{ marginBottom: " 1.75rem;" }}>
                  <label for="" className="d-block input-label-content-3-5">
                    Username
                  </label>
                  <div className="d-flex w-100 div-input-content-3-5">
                    <svg
                      className="icon-content-3-5 mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8C22 6.34315 20.6569 5 19 5H5ZM5.49607 7.13174C5.01655 6.85773 4.40569 7.02433 4.13168 7.50385C3.85767 7.98337 4.02427 8.59422 4.50379 8.86823L11.5038 12.8682C11.8112 13.0439 12.1886 13.0439 12.4961 12.8682L19.4961 8.86823C19.9756 8.59422 20.1422 7.98337 19.8682 7.50385C19.5942 7.02433 18.9833 6.85773 18.5038 7.13174L11.9999 10.8482L5.49607 7.13174Z"
                        fill="#CACBCE"
                      />
                    </svg>
                    <input
                      className="input-field-content-3-5"
                      type="text"
                      name="username"
                      id="username"
                      ref={usernameRef}
                      placeholder="Your Username"
                      autocomplete="on"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label for="" className="d-block input-label-content-3-5">
                    Password
                  </label>
                  <div className="d-flex w-100 div-input-content-3-5">
                    <svg
                      className="icon-content-3-5 mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.81592 4.25974C7.12462 5.48872 7 6.95088 7 8H6C4.34315 8 3 9.34315 3 11V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V11C21 9.34315 19.6569 8 18 8L17 7.99998C17 6.95087 16.8754 5.48871 16.1841 4.25973C15.829 3.62845 15.3194 3.05012 14.6031 2.63486C13.8875 2.22005 13.021 2 12 2C10.979 2 10.1125 2.22005 9.39691 2.63486C8.68058 3.05012 8.17102 3.62845 7.81592 4.25974ZM9.55908 5.24026C9.12538 6.01128 9 7.04912 9 8H15C15 7.04911 14.8746 6.01129 14.4409 5.24027C14.2335 4.87155 13.9618 4.57488 13.6 4.36514C13.2375 4.15495 12.729 4 12 4C11.271 4 10.7625 4.15495 10.4 4.36514C10.0382 4.57488 9.76648 4.87155 9.55908 5.24026ZM14 14C14 14.7403 13.5978 15.3866 13 15.7324V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14Z"
                        fill="#CACBCE"
                      />
                    </svg>
                    <input
                      className="input-field-content-3-5"
                      type="password"
                      name="password"
                      id="password"
                      ref={passwordRef}
                      placeholder="Your Password"
                      required
                    />
                  </div>
                </div>

                <button
                  className="btn btn-fill-content-3-5 d-block w-100 text-white rounded"
                  type="submit"
                >
                  Log In To My Account
                  {loading ? (
                    <span
                      className="spinner-border spinner-border-sm ml-2 "
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : (
                    ""
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
