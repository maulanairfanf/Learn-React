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
    <Container className="h-100 d-flex justify-content-center align-items-center">
      <Form
        action=""
        onSubmit={handleSubmit}
        className="p-5 rounded shadow"
        align="center"
        style={{ width: "400px" }}
      >
        {error && (
          <div className="alert alert-danger text-center" role="alert">
            <span className="text-center">{error}</span>
          </div>
        )}
        <h1 className=" text-center ">TaniPedia</h1>
        <FormGroup align="left">
          <Label className="text-left">Email</Label>
          <input
            className="form-control"
            id="username"
            type="username"
            placeholder="Username"
            ref={usernameRef}
            autoComplete="off"
            required
          />
        </FormGroup>
        <FormGroup align="left">
          <Label>Password</Label>
          <input
            className="form-control"
            id="password"
            type="password"
            placeholder="Password"
            ref={passwordRef}
            autoComplete="off"
            required
          />
        </FormGroup>
        <Button type="submit" color="primary" className="px-4">
          Login
          {
            (console.log(loading),
            loading ? (
              <span
                className="spinner-border spinner-border-sm ml-2 "
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              ""
            ))
          }
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
