import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { deleteDataPanen, postPanenCreate } from "../../../actions/panenAction";
import FormComponentPanen from "../../../component/Form/FormComponentPanen";


class CreatePanen extends Component {
  handleSubmit(data) {
    this.props.dispatch(postPanenCreate(data));
    this.props.dispatch(deleteDataPanen());
  }
  render() {
    return (
      <>
        <h4 className="text-secondary">Tambah Panen</h4>
        <FormComponentPanen onSubmit={(data) => this.handleSubmit(data)} />
      </>
    );
  }
}
export default connect()(CreatePanen);
