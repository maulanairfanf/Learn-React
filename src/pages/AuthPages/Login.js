import React, { useRef, useState } from "react";
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

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const [succes, setSucces] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      // setSucces();
      history.push("/");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }

    setLoading(false);
  }
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
              id="email"
              type="email"
              placeholder="Email"
              ref={emailRef}
              required
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
          <Button disabled={loading} type="submit" color="primary">
            Submit
          </Button>
        </Form>
      </div>{" "}
      <div className="d-block">
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
      ></div>
    </Container>
  );
}
