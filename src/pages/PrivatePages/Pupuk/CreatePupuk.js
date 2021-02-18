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
    console.log(data);
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
      <Container>
        <h1>haii from create pupuk</h1>
        <FormComponentPupuk onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}
export default connect(mapStateToProps, null)(CreatePupuk);
