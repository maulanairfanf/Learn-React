import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Spinner } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getPanenDetail: state.panen.getPanenDetail,
    errorPanenDetail: state.panen.errorPanenDetail,
  };
};
const DetailPanen = (props) => {
  console.log(props.getPanenDetail);
  return (
    <>
      {props.getPanenDetail ? (
        <div className="container-fluid overflow-hidden">
          <div className="row">
            <div className="shadow-sm rounded col-md-12 p-3 p-md-5 ">
              {" "}
              <h4 className="text-secondary mt-4 mb-4">Detail Panen</h4>
              <div className="row d-flex justify-content-around">
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Petani</h6>
                  <br />
                  <h6 className="text-black">{props.getPanenDetail.petani}</h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Keterangan</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getPanenDetail.keterangan}
                  </h6>
                </div>
              </div>
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-5 overflow-auto">
                  <h6 className="text-black-50">Tanggal Tana</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getPanenDetail.tgl_tanam}
                  </h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Tanggal Panen</h6>
                  <br />
                  <h6 className="text-black">
                    {" "}
                    {props.getPanenDetail.tgl_panen}
                  </h6>
                </div>
              </div>
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-5 overflow-auto">
                  <h6 className="text-black-50">Total Panen</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getPanenDetail.total_panen}
                  </h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Satuan</h6>
                  <br />
                  <h6 className="text-black">{props.getPanenDetail.satuan}</h6>
                </div>
              </div>{" "}
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Varietas</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getPanenDetail.varietas}
                  </h6>
                </div>
                <div className=" border-bottom col-5">
                  <h6 className="text-black-50">Kategori</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getPanenDetail.kategori}
                  </h6>
                </div>
              </div>
              <div className="row mt-5 d-flex justify-content-around">
                <div className=" border-bottom col-3">
                  <h6 className="text-black-50">ID Lahan</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getPanenDetail.id_lahan}
                  </h6>
                </div>
                <div className=" border-bottom col-3">
                  <h6 className="text-black-50">ID Petani</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getPanenDetail.id_petani}
                  </h6>
                </div>{" "}
                <div className=" border-bottom col-3">
                  <h6 className="text-black-50">ID Instansi</h6>
                  <br />
                  <h6 className="text-black">
                    {props.getPanenDetail.id_instansi}
                  </h6>
                </div>
              </div>{" "}
              <div className="d-flex justify-content-center align-items-center mt-5">
                <Link
                  to={"/EditLahan/" + props.getPanenDetail.id}
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

export default connect(mapStateToProps, null)(DetailPanen);
