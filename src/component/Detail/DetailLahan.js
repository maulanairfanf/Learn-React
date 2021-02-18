import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getLahanDetail: state.lahan.getLahanDetail,
    errorLahanDetail: state.lahan.errorLahanDetail,
  };
};
const DetailLahan = (props) => {
  console.log(props.getLahanDetail);
  return (
    <div>
      {/* {props.getLahanDetail ? ( */}
      <Table striped>
        <tbody>
          <tr>
            <td width="200">Kategori</td>
            <td width="10">:</td>
            <td>{props.getLahanDetail.kategori}</td>
          </tr>
          <tr>
            <td width="200">Luas</td>
            <td width="10">:</td>
            <td>{props.getLahanDetail.luas}</td>
          </tr>
          <tr>
            <td width="200">Satuan</td>
            <td width="10">:</td>
            <td>{props.getLahanDetail.satuan}</td>
          </tr>
          <tr>
            <td width="200">Usia Tanam</td>
            <td width="10">:</td>
            <td>{props.getLahanDetail.usia_tanam}</td>
          </tr>
          <tr>
            <td width="200">ID Petani</td>
            <td width="10">:</td>
            <td>{props.getLahanDetail.id_petani}</td>
          </tr>

          <tr>
            <td width="200">ID Instansi</td>
            <td width="10">:</td>
            <td>{props.getLahanDetail.id_instansi}</td>
          </tr>
          <tr>
            <td width="200">ID Desa</td>
            <td width="10">:</td>
            <td>{props.getLahanDetail.id_desa}</td>
          </tr>
          <tr>
            <td width="200">ID Kecamatan</td>
            <td width="10">:</td>
            <td>{props.getLahanDetail.id_kecamatan}</td>
          </tr>
          <tr>
            <td width="200">ID Kabupaten</td>
            <td width="10">:</td>
            <td>{props.getLahanDetail.id_kabupaten}</td>
          </tr>
          <tr>
            <td width="200">ID Provinsi</td>
            <td width="10">:</td>
            <td>{props.getLahanDetail.id_provinsi}</td>
          </tr>
        </tbody>
      </Table>
      {/* ) : (
        <Spinner colors="dark" />
      )} */}
    </div>
  );
};

export default connect(mapStateToProps, null)(DetailLahan);
