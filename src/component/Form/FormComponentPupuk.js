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
      id: state.pupuk.getPupukDetail.id,
      jenis_pupuk: state.pupuk.getPupukDetail.jenis_pupuk,
      kapasitas: state.pupuk.getPupukDetail.kapasitas,
      satuan: state.pupuk.getPupukDetail.satuan,
      id_poktan: state.pupuk.getPupukDetail.id_poktan,
      id_petani: state.pupuk.getPupukDetail.id_petani,
      tgl_distribusi: state.pupuk.getPupukDetail.tgl_distribusi,
      id_instansi: state.pupuk.getPupukDetail.id_instansi,
    },
  };
};

class FormComponentPupuk extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="jenis_pupuk"
                component={renderField}
                label="Jenis :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="kapasitas"
                component={renderField}
                label="Kapasitas :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="satuan"
                component={renderField}
                label="Satuan :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_poktan"
                component={renderField}
                label="ID Poktan :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_petani"
                component={renderField}
                label="ID Petani :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="tgl_distribusi"
                component={renderField}
                label="Tanggal Terdistribusi :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_instansi"
                component={renderField}
                label="ID Instansi :"
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

FormComponentPupuk = reduxForm({
  form: "CreatePupuk",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponentPupuk);
export default connect(mapStateToProps, null)(FormComponentPupuk);
