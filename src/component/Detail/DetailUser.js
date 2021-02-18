import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

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
            <td>
              {props.getUsersDetail.pekerjaan === 1000601
                ? "Petani"
                : props.getUsersDetail.pekerjaan === 1000602
                ? "Buruh"
                : props.getUsersDetail.pekerjaan === 1000603
                ? "ASN"
                : props.getUsersDetail.pekerjaan === 1000604
                ? "Pedagang"
                : props.getUsersDetail.pekerjaan === 1000605
                ? "Penyuluh"
                : props.getUsersDetail.pekerjaan === 1000606
                ? "Dosen"
                : props.getUsersDetail.pekerjaan === 1000607
                ? "Pegawai Swasta"
                : props.getUsersDetail.pekerjaan === 1000608
                ? "Honorer"
                : ""}
            </td>
          </tr>
          <tr>
            <td width="200">gender</td>
            <td width="10">:</td>
            <td>
              {props.getUsersDetail.gender === 1000101
                ? "laki-laki"
                : props.getUsersDetail.gender === 1000102
                ? "perempuan"
                : ""}
            </td>
          </tr>
          <tr>
            <td width="200">agama</td>
            <td width="10">:</td>
            <td>
              {props.getUsersDetail.agama === 1000201
                ? "Islam"
                : props.getUsersDetail.agama === 1000202
                ? "Kristen"
                : props.getUsersDetail.agama === 1000203
                ? "Katolik"
                : props.getUsersDetail.agama === 1000204
                ? "Hindu"
                : props.getUsersDetail.agama === 1000205
                ? "Budha"
                : ""}
            </td>
          </tr>
          <tr>
            <td width="200">suku</td>
            <td width="10">:</td>
            <td>
              {props.getUsersDetail.suku === 1000501
                ? "Jawa"
                : props.getUsersDetail.suku === 1000502
                ? "Sunda"
                : props.getUsersDetail.suku === 1000503
                ? "Lampung"
                : props.getUsersDetail.suku === 1000504
                ? "Bugis"
                : props.getUsersDetail.suku === 1000505
                ? "Palembang"
                : props.getUsersDetail.suku === 1000506
                ? "Padang"
                : ""}
            </td>
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
