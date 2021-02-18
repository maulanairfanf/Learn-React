import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import swal from "sweetalert";
import { postLahanCreate } from "../../../actions/lahanAction";
import FormComponentLahan from "../../../component/Form/FormComponentLahan";

const mapStateToProps = (state) => {
  return {
    getResponseDataLahan: state.lahan.getResponseDataLahan,
    errorResponseDataLahan: state.lahan.errorResponseDataLahan,
  };
};
class CreateLahan extends Component {
  handleSubmit(data) {
    console.log(data);
    this.props.dispatch(postLahanCreate(data));
  }
  render() {
    if (this.props.getResponseDataLahan || this.props.errorResponseDataLahan) {
      if (this.props.getResponseDataLahan) {
        swal("Lahan Created", { icon: "success" });
      } else {
        swal("Failed Created", "error");
      }
    }
    return (
      <Container>
        <h1>haii from create pupuk</h1>
        <FormComponentLahan onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}
export default connect(mapStateToProps, null)(CreateLahan);
