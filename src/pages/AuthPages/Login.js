import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  // Card,
  Button,
  Form,
  Label,
  FormGroup,
  // Input,
  // FormText,
  Container,
} from "reactstrap";

import { setUserSession } from "../../Utils/Common";

function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const history = useHistory();
  const axios = require("axios");

  const handleSubmit = (e) => {
    e.preventDefault();
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
        style={{ width: "400px" }}
      >
        {error && (
          <div className="alert alert-danger text-center" role="alert">
            <span className="text-center">{error}</span>
          </div>
        )}
        <h1 className=" text-center ">TaniPedia</h1>
        <FormGroup>
          <Label>Email</Label>
          <input
            className="form-control"
            id="username"
            type="username"
            placeholder="username"
            ref={usernameRef}
            autoComplete="off"
          />
        </FormGroup>
        <FormGroup className="">
          <Label>Password</Label>
          <input
            className="form-control"
            id="password"
            type="password"
            placeholder="Password"
            ref={passwordRef}
            autoComplete="off"
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
