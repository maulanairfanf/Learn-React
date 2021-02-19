import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getPanenDetail: state.panen.getPanenDetail,
    errorPanenDetail: state.panen.errorPanenDetail,
  };
};
const DetailPanen = (props) => {
  console.log(props.getPanenDetail);
  return (
    <div>
      {/* {props.getPanenDetail ? ( */}
      <Table striped>
        <tbody>
          <tr>
            <td width="200">id_petani</td>
            <td width="10">:</td>
            <td>{props.getPanenDetail.id_petani}</td>
          </tr>
          <tr>
            <td width="200">id_instans</td>
            <td width="10">:</td>
            <td>{props.getPanenDetail.id_instans}</td>
          </tr>
          <tr>
            <td width="200">kategori</td>
            <td width="10">:</td>
            <td>{props.getPanenDetail.kategori}</td>
          </tr>
          <tr>
            <td width="200">varietas</td>
            <td width="10">:</td>
            <td>{props.getPanenDetail.varietas}</td>
          </tr>
          <tr>
            <td width="200">total_panen</td>
            <td width="10">:</td>
            <td>{props.getPanenDetail.total_panen}</td>
          </tr>

          <tr>
            <td width="200">satuan</td>
            <td width="10">:</td>
            <td>{props.getPanenDetail.satuan}</td>
          </tr>
          <tr>
            <td width="200">tgl_tanam</td>
            <td width="10">:</td>
            <td>{props.getPanenDetail.tgl_tanam}</td>
          </tr>
          <tr>
            <td width="200">tgl_panen</td>
            <td width="10">:</td>
            <td>{props.getPanenDetail.tgl_panen}</td>
          </tr>
          <tr>
            <td width="200">id_lahan</td>
            <td width="10">:</td>
            <td>{props.getPanenDetail.id_lahan}</td>
          </tr>
          <tr>
            <td width="200">keterangan</td>
            <td width="10">:</td>
            <td>{props.getPanenDetail.keterangan}</td>
          </tr>
          <tr>
            <td width="200">foto_panen</td>
            <td width="10">:</td>
            <td>{props.getPanenDetail.foto_panen}</td>
            <img src={props.getPanenDetail.foto_panen} />
          </tr>
        </tbody>
      </Table>
      {/* ) : (
        <Spinner colors="dark" />
      )} */}
    </div>
  );
};

export default connect(mapStateToProps, null)(DetailPanen);
