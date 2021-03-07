import React, { Component } from "react";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import UserValidation from "../../Validations/UserValidation";
import { getUsersList } from "../../actions/userAction";
import { getTipeUserList } from "../../actions/masterAction";

const mapStateToProps = (state) => {
  return {
    initialValues: {
      id: state.pupuk.getPupukDetail.id,
      jenis_pupuk: state.pupuk.getPupukDetail.jenis_pupuk,
      kapasitas: state.pupuk.getPupukDetail.kapasitas,
      satuan: state.pupuk.getPupukDetail.satuan,
      id_poktan: state.pupuk.getPupukDetail.id_poktan,
      poktan: state.pupuk.getPupukDetail.poktann,
      id_petani: state.pupuk.getPupukDetail.id_petani,
      petani: state.pupuk.getPupukDetail.petani,
      tgl_distribusi: state.pupuk.getPupukDetail.tgl_distribusi,
      instansi: state.pupuk.getPupukDetail.instansi,
      keterangan: state.pupuk.getPupukDetail.keterangan,
    },
    user: {
      petani: state.users.getUsersList,
    },
    master: {
      tipeUser: state.master.getTipeUserList,
    },
  };
};

class FormComponentPupuk extends Component {
  componentDidMount() {
    this.props.dispatch(getTipeUserList());
    this.props.dispatch(getUsersList());
  }
  renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    meta: { touched, error, warning },
  }) => (
    <Row>
      <Col md="12">
        <Label htmlFor="{input}" className="col-form-label">
          {label}
        </Label>
      </Col>
      <Col md="12">
        {label === "Satuan" ? (
          <>
            <Input {...input} type={type} placeholder={placeholder}>
              <option value={101}>Kg</option>
            </Input>
          </>
        ) : label === "Petani" ? (
          <Input {...input} type={type} placeholder={placeholder}>
            <option value={0}></option>
            {this.props.user.petani &&
              this.props.user.petani.map((item) => {
                return <option value={item.id}>{item.nama}</option>;
              })}
          </Input>
        ) : (
          <Input
            {...input}
            type={type}
            placeholder={placeholder}
            autoComplete="off"
          />
        )}
        {touched &&
          ((error && <small style={{ color: "red" }}>{error}</small>) ||
            (warning && <small style={{ color: "brown" }}>{warning}</small>))}
      </Col>
    </Row>
  );
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={4}>
            <FormGroup>
              <Field
                type="text"
                name="jenis_pupuk"
                component={this.renderField}
                label="Jenis"
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Field
                type="number"
                name="kapasitas"
                component={this.renderField}
                label="Kapasitas"
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Field
                type="select"
                name="satuan"
                component={this.renderField}
                label="Satuan"
              />
            </FormGroup>
          </Col>
          {/* 
            <Col md={4}>
              <FormGroup>
                <Field
                  type="text"
                  name="poktan"
                  component={this.renderField}
                  label="Poktan"
                  disabled
                />
              </FormGroup>
            </Col> */}
          <Col md={4}>
            <FormGroup>
              <Field
                type="select"
                name="id_petani"
                component={this.renderField}
                label="Petani"
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Field
                type="date"
                name="tgl_distribusi"
                component={this.renderField}
                label="Tanggal Terdistribusi"
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Field
                type="text"
                name="keterangan"
                component={this.renderField}
                label="Keterangan"
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
