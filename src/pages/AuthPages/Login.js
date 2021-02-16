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
  // const [username, setUsername] = useState("");
  // const [password, setPassowrd] = useState("");
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
      // username: "maul",
      // password: "maulkeren",
    });
    console.log(data);

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
        setUserSession(
          response.data.data.api_token,
          response.data.data.username
        );
        props.history.push("/Home");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        // setError("username atau password yang dimasukan salah !!!");
      });

    // try {
    //   setError("");
    //   // setLoading(true);
    //   // const token = await loginUser({
    //   //   username,
    //   //   password,
    //   // });
    //   // setToken(token);asd
    //   // await login(usernameRef.current.value, passwordRef.current.value);
    //   // history.push("/Login");
    // } catch (err) {
    //   setError(err.message);
    //   console.log(err);
    // }

    // setLoading(false);
  };

  return (
    <Container className=" h-100">
      <div className="">
        <Form action="" onSubmit={handleSubmit} className=" ">
          {error && (
            <div className="" role="alert">
              <p>{error}</p>
            </div>
          )}
          <h1 className=" text-center ">TaniPedia</h1>
          <FormGroup className="d-block">
            <Label>Email</Label>
            <input
              className="form-control"
              id="username"
              type="username"
              placeholder="username"
              ref={usernameRef}
              required
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup className="">
            <Label>Password</Label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required=""
            />
          </FormGroup>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
