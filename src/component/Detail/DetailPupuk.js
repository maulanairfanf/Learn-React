import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { Container, Spinner } from "reactstrap";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    getPupukDetail: state.pupuk.getPupukDetail,
    errorPupukDetail: state.pupuk.errorPupukDetail,
  };
};
const DetailPupuk = (props) => {
  console.log(props.getPupukDetail);
  return (
    <>
      {props.getPupukDetail ? (
        <div className="container-fluid overflow-hidden">
          <div className="row">
            <div className="shadow-sm rounded col-md-12 p-3 p-md-5 ">
              {" "}
              <h4 className="text-secondary mt-4 mb-4">Detail Pupuk</h4>
              <div className="row d-flex justify-content-around">
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Jenis Pupuk</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getPupukDetail.jenis_pupuk}
                  </h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Petani</h6>
                  <br />
                  <h6 className="text-black">{props.getPupukDetail.petani}</h6>
                </div>
              </div>
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-5 overflow-auto">
                  <h6 className="text-black-50">Kapasitas</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getPupukDetail.kapasitas}
                  </h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Satuan</h6>
                  <br />
                  <h6 className="text-black"> {props.getPupukDetail.satuan}</h6>
                </div>
              </div>
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-5 overflow-auto">
                  <h6 className="text-black-50">ID Poktan</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getPupukDetail.id_poktan}
                  </h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">ID Petani</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getPupukDetail.id_petani}
                  </h6>
                </div>
              </div>{" "}
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Instansi</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getPupukDetail.instansi}
                  </h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Tanggal Distribusi</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getPupukDetail.tgl_distribusi}
                  </h6>
                </div>
              </div>
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Poktan</h6>
                  <br />
                  <h6 className="text-black">{props.getPupukDetail.poktan}</h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Keterangan</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getPupukDetail.keterangan}
                  </h6>
                </div>
              </div>{" "}
              <div className="d-flex justify-content-center align-items-center mt-5">
                <Link
                  to={"/EditPupuk/" + props.getPupukDetail.id}
                  className="btn btn-info"
                >
                  Update Pupuk
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

export default connect(mapStateToProps, null)(DetailPupuk);
