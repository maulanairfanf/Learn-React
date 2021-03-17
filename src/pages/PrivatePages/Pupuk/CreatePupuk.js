import React, { Component } from "react";

import { connect } from "react-redux";

import { postPupukCreate } from "../../../actions/pupukAction";
import FormComponentPupuk from "../../../component/Form/FormComponentPupuk";

class CreatePupuk extends Component {
  handleSubmit(data) {
    this.props.dispatch(postPupukCreate(data));
  }
  render() {
    return (
      <>
        <h4 className="text-secondary">Tambah Pupuk</h4>
        <FormComponentPupuk onSubmit={(data) => this.handleSubmit(data)} />
      </>
    );
  }
}
export default connect()(CreatePupuk);
