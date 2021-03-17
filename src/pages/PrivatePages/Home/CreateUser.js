import React, { Component } from "react";
import FormComponentUser from "../../../component/Form/FormComponentUser";
import { connect } from "react-redux";
import { postUserCreate } from "../../../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponseDataUser: state.users.getResponseDataUser,
    errorResponseDataUser: state.users.errorResponseDataUser,
  };
};
class CreateUser extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUserCreate(data));
    console.log(this.props);
    if (this.props.getResponseDataUser || this.props.errorResponseDataUser) {
      console.log(this.props);
      if (this.props.errorResponseDataUser) {
        swal("Gagal!", this.props.errorResponseDataUser, "error");
      } else {
        swal({
          title: "Petani diperbarui !",
          icon: "success",
          button: "Oke",
        });
      }
    }
  }
  render() {
    return (
      <div className="shadow px-4 py-3 rounded">
        <h3 className="text-black-50 mb-4">Add Userr</h3>
        <FormComponentUser onSubmit={(data) => this.handleSubmit(data)} />
      </div>
    );
  }
}
export default connect(mapStateToProps, null)(CreateUser);
