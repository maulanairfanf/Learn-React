import React, { Component } from "react";
import { postRegister } from "../../../actions/adminAction";
import FormAdmin from "../../../component/Form/FormAdmin";
import swal from "sweetalert";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postRegister: state.admin.postRegister,
    errorRegister: state.admin.errorRegister,
  };
};

class Admin extends Component {
  handleSubmit(data) {
    this.props.dispatch(postRegister(data));
  }
  render() {
    if (this.props.postRegister || this.props.errorRegister) {
      console.log(this.props);
      if (this.props.errorRegister) {
        swal("Failed!", this.props.errorRegister, "error");
      } else {
        swal({
          title: "Berhasil Create !",
          icon: "success",
          button: "Oke",
        });
      }
    }
    return (
      <>
        <FormAdmin onSubmit={(data) => this.handleSubmit(data)} />
      </>
    );
  }
}

export default connect(mapStateToProps, null)(Admin);
