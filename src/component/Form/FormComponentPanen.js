import React, { Component } from "react";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import UserValidation from "../../Validations/UserValidation";
import { getUserSort } from "../../actions/userAction";
import {
  getProvinsiList,
  getKabupatenList,
  getKecamatanList,
  getKelurahanList,
  getTipeUserList,
  getKomoditasList,
} from "../../actions/masterAction";
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
      provinsi: state.master.getProvinsiList,
      kabupaten: state.master.getKabupatenList,
      kecamatan: state.master.getKecamatanList,
      kelurahan: state.master.getKelurahanList,
      komoditas: state.master.getKomoditasList,
    },
    user: {
      petani: state.users.getUserSort,
    },
  };
};

class FormComponentPanen extends Component {
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
    this.props.dispatch(getKomoditasList());
    this.props.dispatch(getProvinsiList());
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
        {label === "Tipe User" ? (
          <Input {...input} type={type} placeholder={placeholder}>
            <option value={0} key="0"></option>
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
            <option value={0} key="0"></option>
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
              <option value={0} key="0"></option>
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
                e.preventDefault();
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
          </>
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
