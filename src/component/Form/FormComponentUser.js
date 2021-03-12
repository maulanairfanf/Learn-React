import React, { Component, useState, useEffect } from "react";
import { Form, FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import UserValidation from "../../Validations/UserValidation";
import Photo from "../../assets/user.png";
import {
  getProvinsiList,
  getKabupatenList,
  getKecamatanList,
  getKelurahanList,
  getGenderList,
  getAgamaList,
  getPendidikanList,
  getGolonganDarahList,
  getSukuList,
  getPekerjaanList,
  getTipeUserList,
  getSatuanList,
} from "../../actions/masterAction";
import { putUsersUpdateImage } from "../../actions/userAction";

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
    master: {
      provinsi: state.master.getProvinsiList,
      kabupaten: state.master.getKabupatenList,
      kecamatan: state.master.getKecamatanList,
      kelurahan: state.master.getKelurahanList,
      gender: state.master.getGenderList,
      agama: state.master.getAgamaList,
      pendidikan: state.master.getPendidikanList,
      golonganDarah: state.master.getGolonganDarahList,
      suku: state.master.getSukuList,
      pekerjaan: state.master.getPekerjaanList,
      tipeUser: state.master.getTipeUserList,

      satuan: state.master.getSatuanList,
    },
  };
};

class FormComponentUser extends Component {
  componentDidMount() {
    this.props.dispatch(getProvinsiList());
    this.props.dispatch(getGenderList());
    this.props.dispatch(getAgamaList());
    this.props.dispatch(getPendidikanList());
    this.props.dispatch(getGolonganDarahList());
    this.props.dispatch(getSukuList());
    this.props.dispatch(getPekerjaanList());
    this.props.dispatch(getTipeUserList());

    this.props.dispatch(getSatuanList());
  }
  constructor(props) {
    super(props);
    this.state = {
      id_provinsi: 0,
      id_kabupaten: 0,
      id_kecamatan: 0,
      id_kelurahan: 0,
      file: null,
      base64URL: "",
    };
  }
  getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        // console.log("Called", reader);
        baseURL = reader.result;
        // console.log(baseURL);
        resolve(baseURL);
      };
      // console.log(fileInfo);
    });
  };

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

              {this.props.master.gender &&
                this.props.master.gender.map((item, i) => {
                  return (
                    <>
                      <option key={i.id} value={item.id}>
                        {item.nama}
                      </option>
                    </>
                  );
                })}
            </Input>
          </>
        ) : label === "Agama" ? (
          <Input {...input} type={type} placeholder={placeholder}>
            <option value={0}></option>
            {this.props.master.agama &&
              this.props.master.agama.map((item, i) => {
                return (
                  <>
                    <option key={i.id} value={item.id}>
                      {item.nama}
                    </option>
                  </>
                );
              })}
          </Input>
        ) : label === "Pendidikan" ? (
          <Input {...input} type={type} placeholder={placeholder}>
            <option value={0}></option>

            {this.props.master.pendidikan &&
              this.props.master.pendidikan.map((item, i) => {
                return (
                  <>
                    <option key={i.id} value={item.id}>
                      {item.nama}
                    </option>
                  </>
                );
              })}
          </Input>
        ) : label === "Suku" ? (
          <>
            <Input {...input} type={type} placeholder={placeholder}>
              <option value={0}></option>

              {this.props.master.suku &&
                this.props.master.suku.map((item, i) => {
                  return (
                    <>
                      <option key={i.id} value={item.id}>
                        {item.nama}
                      </option>
                    </>
                  );
                })}
            </Input>
          </>
        ) : label === "Pekerjaan" ? (
          <>
            <Input {...input} type={type} placeholder={placeholder}>
              <option value={0}></option>
              {this.props.master.pekerjaan &&
                this.props.master.pekerjaan.map((item, i) => {
                  return (
                    <>
                      <option key={i.id} value={item.id}>
                        {item.nama}
                      </option>
                    </>
                  );
                })}
            </Input>
          </>
        ) : label === "Golongan Darah" ? (
          <>
            <Input {...input} type={type} placeholder={placeholder}>
              <option value={0}></option>
              {this.props.master.golonganDarah &&
                this.props.master.golonganDarah.map((item, i) => {
                  return (
                    <>
                      <option key={i.id} value={item.id}>
                        {item.nama}
                      </option>
                    </>
                  );
                })}
            </Input>
          </>
        ) : label === "Tipe User" ? (
          <>
            <Input {...input} type={type} placeholder={placeholder}>
              <option value={0}></option>
              {this.props.master.tipeUser &&
                this.props.master.tipeUser.map((item, i) => {
                  return (
                    <>
                      <option key={i.id} value={item.id}>
                        {item.nama}
                      </option>
                    </>
                  );
                })}
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
                }
              }}
            >
              <option value={0}>Provinsi</option>
              {this.props.master.provinsi &&
                this.props.master.provinsi.map((item, i) => {
                  return (
                    <option key={i.id} value={item.id} id={item.provinsi}>
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
              }}
            >
              <option value={0}>Kabupaten / Kota</option>
              {this.props.master.kabupaten &&
                this.props.master.kabupaten.map((item, i) => {
                  return (
                    <>
                      <option
                        key={i.id}
                        value={item.id}
                        id={item.kabupatenkota}
                      >
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

                console.log("id kecamatan : ", e.target.selectedOptions[0].id);
              }}
            >
              <option value={0}>Kecamatan</option>
              {this.props.master.kecamatan &&
                this.props.master.kecamatan.map((item, i) => {
                  return (
                    <option key={i.id} value={item.id} id={item.kecamatan}>
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
              {this.props.master.kelurahan &&
                this.props.master.kelurahan.map((item, i) => {
                  return (
                    <option key={i.id} value={item.id} id={item.kelurahan}>
                      {item.nama}
                    </option>
                  );
                })}
            </Input>
          </>
        ) : (
          // ) : label === "Foto KTP" ? (
          //   <>
          //     <Input
          //       {...input}
          //       type={type}
          //       value={value}
          //       placeholder={placeholder}
          //       onChange={(e) => {
          //         e.preventDefault();

          //         let { file } = this.state;

          //         file = e.target.files[0];

          //         this.getBase64(file)
          //           .then((result) => {
          //             file["base64"] = result;
          //             console.log("File Is", file.base64);
          //             this.value = file.base64;
          //             console.log(this.props.initialValues.id);
          //             this.props.dispatch(
          //               putUsersUpdateImage({
          //                 id: this.props.initialValues.id,
          //                 foto_ktp: this.value,
          //               })
          //             );
          //             console.log(this.value);
          //             this.setState({
          //               base64URL: result,
          //               file,
          //             });
          //           })
          //           .catch((err) => {
          //             console.log(err);
          //           });
          //       }}
          //     ></Input>
          //   </>
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
                  label="Tipe User"
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
