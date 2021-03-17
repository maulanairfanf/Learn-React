import React, { Component } from "react";
import { Form, FormGroup, Col, Label, Input, Row } from "reactstrap";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { putUsersUpdateImage, delleteDataPict } from "../../actions/userAction";
import swal from "sweetalert";
import Photo from "../../assets/user.png";

const mapStateToProps = (state) => {
  return {
    initialValues: {
      id: state.users.getUsersDetail.id,
      foto_profil: state.users.getUsersDetail.foto_profil,
      foto_kk: state.users.getUsersDetail.foto_kk,
      foto_ktp: state.users.getUsersDetail.foto_ktp,
    },
    image: {
      getResponseDataPict: state.users.getResponseDataPict,
      errorResponseDataPict: state.users.errorResponseDataPict,
    },
  };
};

class FormPict extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        {label === "Foto KTP" ? (
          <>
            <Input
              {...input}
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={(e) => {
                e.preventDefault();

                let { file } = this.state;

                file = e.target.files[0];

                this.getBase64(file)
                  .then((result) => {
                    file["base64"] = result;
                    console.log("File Is", file.base64);
                    this.value = file.base64;
                    console.log(this.props.initialValues.id);
                    this.props.dispatch(
                      putUsersUpdateImage({
                        id: this.props.initialValues.id,
                        foto_ktp: this.value,
                      })
                    );

                    console.log(this.value);
                    this.setState({
                      base64URL: result,
                      file,
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            ></Input>
          </>
        ) : label === "Foto Profil" ? (
          <>
            <Input
              {...input}
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={(e) => {
                e.preventDefault();

                let { file } = this.state;

                file = e.target.files[0];

                this.getBase64(file)
                  .then((result) => {
                    file["base64"] = result;
                    console.log("File Is", file.base64);
                    this.value = file.base64;
                    console.log(this.props.initialValues.id);
                    this.props.dispatch(
                      putUsersUpdateImage({
                        id: this.props.initialValues.id,
                        foto_profil: this.value,
                      })
                    );
                    console.log(this.value);
                    this.setState({
                      base64URL: result,
                      file,
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            ></Input>
          </>
        ) : label === "Foto KK" ? (
          <>
            <Input
              {...input}
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={(e) => {
                e.preventDefault();

                let { file } = this.state;

                file = e.target.files[0];

                this.getBase64(file)
                  .then((result) => {
                    file["base64"] = result;
                    console.log("File Is", file.base64);
                    this.value = file.base64;
                    console.log(this.props.initialValues.id);
                    this.props.dispatch(
                      putUsersUpdateImage({
                        id: this.props.initialValues.id,
                        foto_kk: this.value,
                      })
                    );
                    console.log(this.value);
                    this.setState({
                      base64URL: result,
                      file,
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            ></Input>
          </>
        ) : (
          <></>
        )}

        {touched &&
          ((error && <small style={{ color: "red" }}>{error}</small>) ||
            (warning && <span style={{ color: "brown" }}>{warning}</span>))}
      </Col>
    </Row>
  );

  baseURL = "localhost:8000";

  render() {
    console.log(this.props.image);
    if (
      this.props.image.getResponseDataPict ||
      this.props.image.errorResponseDataPict
    ) {
      if (this.props.image.errorResponseDataPict) {
        swal("Failed!", this.props.image.errorResponseDataPict, "error");
        this.props.dispatch(delleteDataPict());
      } else {
        this.props.dispatch(delleteDataPict());
        swal({
          title: "Foto Updated !",
          icon: "success",
          button: "Oke",
        });
      }
    }
    {
      console.log(this.props.initialValues.foto_kk);
    }
    return (
      <>
        <Form onSubmit={this.props.handleSubmit}>
          <FormGroup row>
            <Col md={4}>
              {this.props.initialValues.foto_ktp ? (
                <div style={{ width: "50px", height: "50px" }}>
                  <img
                    className=" h-100 w-100"
                    src={this.baseURL + this.props.initialValues.foto_ktp}
                  />
                </div>
              ) : (
                <div
                  style={{ width: "100px", height: "100px" }}
                  className=" border border-secondary"
                >
                  <img className=" h-100 w-100" src={Photo} />
                </div>
              )}
              <Field
                type="file"
                name="foto_ktp"
                component={this.renderField}
                label="Foto KTP"
              />
            </Col>
            <Col md={4}>
              {this.props.initialValues.foto_profil ? (
                <div style={{ width: "50px", height: "50px" }}>
                  <img
                    className=" h-100 w-100"
                    src={this.baseURL + this.props.initialValues.foto_profil}
                  />
                </div>
              ) : (
                <div
                  style={{ width: "100px", height: "100px" }}
                  className=" border border-secondary"
                >
                  <img className=" h-100 w-100" src={Photo} />
                </div>
              )}
              <Field
                type="file"
                name="foto_profil"
                component={this.renderField}
                label="Foto Profil"
              />
            </Col>
            <Col md={4}>
              {this.props.initialValues.foto_kk ? (
                <div style={{ width: "50px", height: "50px" }}>
                  <img
                    className=" h-100 w-100"
                    src={this.baseURL + this.props.initialValues.foto_kk}
                  />
                </div>
              ) : (
                <div
                  style={{ width: "100px", height: "100px" }}
                  className=" border border-secondary"
                >
                  <img className=" h-100 w-100" src={Photo} />
                </div>
              )}
              <Field
                type="file"
                name="foto_kk"
                component={this.renderField}
                label="Foto KK"
              />
            </Col>
          </FormGroup>
        </Form>
      </>
    );
  }
}

FormPict = reduxForm({
  form: "UpdateImage",
  // validate: UserValidation,
  enableReinitialize: true,
})(FormPict);
export default connect(mapStateToProps, null)(FormPict);
