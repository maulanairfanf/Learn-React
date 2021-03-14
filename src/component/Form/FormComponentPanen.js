import React, { Component } from "react";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import UserValidation from "../../Validations/UserValidation";
import { getUsersList } from "../../actions/userAction";
import { getTipeUserList, getKomoditasList } from "../../actions/masterAction";
import { getFilterLahan } from "../../actions/lahanAction";

const mapStateToProps = (state) => {
  return {
    initialValues: {
      id: state.panen.getPanenDetail.id,
      kategori: state.panen.getPanenDetail.kategori,
      varietas: state.panen.getPanenDetail.varietas,
      total_panen: state.panen.getPanenDetail.id_petani,
      satuan: state.panen.getPanenDetail.satuan,
      usia_tanam: state.panen.getPanenDetail.usia_tanam,
      id_petani: state.panen.getPanenDetail.id_petani,
      id_instansi: state.panen.getPanenDetail.id_instansi,
      id_lahan: state.panen.getPanenDetail.id_lahan,
      tgl_panen: state.panen.getPanenDetail.tgl_panen,
      tgl_tanam: state.panen.getPanenDetail.tgl_tanam,
      tgl_panen: state.panen.getPanenDetail.tgl_panen,
      keterangan: state.panen.getPanenDetail.keterangan,
    },
    lahan: {
      filter: state.lahan.getFilterLahan,
    },
    master: {
      tipeUser: state.master.getTipeUserList,
      komoditas: state.master.getKomoditasList,
    },
    user: {
      petani: state.users.getUsersList,
    },
  };
};

class FormComponentPanen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_petani: 0,
    };
  }
  componentDidMount() {
    this.props.dispatch(getTipeUserList());
    this.props.dispatch(getKomoditasList());
    this.props.dispatch(getUsersList());
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
        <Label htmlFor="{input}" className="col-form-label text-capitalize">
          {label}
        </Label>
      </Col>
      <Col md="12">
        {label === "Petani" ? (
          <Input
            {...input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              e.preventDefault();
              this.setState({
                id_petani: e.target.value,
              });
              this.props.dispatch(getFilterLahan(e.target.value));
            }}
          >
            <option value={0}></option>
            {this.props.user.petani &&
              this.props.user.petani.map((item, i) => {
                return (
                  <option key={i.id} value={item.id}>
                    {item.nama}
                  </option>
                );
              })}
          </Input>
        ) : label === "Lahan" ? (
          <>
            <Input
              {...input}
              type={type}
              placeholder={placeholder}
              value={value}
            >
              <option value={0}></option>
              {this.props.lahan.filter &&
                this.props.lahan.filter.map((item, i) => {
                  return (
                    <option key={i.id} value={item.id}>
                      {item.alamat}
                    </option>
                  );
                })}
            </Input>
          </>
        ) : label === "Tipe User" ? (
          <Input {...input} type={type} placeholder={placeholder}>
            <option value={0}></option>
            {this.props.master.tipeUser &&
              this.props.master.tipeUser.map((item, i) => {
                return (
                  <option key={i.id} value={item.id}>
                    {item.nama}
                  </option>
                );
              })}
          </Input>
        ) : label === "Varietas" ? (
          <Input {...input} type={type} placeholder={placeholder}>
            <option value={0}></option>
            {this.props.master.komoditas &&
              this.props.master.komoditas.map((item, i) => {
                return (
                  <option key={i.id} value={item.id}>
                    {item.nama}
                  </option>
                );
              })}
          </Input>
        ) : label === "Satuan" ? (
          <>
            <Input {...input} type={type} placeholder={placeholder}>
              <option value={0}></option>
              <option value={101}>Kg</option>
            </Input>
          </>
        ) : (
          <Input {...input} type={type} placeholder={placeholder}></Input>
        )}

        {touched &&
          ((error && <p style={{ color: "red" }}>{error}</p>) ||
            (warning && <p style={{ color: "brown" }}>{warning}</p>))}
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
                name="varietas"
                component={this.renderField}
                label="Varietas"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Field
                type="text"
                name="total_panen"
                component={this.renderField}
                label="Total Panen"
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
          <Col md={4}>
            <FormGroup>
              <Field
                type="text"
                name="usia_tanam"
                component={this.renderField}
                label="Usia Tanam"
              />
            </FormGroup>
          </Col>
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
          {/* <Col md={4}>
            <FormGroup>
              <Field
                type="text"
                name="id_instansi"
                component={this.renderField}
                label="Instansi"
              />
            </FormGroup>
          </Col> */}
          <Col md={4}>
            <FormGroup>
              <Field
                type="select"
                name="id_lahan"
                component={this.renderField}
                label="Lahan"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Field
                type="date"
                name="tgl_tanam"
                component={this.renderField}
                label="Tanggal Tanam"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Field
                type="date"
                name="tgl_panen"
                component={this.renderField}
                label="Tanggal Panen"
              />
            </FormGroup>
          </Col>{" "}
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

FormComponentPanen = reduxForm({
  form: "CreatePanen",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponentPanen);
export default connect(mapStateToProps, null)(FormComponentPanen);
