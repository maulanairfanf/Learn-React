import React, { Component } from "react";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import UserValidation from "../../Validations/UserValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{label}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      {label === "gender" ? (
        <>
          <Input
            {...input}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
          >
            <option value={1000101}>Laki-laki</option>
            <option value={1000102}>Perempuan</option>
          </Input>
        </>
      ) : label === "agama" ? (
        <>
          <Input
            {...input}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
          >
            <option value={1000201}>Islam</option>
            <option value={1000202}>Kristen</option>
            <option value={1000203}>Katolik</option>
            <option value={1000204}>Hindu</option>
            <option value={1000205}>Budha</option>
          </Input>
        </>
      ) : label === "pendidikan" ? (
        <>
          <Input
            {...input}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
          >
            <option value={1000301}>Tidak Sekolah</option>
            <option value={1000302}>SD</option>
            <option value={1000303}>SMP</option>
            <option value={1000304}>S1</option>
            <option value={1000306}>S2</option>
            <option value={1000307}>S3</option>
          </Input>
        </>
      ) : label === "suku" ? (
        <>
          <Input
            {...input}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
          >
            <option value={1000501}>Jawa</option>
            <option value={1000502}>Sunda</option>
            <option value={1000503}>Lampung</option>
            <option value={1000504}>Bugis</option>
            <option value={1000505}>Palembang</option>
            <option value={1000501}>Padang</option>
          </Input>
        </>
      ) : label === "pekerjaan" ? (
        <>
          <Input
            {...input}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
          >
            <option value={1000601}>Petani</option>
            <option value={1000602}>Buruh</option>
            <option value={1000603}>ASN</option>
            <option value={1000604}>Pedagang</option>
            <option value={1000605}>Penyuluh</option>
            <option value={1000606}>Dosen</option>
            <option value={1000001}>Pegawai Swasta</option>
            <option value={1000002}>Honorer</option>
          </Input>
        </>
      ) : (
        <>
          <Input
            {...input}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
          ></Input>
        </>
      )}

      {/* 
        <option value={1000401}>A</option>
        <option value={1000402}>B</option>
        <option value={1000403}>AB</option>
         */}

      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      nama: state.users.getUsersDetail.nama,
      email: state.users.getUsersDetail.email,
      telp: state.users.getUsersDetail.telp,
      id: state.users.getUsersDetail.id,
      nik: state.users.getUsersDetail.nik,
      kk: state.users.getUsersDetail.kk,
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
    },
  };
};

class FormComponentUser extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nama"
                component={renderField}
                label="Nama"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="email"
                component={renderField}
                label="Email"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="telp"
                component={renderField}
                label="telp"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nik"
                component={renderField}
                label="Nik"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field type="text" name="kk" component={renderField} label="kk" />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="kategori"
                component={renderField}
                label="kategori"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="select"
                name="pekerjaan"
                component={renderField}
                label="pekerjaan"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                label="gender"
                type="select"
                name="gender"
                component={renderField}
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="select"
                name="agama"
                component={renderField}
                label="agama"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="select"
                name="suku"
                component={renderField}
                label="suku"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="tgl_lahir"
                component={renderField}
                label="tgl_lahir"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="pendidikan"
                component={renderField}
                label="pendidikan"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="alamat"
                component={renderField}
                label="alamat"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field type="text" name="rt" component={renderField} label="rt" />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field type="text" name="rw" component={renderField} label="rw" />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_desa"
                component={renderField}
                label="id_desa"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_kecamatan"
                component={renderField}
                label="id_kecamatan"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_kabupaten"
                component={renderField}
                label="id_kabupaten"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_provinsi"
                component={renderField}
                label="id_provinsi"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="kodepos"
                component={renderField}
                label="kodepos"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="facebook"
                component={renderField}
                label="facebook"
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormComponentUser = reduxForm({
  form: "CreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponentUser);
export default connect(mapStateToProps, null)(FormComponentUser);
