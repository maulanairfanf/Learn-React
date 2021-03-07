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
import { getUsersList } from "../../actions/userAction";

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
      petani: state.lahan.getLahanDetail.petani,
      desa: state.lahan.getLahanDetail.desa,
      kecamatan: state.lahan.getLahanDetail.kecamatan,
      kabupaten: state.lahan.getLahanDetail.kabupaten,
      provinsi: state.lahan.getLahanDetail.provinsi,
      kodepos: state.lahan.getLahanDetail.kodepos,
      keterangan: state.lahan.getLahanDetail.keterangan,
    },
    master: {
      provinsi: state.master.getProvinsiList,
      kabupaten: state.master.getKabupatenList,
      kecamatan: state.master.getKecamatanList,
      kelurahan: state.master.getKelurahanList,
      tipeUser: state.master.getTipeUserList,
    },
 
    user: {
      petani: state.users.getUsersList,
    },
  };
};

class FormComponentLahan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_provinsi: 0,
      id_kabupaten: 0,
      id_kecamatan: 0,
      id_kelurahan: 0,
    };
  }
  componentDidMount() {
    this.props.dispatch(getTipeUserList());
    this.props.dispatch(getProvinsiList());
    this.props.dispatch(getUsersList());
  }
  renderField = ({
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
        {label === "Provinsi" ? (
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
                });

                this.props.dispatch(
                  getKabupatenList(e.target.selectedOptions[0].id)
                );
                {
                  console.log("id provinsi : ", e.target.selectedOptions[0].id);
                  console.log(e);
                }
              }}
            >
              <option value={0}>Provinsi</option>
              {this.props.master.provinsi &&
                this.props.master.provinsi.map((item, i) => {
                  return (
                    <option
                      key={item.id}
                      value={item.id}
                      
                    >
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
                });
                this.props.dispatch(
                  getKecamatanList(
                    this.state.id_provinsi,
                    e.target.selectedOptions[0].id
                  )
                );
                console.log("id kabupaten : ", e.target.selectedOptions[0].id);
                console.log(e);
              }}
            >
              <option value={0}>Kabupaten / Kota</option>
              {this.props.master.kabupaten &&
                this.props.master.kabupaten.map((item,i) => {
                  return (
                    <>
                      <option
                        key={item.id}
                        value={item.id}
                        
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
                });
                this.props.dispatch(
                  getKelurahanList(
                    this.state.id_provinsi,
                    this.state.id_kabupaten,
                    e.target.selectedOptions[0].id
                  )
                );
                console.log(e);
                console.log("id kecamatan : ", e.target.selectedOptions[0].id);
              }}
            >
              <option value={0}>Kecamatan</option>
              {this.props.master.kecamatan &&
                this.props.master.kecamatan.map((item,i) => {
                  return (
                    <option key={item.id} value={item.id} >
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
                });
                console.log("Id kelurahan : ", e.target.selectedOptions[0].id);
              }}
            >
              <option value={0}>Kelurahan</option>
              {this.props.master.kelurahan &&
                this.props.master.kelurahan.map((item,i) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.nama}
                    </option>
                  );
                })}
            </Input>
          </>
        ) : label === "Tipe User" ? (
          <>
            <Input {...input} type={type} placeholder={placeholder}>
              <option value={0}></option>
              {this.props.master.tipeUser &&
                this.props.master.tipeUser.map((item, i) => {
                  return (
                    <>
                      <option key={i.id} value={item.id}>
                        {item.nama}
                      </option>
                    </>
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
                this.props.user.petani.map((item,i) => {
                  return (
                    <option key={i.id} value={item.id}>
                      {item.nama}
                    </option>
                  );
                })}
            </Input>
          </>
     
        ) : label === "Satuan" ? (
          <>
            <Input
              {...input}
              type={type}
              placeholder={placeholder}
              value={value}
            >
              <option value={101}>Kg</option>
            </Input>
          </>
        ) : (
          <Input
            autoComplete="off"
            {...input}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
          ></Input>
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
                type="number"
                name="luas"
                component={this.renderField}
                label="Luas"
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
                name="alamat"
                component={this.renderField}
                label="Alamat"
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
          </Col>{" "}
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
                type="number"
                name="kodepos"
                component={this.renderField}
                label="Kode Pos"
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
  // validate: UserValidation,
  enableReinitialize: true,
})(FormComponentLahan);
export default connect(mapStateToProps, null)(FormComponentLahan);
