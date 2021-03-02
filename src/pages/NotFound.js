import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Ilustrasi from "../assets/404.PNG";

const NotFound = () => {
  return (
    <Container className="h-75 d-flex justify-content-center align-items-center">
      <div className="text-center">
        {/* <p className="text-center">Oops.. Halaman Tidak Ditemukan</p> */}
        <img src={Ilustrasi} className="img-fluid w-75" />
        <p>
          <Link className="btn btn-info mt-5" to="/">
            Back to Dashboard
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default NotFound;
