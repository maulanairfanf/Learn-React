import React, { Component } from "react";
import FormComponent from "../../../component/Form/FormComponent";
import { getUsersDetail, putUsersUpdate } from "../../../actions/userAction";
import swal from "sweetalert";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getResponseDataUser: state.users.getResponseDataUser,
    errorResponseDataUser: state.users.errorResponseDataUser,
  };
};

class EditUser extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putUsersUpdate(data, this.props.match.params.id));
  }

  render() {
    if (this.props.getResponseDataUser || this.props.errorResponseDataUser) {
      if (this.props.errorResponseDataUser) {
        swal("Failed!", this.props.errorResponseDataUser, "error");
      } else {
        swal(
          "User Updated!",
          "Nama : " +
            this.props.getResponseDataUser.nama +
            " , nik : " +
            this.props.getResponseDataUser.nik,
          "success"
        );
      }
    }
    return (
      <>
        <h1>Edit User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </>
    );
  }
}

export default connect(mapStateToProps, null)(EditUser);
