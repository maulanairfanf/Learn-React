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
      id: state.panen.getPanenDetail.id,
      total_panen: state.panen.getPanenDetail.id_petani,
      id_instansi: state.panen.getPanenDetail.id_instansi,
      kategori: state.panen.getPanenDetail.kategori,
      varietas: state.panen.getPanenDetail.varietas,
      total_panen: state.panen.getPanenDetail.total_panen,
      satuan: state.panen.getPanenDetail.satuan,
      tgl_tanam: state.panen.getPanenDetail.tgl_tanam,
      tgl_panen: state.panen.getPanenDetail.tgl_panen,
      id_lahan: state.panen.getPanenDetail.id_lahan,
      keterangan: state.panen.getPanenDetail.keterangan,
      foto_panen: state.panen.getPanenDetail.foto_panen,
    },
  };
};

class FormComponentPanen extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_petani"
                component={renderField}
                label="id_petani"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_instansi"
                component={renderField}
                label="id_instansi"
              />
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
                type="text"
                name="varietas"
                component={renderField}
                label="Varietas"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="total_panen"
                component={renderField}
                label="total panen"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="satuan"
                component={renderField}
                label="satuan"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="date"
                name="tgl_tanam"
                component={renderField}
                label="tgl tanam"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="date"
                name="tgl_panen"
                component={renderField}
                label="tgl panen"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_lahan"
                component={renderField}
                label="ID Lahan"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="keterangan"
                component={renderField}
                label="Keterangan"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="foto_panen"
                component={renderField}
                label="foto_panen"
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

FormComponentPanen = reduxForm({
  form: "CreatePanen",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponentPanen);
export default connect(mapStateToProps, null)(FormComponentPanen);
