import React from "react";
import { PhoneForwarded } from "react-feather";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Spinner } from "reactstrap";
import Photo from "../../assets/user.png";

const mapStateToProps = (state) => {
  return {
    getUsersDetail: state.users.getUsersDetail,
    errorUsersDetail: state.users.errorUsersDetail,
  };
};
const DetailUser = (props) => {
  return (
    <>
      {props.getUsersDetail ? (
        <div className="container-fluid overflow-hidden">
          <div className="row">
            <div className="shadow-sm rounded col-md-6 d-flex justify-content-center align-items-center">
              <div className="p-5 ">
                <img
                  src={Photo}
                  className="rounded-circle border border-secondary "
                  style={{ width: "120px" }}
                  alt="..."
                ></img>
                <h3 className="text-black mt-3 text-center">
                  {props.getUsersDetail.nama}
                </h3>
                <h6 className="text-black-50">{props.getUsersDetail.email}</h6>
                <div className="d-flex justify-content-center mt-3">
                  <Link
                    className=" btn btn-info"
                    to={"/EditUser/" + props.getUsersDetail.id}
                  >
                    Edit Profil
                  </Link>
                </div>
              </div>
            </div>
            <div className="shadow-sm rounded col-md-6 p-3 p-md-5 ">
              <div className="row d-flex justify-content-around">
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Jenis Kelamin</h6>
                  <br />
                  <h6 className="text-black"> {props.getUsersDetail.gender}</h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Tanggal Lahir</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getUsersDetail.tgl_lahir}
                  </h6>
                </div>
              </div>
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Nomor Telepon</h6>
                  <br />
                  <h6 className="text-black"> {props.getUsersDetail.telp}</h6>
                </div>
                <div className=" border-bottom col-5 overflow-auto">
                  <h6 className="text-black-50">Alamat</h6>
                  <br />
                  <h6 className="text-black"> {props.getUsersDetail.alamat}</h6>
                </div>
              </div>
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Agama</h6>
                  <br />
                  <h6 className="text-black"> {props.getUsersDetail.Agama}</h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Pekerjaan</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getUsersDetail.pekerjaan}
                  </h6>
                </div>
              </div>
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Nomor Induk Keluarga</h6>
                  <br />
                  <h6 className="text-black"> {props.getUsersDetail.nik}</h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Kartu Keluarga</h6>
                  <br />
                  <h6 className="text-black"> {props.getUsersDetail.kk}</h6>
                </div>
              </div>
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Kategori</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getUsersDetail.kategori}
                  </h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Pendidikan</h6>
                  <br />
                  <h6 className="text-black">
                    {" "}
                    {props.getUsersDetail.pendidikan}
                  </h6>
                </div>
              </div>{" "}
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Facebook</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getUsersDetail.facebook}
                  </h6>
                </div>{" "}
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Suku</h6>
                  <br />
                  <h6 className="text-black"> {props.getUsersDetail.suku}</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="shadow-sm rounded col-12 pb-3">
              <div className="p-3">
                <h4 className="text-secondary mt-4 mb-4">Detail Alamat</h4>
                <div className="row  justify-content-around">
                  <div className=" border-bottom col-md-3 col-5">
                    <h6 className="text-black-50">Provinsi</h6>
                    <br />
                    <h6 className="text-black">
                      {props.getUsersDetail.provinsi}
                    </h6>
                  </div>
                  <div className=" border-bottom col-md-3 col-5">
                    <h6 className="text-black-50">Kabupaten</h6>
                    <br />
                    <h6 className="text-black">
                      {props.getUsersDetail.kabupaten}
                    </h6>
                  </div>
                  <div className=" border-bottom mt-3 mt-md-0 col-md-3 col-5">
                    <h6 className="text-black-50">Kecamatan</h6>
                    <br />
                    <h6 className="text-black">
                      {props.getUsersDetail.kecamatan}
                    </h6>
                  </div>
                </div>
                <div className="row mt-5  justify-content-around">
                  <div className=" border-bottom col-md-3 col-5">
                    <h6 className="text-black-50">Kelurahan</h6>
                    <br />
                    <h6 className="text-black">{props.getUsersDetail.desa}</h6>
                  </div>

                  <div className=" border-bottom col-md-1 col-5">
                    <h6 className="text-black-50 ">RT</h6>
                    <br />
                    <h6 className="text-black"> {props.getUsersDetail.rt}</h6>
                  </div>
                  <div className=" border-bottom col-md-1 col-5">
                    <h6 className="text-black-50 mt-3 mt-md-0 ">RW</h6>
                    <br />
                    <h6 className="text-black"> {props.getUsersDetail.rw}</h6>
                  </div>
                  <div className=" border-bottom col-md-1 col-5 mt-3 mt-md-0">
                    <h6 className="text-black-50  ">Kodepos</h6>
                    <br />
                    <h6 className="text-black">
                      {props.getUsersDetail.kodepos}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Container className="h-75 d-flex justify-content-center align-items-center">
          <div className="spinner-grow text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </Container>
      )}
    </>
  );
};

export default connect(mapStateToProps, null)(DetailUser);
