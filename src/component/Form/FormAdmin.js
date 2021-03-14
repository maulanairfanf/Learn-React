import React, { Component } from "react";
import { Form, FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import AdminValidation from "../../Validations/AdminValidation";

const mapStateToProps = (state) => {
  return {
    initialValues: {
      id: state.admin.postRegister.id,
      username: state.admin.postRegister.username,
      password: state.admin.postRegister.password,
      email: state.admin.postRegister.email,
      telp: state.admin.postRegister.telp,
    },
  };
};

class FormAdmin extends Component {
  constructor(props) {
    super(props);
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
        <Input
          {...input}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          required
        ></Input>
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
          {/* <h4 className="text-black-50 mt-4">Register </h4> */}
          <FormGroup row>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="text"
                  name="username"
                  component={this.renderField}
                  label="Username"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="password"
                  name="password"
                  component={this.renderField}
                  label="Password"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="number"
                  name="telp"
                  component={this.renderField}
                  label="Nomor Telpon"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Field
                  type="email"
                  name="email"
                  component={this.renderField}
                  label="Email"
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

FormAdmin = reduxForm({
  form: "CreateAdmin",
  validate: AdminValidation,
  enableReinitialize: true,
})(FormAdmin);
export default connect(mapStateToProps, null)(FormAdmin);
