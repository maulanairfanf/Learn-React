import React, { Component } from "react";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import UserValidation from "../../Validations/UserValidation";
import {
  getProvinsiList,
  getKabupatenList,
  getKecamatanList,
  getKelurahanList,
  getTipeUserList,
} from "../../actions/masterAction";
import { getUserSort } from "../../actions/userAction";

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
      petani: state.users.getUserSort,
    },
    master: {
      provinsi: state.master.getProvinsiList,
      kabupaten: state.master.getKabupatenList,
      kecamatan: state.master.getKecamatanList,
      kelurahan: state.master.getKelurahanList,
      tipeUser: state.master.getTipeUserList,
    },
  };
};

class FormComponentPupuk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_provinsi: 0,
      id_kabupaten: 0,
      id_kecamatan: 0,
      id_kelurahan: 0,
      sort_id_provinsi: 0,
      sort_id_kabupaten: 0,
      sort_id_kecamatan: 0,
      sort_id_kelurahan: 0,
    };
  }
  componentDidMount() {
    this.props.dispatch(getTipeUserList());
    this.props.dispatch(getProvinsiList());
  }
  renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    value,
    meta: { touched, error, warning },
  }) => (
    <Row>
      <Col md="12">
        <Label className="col-form-label">{label}</Label>
      </Col>
      <Col md="12">
        {label === "Satuan" ? (
          <>
            <Input {...input} type={type} placeholder={placeholder}>
              <option value={0}></option>
              <option value={101}>Kg</option>
            </Input>
          </>
        ) : label === "Provinsi" ? (
          <>
            <Input
              {...input}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                e.preventDefault();
                this.setState({
                  id_provinsi: e.target.selectedOptions[0].id,
                  id_kabupaten: 0,
                  id_kecamatan: 0,
                  id_kelurahan: 0,
                  sort_id_provinsi: e.target.value,
                  sort_id_kabupaten: 0,
                  sort_id_kecamatan: 0,
                  sort_id_kelurahan: 0,
                });
                console.log(this.state.id_provinsi);
                this.props.dispatch(
                  getKabupatenList(e.target.selectedOptions[0].id)
                );
              }}
            >
              <option value={0}>Provinsi</option>
              {this.props.master.provinsi &&
                this.props.master.provinsi.map((item, i) => {
                  return (
                    <option key={i.id} value={item.id} id={item.provinsi}>
                      {item.nama}
                    </option>
                  );
                })}
            </Input>
          </>
        ) : label === "Kabupaten" ? (
          <>
            <Input
              {...input}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                e.preventDefault();

                this.setState({
                  id_kabupaten: e.target.selectedOptions[0].id,
                  id_kecamatan: 0,
                  id_kelurahan: 0,
                  sort_id_kabupaten: e.target.value,
                  sort_id_kecamatan: 0,
                  sort_id_kelurahan: 0,
                });
                console.log(this.state.id_provinsi, this.state.id_kabupaten);
                this.props.dispatch(
                  getKecamatanList(
                    this.state.id_provinsi,
                    e.target.selectedOptions[0].id
                  )
                );
                console.log("id kabupaten : ", e.target.selectedOptions[0].id);
              }}
            >
              <option value={0}>Kabupaten / Kota</option>
              {this.props.master.kabupaten &&
                this.props.master.kabupaten.map((item, i) => {
                  return (
                    <>
                      <option
                        key={i.id}
                        value={item.id}
                        id={item.kabupatenkota}
                      >
                        {item.nama}
                      </option>
                    </>
                  );
                })}
            </Input>
          </>
        ) : label === "Kecamatan" ? (
          <>
            <Input
              {...input}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                e.preventDefault();
                this.setState({
                  id_kecamatan: e.target.selectedOptions[0].id,
                  id_kelurahan: 0,
                  sort_id_kecamatan: e.target.value,
                  sort_id_kelurahan: 0,
                });
                console.log(
                  this.state.id_provinsi,
                  this.state.id_kabupaten,
                  this.state.id_kecamatan
                );
                this.props.dispatch(
                  getKelurahanList(
                    this.state.id_provinsi,
                    this.state.id_kabupaten,
                    e.target.selectedOptions[0].id
                  )
                );

                console.log("id kecamatan : ", e.target.selectedOptions[0].id);
              }}
            >
              <option value={0}>Kecamatan</option>
              {this.props.master.kecamatan &&
                this.props.master.kecamatan.map((item, i) => {
                  return (
                    <option key={i.id} value={item.id} id={item.kecamatan}>
                      {item.nama}
                    </option>
                  );
                })}
            </Input>
          </>
        ) : label === "Kelurahan" ? (
          <>
            <Input
              {...input}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                e.preventDefault();
                this.setState({
                  id_kelurahan: e.target.selectedOptions[0].id,
                  sort_id_kelurahan: e.target.value,
                });
                console.log(
                  this.state.sort_id_provinsi,
                  this.state.sort_id_kabupaten,
                  this.state.sort_id_kecamatan,
                  e.target.value
                );
                this.props.dispatch(
                  getUserSort(
                    this.state.sort_id_provinsi,
                    this.state.sort_id_kabupaten,
                    this.state.sort_id_kecamatan,
                    e.target.value
                  )
                );
              }}
            >
              <option value={0}>Kelurahan</option>
              {this.props.master.kelurahan &&
                this.props.master.kelurahan.map((item, i) => {
                  return (
                    <option key={i.id} value={item.id} id={item.kelurahan}>
                      {item.nama}
                    </option>
                  );
                })}
            </Input>
          </>
        ) : label === "Petani" ? (
          <>
            <Input
              {...input}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                this.setState({
                  id_petani: e.target.value,
                });
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
          </>
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
          <Col md={4}>
            <FormGroup>
              <Field
                type="select"
                name="id_provinsi"
                component={this.renderField}
                label="Provinsi"
              />
            </FormGroup>
          </Col>{" "}
          <Col md={4}>
            <FormGroup>
              <Field
                type="select"
                name="id_kabupaten"
                component={this.renderField}
                label="Kabupaten"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Field
                type="select"
                name="id_kecamatan"
                component={this.renderField}
                label="Kecamatan"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Field
                type="select"
                name="id_desa"
                component={this.renderField}
                label="Kelurahan"
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
