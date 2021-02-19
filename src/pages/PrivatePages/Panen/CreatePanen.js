import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import swal from "sweetalert";
import { postPanenCreate } from "../../../actions/panenAction";
import FormComponentPanen from "../../../component/Form/FormComponentPanen";

const mapStateToProps = (state) => {
  return {
    getResponseDataPanen: state.panen.getResponseDataPanen,
    errorResponseDataPanen: state.panen.errorResponseDataPanen,
  };
};
class CreatePanen extends Component {
  handleSubmit(data) {
    console.log(data);
    this.props.dispatch(postPanenCreate(data));
  }
  render() {
    if (this.props.getResponseDataPanen || this.props.errorResponseDataPanen) {
      if (this.props.getResponseDataPanen) {
        swal("Panen Created", { icon: "success" });
      } else {
        swal("Failed Created", "error");
      }
    }
    return (
      <Container>
        <h1>haii from create pupuk</h1>
        <FormComponentPanen onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}
export default connect(mapStateToProps, null)(CreatePanen);
