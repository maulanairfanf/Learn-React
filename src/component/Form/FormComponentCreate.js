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
  value,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        value={value}
      >
        <option value={1}>Laki-laki</option>
        <option value={2}>Perempuan</option>
      </Input>
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

class FormComponentCreate extends Component {
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
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
                label="Nama :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="email"
                component={renderField}
                label="Email :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="telp"
                component={renderField}
                label="telp :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nik"
                component={renderField}
                label="Nik :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="kk"
                component={renderField}
                label="kk :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="kategori"
                component={renderField}
                label="kategori :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="pekerjaan"
                component={renderField}
                label="pekerjaan :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                label="gender : "
                type="select"
                name="gender"
                component={renderField}
                placeholder="laki - laki / perempuan"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="agama"
                component={renderField}
                label="agama :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="suku"
                component={renderField}
                label="suku :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="tgl_lahir"
                component={renderField}
                label="tgl_lahir :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="pendidikan"
                component={renderField}
                label="pendidikan :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="alamat"
                component={renderField}
                label="alamat :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="rt"
                component={renderField}
                label="rt :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="rw"
                component={renderField}
                label="rw :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_desa"
                component={renderField}
                label="id_desa :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_kecamatan"
                component={renderField}
                label="id_kecamatan :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_kabupaten"
                component={renderField}
                label="id_kabupaten :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_provinsi"
                component={renderField}
                label="id_provinsi :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="kodepos"
                component={renderField}
                label="kodepos :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="facebook"
                component={renderField}
                label="facebook :"
              />
            </FormGroup>
          </Col>

          {/* <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id"
                component={renderField}
                label="Id :"
                disabled
              />
            </FormGroup>
          </Col> */}
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

FormComponentCreate = reduxForm({
  form: "CreateUser",
  validate: UserValidation,
  enableReinitialize: false,
})(FormComponentCreate);
export default connect(mapStateToProps, null)(FormComponentCreate);
