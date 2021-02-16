import React, { useState } from "react";
import { connect } from "react-redux";
import { Spinner, Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUsersDetail: state.users.getUsersDetail,
    errorUsersDetail: state.users.errorUsersDetail,
  };
};
const DetailUser = (props) => {
  console.log(props.getUsersDetail);
  return (
    <div>
      {/* {props.getUsersDetail ? ( */}
      <Table striped>
        <tbody>
          <tr>
            <td width="200">Nama</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.nama}</td>
          </tr>
          <tr>
            <td width="200">email</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.email}</td>
          </tr>{" "}
          <tr>
            <td width="200">telp</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.telp}</td>
          </tr>
          {/* <tr>
            <td width="200">id</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.id}</td>
          </tr> */}
          <tr>
            <td width="200">nik</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.nik}</td>
          </tr>
          <tr>
            <td width="200">kk</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.kk}</td>
          </tr>
          <tr>
            <td width="200">kategori</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.kategori}</td>
          </tr>
          <tr>
            <td width="200">pekerjaan</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.pekerjaan}</td>
          </tr>
          <tr>
            <td width="200">gender</td>
            <td width="10">:</td>
            <td>
              {props.getUsersDetail.gender === 1
                ? "laki-laki"
                : "perempuan"}
            </td>
          </tr>
          <tr>
            <td width="200">agama</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.agama}</td>
          </tr>
          <tr>
            <td width="200">suku</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.suku}</td>
          </tr>
          <tr>
            <td width="200">tanggal lahir</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.tgl_lahir}</td>
          </tr>
          <tr>
            <td width="200">pendidikan</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.pendidikan}</td>
          </tr>
          <tr>
            <td width="200">alamat</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.alamat}</td>
          </tr>
          <tr>
            <td width="200">rt</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.rt}</td>
          </tr>
          <tr>
            <td width="200">rw</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.rw}</td>
          </tr>{" "}
          <tr>
            <td width="200">id_desa</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.id_desa}</td>
          </tr>{" "}
          <tr>
            <td width="200">id_kecamatan</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.id_kecamatan}</td>
          </tr>{" "}
          <tr>
            <td width="200">id_kabupaten</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.id_kabupaten}</td>
          </tr>{" "}
          <tr>
            <td width="200">id_provinsi</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.id_provinsi}</td>
          </tr>
          <tr>
            <td width="200">kodepos</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.kodepos}</td>
          </tr>{" "}
          <tr>
            <td width="200">facebook</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.facebook}</td>
          </tr>
        </tbody>
      </Table>
      {/* ) : (
        <Spinner colors="dark" />
      )} */}
    </div>
  );
};

export default connect(mapStateToProps, null)(DetailUser);
