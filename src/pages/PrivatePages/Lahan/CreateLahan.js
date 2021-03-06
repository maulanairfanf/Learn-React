import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteDataLahan, postLahanCreate } from "../../../actions/lahanAction";
import FormComponentLahan from "../../../component/Form/FormComponentLahan";

const mapStateToProps = (state) => {
  return {
    getResponseDataLahan: state.lahan.getResponseDataLahan,
    errorResponseDataLahan: state.lahan.errorResponseDataLahan,
  };
};
class CreateLahan extends Component {
  handleSubmit(data) {
    this.props.dispatch(postLahanCreate(data));
    
  }
  render() {
    return (
      <>
        <h4 className="text-secondary">Tambah Lahan</h4>
        <FormComponentLahan onSubmit={(data) => this.handleSubmit(data)} />
      </>
    );
  }
}
export default connect(mapStateToProps, null)(CreateLahan);
