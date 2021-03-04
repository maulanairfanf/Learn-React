import React, { Component, useState, useEffect } from "react";
import { Form, FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import { connect } from "react-redux";
import { reduxForm, Field, arrayInsert } from "redux-form";
import UserValidation from "../../Validations/UserValidation";
import Photo from "../../assets/user.png";
import {
  getProvinsiList,
  getKabupatenList,
  getKecamatanList,
  getKelurahanList,
} from "../../actions/masterAction";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    initialValues: {
      id: state.users.getUsersDetail.id,
      nama: state.users.getUsersDetail.nama,
      nik: state.users.getUsersDetail.nik,
      kk: state.users.getUsersDetail.kk,
      kategori: state.users.getUsersDetail.kategori,
      pekerjaan: state.users.getUsersDetail.pekerjaan,
      gender: state.users.getUsersDetail.gender,
      agama: state.users.getUsersDetail.agama,
      suku: state.users.getUsersDetail.suku,
      tgl_lahir: state.users.getUsersDetail.tgl_lahir,
      pendidikan: state.users.getUsersDetail.pendidikan,
      alamat: state.users.getUsersDetail.alamat,
      rt: state.users.getUsersDetail.rt,
      rw: state.users.getUsersDetail.rw,
      id_desa: state.users.getUsersDetail.id_desa,
      id_kecamatan: state.users.getUsersDetail.id_kecamatan,
      id_kabupaten: state.users.getUsersDetail.id_kabupaten,
      id_provinsi: state.users.getUsersDetail.id_provinsi,
      kodepos: state.users.getUsersDetail.kodepos,
      foto_profil: state.users.getUsersDetail.foto_profil,
      foto_kk: state.users.getUsersDetail.foto_kk,
      foto_ktp: state.users.getUsersDetail.foto_ktp,
      gol_darah: state.users.getUsersDetail.gol_darah,
      telp: state.users.getUsersDetail.telp,
      email: state.users.getUsersDetail.email,
      facebook: state.users.getUsersDetail.facebook,
      id_user: state.users.getUsersDetail.id_user,
    },
    wilayah: {
      provinsi: state.master.getProvinsiList,
      kabupaten: state.master.getKabupatenList,
      kecamatan: state.master.getKecamatanList,
      kelurahan: state.master.getKelurahanList,
    },
  };
};

class FormComponentUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_provinsi: 0,
      id_kabupaten: 0,
      id_kecamatan: 0,
      id_kelurahan: 0,
    };
  }

  getProvinsi(provinsi) {
    const x = provinsi;

    return x;
  }
  renderField = ({
    input,
    type,
    placeholder,
    label,
    value,
    meta: { touched, error, warning },
  }) => (
    <Row>
      <Col md="12">
        <Label htmlFor="{label}" className="col-form-label text-secondary">
          {label}
        </Label>
      </Col>
      <Col md="12">
        {label === "Gender" ? (
          <>
            <Input {...input} type={type} placeholder={placeholder}>
              <option value={0}></option>
              <option value={1000601}>Petani</option>
              <option value={1000101}>Laki-laki</option>
              <option value={1000102}>Perempuan</option>
            </Input>
          </>
        ) : label === "Agama" ? (
          <Input {...input} type={type} placeholder={placeholder}>
            <option value={0}></option>
            <option value={1000601}>Petani</option>
            <option value={1000201}>Islam</option>
            <option value={1000202}>Kristen</option>
            <option value={1000203}>Katolik</option>
            <option value={1000204}>Hindu</option>
            <option value={1000205}>Budha</option>
          </Input>
        ) : label === "Pendidikan" ? (
          <Input {...input} type={type} placeholder={placeholder}>
            <option value={0}></option>
            <option value={1000601}>Petani</option>
            <option value={1000301}>Tidak Sekolah</option>
            <option value={1000302}>SD</option>
            <option value={1000303}>SMP</option>
            <option value={1000304}>S1</option>
            <option value={1000306}>S2</option>
            <option value={1000307}>S3</option>
          </Input>
        ) : label === "Suku" ? (
          <>
            <Input {...input} type={type} placeholder={placeholder}>
              <option value={0}></option>
              <option value={1000601}>Petani</option>
              <option value={1000501}>Jawa</option>
              <option value={1000502}>Sunda</option>
              <option value={1000503}>Lampung</option>
              <option value={1000504}>Bugis</option>
              <option value={1000505}>Palembang</option>
              <option value={1000501}>Padang</option>
            </Input>
          </>
        ) : label === "Pekerjaan" ? (
          <>
            <Input {...input} type={type} placeholder={placeholder}>
              <option value={0}></option>
              <option value={1000601}>Petani</option>
              <option value={1000602}>Buruh</option>
              <option value={1000603}>ASN</option>
              <option value={1000604}>Pedagang</option>
              <option value={1000605}>Penyuluh</option>
              <option value={1000606}>Dosen</option>
              <option value={1000607}>Pegawai Swasta</option>
              <option value={1000608}>Honorer</option>
            </Input>
          </>
        ) : label === "Golongan Darah" ? (
          <>
            <Input {...input} type={type} placeholder={placeholder}>
              <option value={0}></option>
              <option value={1000601}>Petani</option>
              <option value={1000401}>A</option>
              <option value={1000402}>B</option>
              <option value={1000403}>AB</option>
              <option value={1000404}>O</option>
            </Input>
          </>
        ) : label === "Kategori" ? (
          <>
            <Input {...input} type={type} placeholder={placeholder}>
              <option value={0}></option>
              <option value={1000601}>Petani</option>
              <option value={1000001}>Personal</option>
              <option value={1000002}>Institution</option>
            </Input>
          </>
        ) : label === "Provinsi" ? (
          <>
            <Input
              {...input}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                e.preventDefault();
                this.setState({
                  id_provinsi: e.target.selectedOptions[0].id,
                  id_kabupaten: 0,
                  id_kecamatan: 0,
                  id_kelurahan: 0,
                });

                this.props.dispatch(
                  getKabupatenList(e.target.selectedOptions[0].id)
                );
                {
                  console.log("id provinsi : ", e.target.selectedOptions[0].id);
                  console.log(e);
                }
              }}
            >
              <option value={0}>Provinsi</option>
              {this.props.wilayah.provinsi &&
                this.props.wilayah.provinsi.map((item, i) => {
                  return (
                    <option
                      key={item.provinsi}
                      value={item.id}
                      id={item.provinsi}
                    >
                      {item.nama}
                    </option>
                  );
                })}
            </Input>
          </>
        ) : label === "Kabupaten" ? (
          <>
            <Input
              {...input}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                e.preventDefault();
                this.setState({
                  id_kabupaten: e.target.selectedOptions[0].id,
                  id_kecamatan: 0,
                  id_kelurahan: 0,
                });
                this.props.dispatch(
                  getKecamatanList(
                    this.state.id_provinsi,
                    e.target.selectedOptions[0].id
                  )
                );
                console.log("id kabupaten : ", e.target.selectedOptions[0].id);
                console.log(e);
              }}
            >
              <option value={0}>Kabupaten / Kota</option>
              {this.props.wilayah.kabupaten &&
                this.props.wilayah.kabupaten.map((item) => {
                  return (
                    <>
                      <option value={item.id} id={item.kabupatenkota}>
                        {item.nama}
                      </option>
                    </>
                  );
                })}
            </Input>
          </>
        ) : label === "Kecamatan" ? (
          <>
            <Input
              {...input}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                e.preventDefault();
                this.setState({
                  id_kecamatan: e.target.selectedOptions[0].id,
                  id_kelurahan: 0,
                });
                this.props.dispatch(
                  getKelurahanList(
                    this.state.id_provinsi,
                    this.state.id_kabupaten,
                    e.target.selectedOptions[0].id
                  )
                );
                console.log(e);
                console.log("id kecamatan : ", e.target.selectedOptions[0].id);
              }}
            >
              <option value={0}>Kecamatan</option>
              {this.props.wilayah.kecamatan &&
                this.props.wilayah.kecamatan.map((item) => {
                  return (
                    <option value={item.id} id={item.kecamatan}>
                      {item.nama}
                    </option>
                  );
                })}
            </Input>
          </>
        ) : label === "Kelurahan" ? (
          <>
            <Input
              {...input}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                e.preventDefault();
                this.setState({
                  id_kelurahan: e.target.selectedOptions[0].id,
                });
                console.log("Id kelurahan : ", e.target.selectedOptions[0].id);
              }}
            >
              <option value={0}>Kelurahan</option>
              {this.props.wilayah.kelurahan &&
                this.props.wilayah.kelurahan.map((item) => {
                  return (
                    <option value={item.id} id={item.kelurahan}>
                      {item.nama}
                    </option>
                  );
                })}
            </Input>
          </>
        ) : (
          <>
            <Input
              {...input}
              type={type}
              placeholder={placeholder}
              autoComplete="off"
            ></Input>
          </>
        )}

        {touched &&
          ((error && <small style={{ color: "red" }}>{error}</small>) ||
            (warning && <span style={{ color: "brown" }}>{warning}</span>))}
      </Col>
    </Row>
  );

  render() {
    return (
      <>
        <Form onSubmit={this.props.handleSubmit}>
          <FormGroup row>
            <Col md={2}>
              <div>
                <img
                  src={Photo}
                  className="img-thumbnail"
                  style={{ width: "120px" }}
                  alt="..."
                ></img>
              </div>
              <div className="mt-2 ">
                <button type="button" className="btn btn-outline-secondary">
                  Pilih Foto
                </button>
              </div>
            </Col>
          </FormGroup>
          <h4 className="text-black-50 mt-4">Identitas</h4>
          <FormGroup row>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="text"
                  name="nama"
                  component={this.renderField}
                  label="Nama"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="text"
                  name="email"
                  component={this.renderField}
                  label="Email"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="number"
                  name="telp"
                  component={this.renderField}
                  label="Nomor Telepon"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="number"
                  name="nik"
                  component={this.renderField}
                  label="NIK"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="number"
                  name="kk"
                  component={this.renderField}
                  label="Kartu Keluarga"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="select"
                  name="kategori"
                  component={this.renderField}
                  label="Kategori"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="select"
                  name="pekerjaan"
                  component={this.renderField}
                  label="Pekerjaan"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  label="Gender"
                  name="gender"
                  type="select"
                  component={this.renderField}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  name="agama"
                  type="select"
                  component={this.renderField}
                  label="Agama"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="select"
                  name="suku"
                  component={this.renderField}
                  label="Suku"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="date"
                  name="tgl_lahir"
                  component={this.renderField}
                  label="Tanggal Lahir"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="select"
                  name="pendidikan"
                  component={this.renderField}
                  label="Pendidikan"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="select"
                  name="gol_darah"
                  component={this.renderField}
                  label="Golongan Darah"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="text"
                  name="facebook"
                  component={this.renderField}
                  label="Facebook"
                />
              </FormGroup>
            </Col>
          </FormGroup>
          <h4 className="text-black-50 mt-4">Lokasi</h4>
          <FormGroup row>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="text"
                  name="alamat"
                  component={this.renderField}
                  label="Alamat"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="text"
                  name="rt"
                  component={this.renderField}
                  label="RT"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="text"
                  name="rw"
                  component={this.renderField}
                  label="RW"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="select"
                  name="id_provinsi"
                  component={this.renderField}
                  label="Provinsi"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="select"
                  name="id_kabupaten"
                  component={this.renderField}
                  label="Kabupaten"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="select"
                  name="id_kecamatan"
                  component={this.renderField}
                  label="Kecamatan"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="select"
                  name="id_desa"
                  component={this.renderField}
                  label="Kelurahan"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="number"
                  name="kodepos"
                  component={this.renderField}
                  label="KodePos"
                />
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="12">
              <FormGroup>
                <Button
                  color="info"
                  type="submit"
                  disabled={this.props.submitting}
                >
                  Simpan
                </Button>
              </FormGroup>
            </Col>
          </FormGroup>
        </Form>
      </>
    );
  }
}

FormComponentUser = reduxForm({
  form: "CreateUser",
  // validate: UserValidation,
  enableReinitialize: true,
})(FormComponentUser);
export default connect(mapStateToProps, null)(FormComponentUser);
