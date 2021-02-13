import React, { Component } from "react";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import CreateUser from "../../pages/PrivatePages/CreateUser/CreateUser";
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
      nama: state.users.getUsersDetail.nama,
      nik: state.users.getUsersDetail.nik,
      //   nohp: state.users.getUserDetail.nohp,
      //   alamat: state.users.getUserDetail.alamat,
      //   umur: state.users.getUserDetail.umur,
    },
  };
};

class FormComponent extends Component {
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
                name="nik"
                component={renderField}
                label="Nik :"
              />
            </FormGroup>
          </Col>

          {/* <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="alamat"
                component={renderField}
                label="Alamat :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nohp"
                component={renderField}
                label="No HP :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="umur"
                component={renderField}
                label="Umur :"
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

FormComponent = reduxForm({
  form: "CreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);
export default connect(mapStateToProps, null)(FormComponent);
