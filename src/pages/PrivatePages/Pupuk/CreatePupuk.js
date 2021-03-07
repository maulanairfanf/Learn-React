import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import swal from "sweetalert";
import { postPupukCreate } from "../../../actions/pupukAction";
import FormComponentPupuk from "../../../component/Form/FormComponentPupuk";

const mapStateToProps = (state) => {
  return {
    getResponseDataPupuk: state.pupuk.getResponseDataPupuk,
    errorResponseDataPupuk: state.pupuk.errorResponseDataPupuk,
  };
};
class CreatePupuk extends Component {
  handleSubmit(data) {
  
    this.props.dispatch(postPupukCreate(data));
  }
  render() {
    if (this.props.getResponseDataPupuk || this.props.errorResponseDataPupuk) {
      if (this.props.getResponseDataPupuk) {
        swal("Pupuk Created", { icon: "success" });
      } else {
        swal("Failed Created", "error");
      }
    }
    return (
      <>
        <h4 className="text-secondary">Tambah Pupuk</h4>
        <FormComponentPupuk onSubmit={(data) => this.handleSubmit(data)} />
      </>
    );
  }
}
export default connect(mapStateToProps, null)(CreatePupuk);
