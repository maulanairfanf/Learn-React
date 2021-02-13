import React, { useCallback, useEffect, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import {
  Card,
  Button,
  Form,
  Label,
  FormGroup,
  Input,
  FormText,
  Container,
} from "reactstrap";

import { setUserSession } from "../../Utils/Common";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const axios = require("axios");
    const data = JSON.stringify({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      // username: "maul",
      // password: "maulkeren",
    });
    // console.log(data);

    var config = {
      method: "post",
      url: "http://localhost:8000/login",
      headers: {
        "APP-KEY": "okYC7opyhD4DTIauhPvMq2Wkvc6bz08t",
        "Access-Control-Request-Headers": "true",
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        // console.log(response.data.data.api_token);
        setUserSession(
          response.data.data.api_token,
          response.data.data.username
        );
        props.history.push("/Home");
      })
      .catch(function (error) {
        console.log(error);
        setError("username atau password yang dimasukan salah !!!");
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
              // onChange={(e) => {
              //   setUsername(e.target.value);
              // }}
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
              // onChange={(e) => {
              //   setPassowrd(e.target.value);
              // }}
              required=""
            />
          </FormGroup>
          <Button
            // disabled={loading}
            // onClick={handleLogin}
            type="submit"
            color="primary"
          >
            Submit
          </Button>
        </Form>
      </div>
      {/* <div className="d-block">
        <Link to="/ForgotPassword">Forgot Password</Link>
      </div>
      <h6>
        Belum mempunyai akun ?
        <Link
          to="/Register"
          className=" text-blue-500 ml-3  hover:text-blue-400 "
        >
          Register
        </Link>
      </h6>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      ></div> */}
    </Container>
  );
}

export default Login;
