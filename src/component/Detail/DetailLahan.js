import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { Container, Spinner } from "reactstrap";
import Photo from "../../assets/user.png";

const mapStateToProps = (state) => {
  return {
    getLahanDetail: state.lahan.getLahanDetail,
    errorLahanDetail: state.lahan.errorLahanDetail,
  };
};
const DetailLahan = (props) => {
  console.log(props.getLahanDetail);
  return (
    <>
      {props.getLahanDetail ? (
        <div className="container-fluid overflow-hidden">
          <div className="row">
            <div className="shadow-sm rounded col-md-12 p-3 p-md-5 ">
              <h4 className="text-secondary mt-4 mb-4">Detail Lahan</h4>
              <div className="row d-flex justify-content-around">
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Petani</h6>
                  <br />
                  <h6 className="text-black">{props.getLahanDetail.petani}</h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Kategori</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getLahanDetail.kategori}
                  </h6>
                </div>
              </div>
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-5 overflow-auto">
                  <h6 className="text-black-50">Luas</h6>
                  <br />
                  <h6 className="text-black">{props.getLahanDetail.luas}</h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Satuan</h6>
                  <br />
                  <h6 className="text-black"> {props.getLahanDetail.satuan}</h6>
                </div>
              </div>
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-5 overflow-auto">
                  <h6 className="text-black-50">Keterangan</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getLahanDetail.keterangan}
                  </h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">ID Petani</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getLahanDetail.id_petani}
                  </h6>
                </div>
              </div>{" "}
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Poktan</h6>
                  <br />
                  <h6 className="text-black">{props.getLahanDetail.poktan}</h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Keterangan</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getLahanDetail.keterangan}
                  </h6>
                </div>
              </div>{" "}
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-6">
                  <h6 className="text-black-50">Alamat</h6>
                  <br />
                  <h6 className="text-black">{props.getLahanDetail.alamat}</h6>
                </div>
              </div>{" "}
              <div className="row">
                <div className="col-12 pb-3">
                  <div className="p-3">
                    <h4 className="text-secondary mt-4 mb-4">Detail Alamat</h4>
                    <div className="row  justify-content-around">
                      <div className=" border-bottom col-md-3 col-5">
                        <h6 className="text-black-50">Provinsi</h6>
                        <br />
                        <h6 className="text-black">
                          {props.getLahanDetail.provinsi}
                        </h6>
                      </div>
                      <div className=" border-bottom col-md-3 col-5">
                        <h6 className="text-black-50">Kabupaten</h6>
                        <br />
                        <h6 className="text-black">
                          {props.getLahanDetail.kabupaten}
                        </h6>
                      </div>
                      <div className=" border-bottom mt-3 mt-md-0 col-md-3 col-5">
                        <h6 className="text-black-50">Kecamatan</h6>
                        <br />
                        <h6 className="text-black">
                          {props.getLahanDetail.kecamatan}
                        </h6>
                      </div>
                    </div>
                    <div className="row mt-5  justify-content-around">
                      <div className=" border-bottom col-md-3 col-5">
                        <h6 className="text-black-50">Kelurahan</h6>
                        <br />
                        <h6 className="text-black">
                          {props.getLahanDetail.desa}
                        </h6>
                      </div>

                      <div className=" border-bottom col-md-1 col-5">
                        <h6 className="text-black-50 ">RT</h6>
                        <br />
                        <h6 className="text-black">
                          {" "}
                          {props.getLahanDetail.rt}
                        </h6>
                      </div>
                      <div className=" border-bottom col-md-1 col-5">
                        <h6 className="text-black-50 mt-3 mt-md-0 ">RW</h6>
                        <br />
                        <h6 className="text-black">
                          {" "}
                          {props.getLahanDetail.rw}
                        </h6>
                      </div>
                      <div className=" border-bottom col-md-1 col-5 mt-3 mt-md-0">
                        <h6 className="text-black-50  ">Kodepos</h6>
                        <br />
                        <h6 className="text-black">
                          {props.getLahanDetail.kodepos}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-5">
                <Link
                  to={"/edit-lahan/" + props.getLahanDetail.id}
                  className="btn btn-info"
                >
                  Update Lahan
                </Link>
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

export default connect(mapStateToProps, null)(DetailLahan);
