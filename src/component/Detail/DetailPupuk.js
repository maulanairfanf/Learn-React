import React, { useState } from "react";
import { connect } from "react-redux";
import { Spinner, Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getPupukDetail: state.pupuk.getPupukDetail,
    errorPupukDetail: state.pupuk.errorPupukDetail,
  };
};
const DetailPupuk = (props) => {
  console.log(props.getPupukDetail);
  return (
    <div>
      {/* {props.getPupukDetail ? ( */}
      <Table striped>
        <tbody>
          <tr>
            <td width="200">Jenis</td>
            <td width="10">:</td>
            <td>{props.getPupukDetail.jenis_pupuk}</td>
          </tr>
          <tr>
            <td width="200">Kapasitas</td>
            <td width="10">:</td>
            <td>{props.getPupukDetail.kapasitas}</td>
          </tr>
          <tr>
            <td width="200">Satuan</td>
            <td width="10">:</td>
            <td>{props.getPupukDetail.satuan}</td>
          </tr>
          <tr>
            <td width="200">ID Poktan</td>
            <td width="10">:</td>
            <td>{props.getPupukDetail.id_poktan}</td>
          </tr>
          <tr>
            <td width="200">Tanggal Distribusi</td>
            <td width="10">:</td>
            <td>{props.getPupukDetail.tgl_distribusi}</td>
          </tr>
          <tr>
            <td width="200">ID Instansi</td>
            <td width="10">:</td>
            <td>{props.getPupukDetail.id_instansi}</td>
          </tr>
        </tbody>
      </Table>
      {/* ) : (
        <Spinner colors="dark" />
      )} */}
    </div>
  );
};

export default connect(mapStateToProps, null)(DetailPupuk);
