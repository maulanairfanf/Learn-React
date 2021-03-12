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
  }
  render() {
    if (this.props.getResponseDataUser || this.props.errorResponseDataUser) {
      if (this.props.getResponseDataUser) {
        swal({
          title: "User Created",

          icon: "success",
        });
      } else {
        swal({
          title: "Good job!",

          icon: "error",
        });
      }
    }
    return (
      <div className="shadow px-4 py-3 rounded">
        <h3 className="text-black-50 mb-4">Add Userr</h3>
        <FormComponentUser onSubmit={(data) => this.handleSubmit(data)} />
      </div>
    );
  }
}
export default connect(mapStateToProps, null)(CreateUser);
