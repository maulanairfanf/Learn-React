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
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      id: state.lahan.getLahanDetail.id,
      kategori: state.lahan.getLahanDetail.kategori,
      luas: state.lahan.getLahanDetail.luas,
      satuan: state.lahan.getLahanDetail.satuan,
      alamat: state.lahan.getLahanDetail.alamat,
      usia_tanam: state.lahan.getLahanDetail.usia_tanam,
      id_petani: state.lahan.getLahanDetail.id_petani,
      id_instansi: state.lahan.getLahanDetail.id_instansi,
      id_desa: state.lahan.getLahanDetail.id_desa,
      id_kecamatan: state.lahan.getLahanDetail.id_kecamatan,
      id_kabupaten: state.lahan.getLahanDetail.id_kabupaten,
      id_provinsi: state.lahan.getLahanDetail.id_provinsi,
    },
  };
};

class FormComponentLahan extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="kategori"
                component={renderField}
                label="Kategori"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="luas"
                component={renderField}
                label="Luas"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="alamat"
                component={renderField}
                label="Alamat"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="usia_tanam"
                component={renderField}
                label="Usia Tanam"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_petani"
                component={renderField}
                label="ID Petani"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_instansi"
                component={renderField}
                label="ID Instansi"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_desa"
                component={renderField}
                label="ID Desa"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_kecamatan"
                component={renderField}
                label="ID Kecamatan"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_kabupaten"
                component={renderField}
                label="ID Kabupaten"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_provinsi"
                component={renderField}
                label="ID Provinsi"
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

FormComponentLahan = reduxForm({
  form: "CreateLahan",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponentLahan);
export default connect(mapStateToProps, null)(FormComponentLahan);
