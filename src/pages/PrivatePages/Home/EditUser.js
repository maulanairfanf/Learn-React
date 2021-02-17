import React, { Component } from "react";
import FormComponentUser from "../../../component/Form/FormComponentUser";
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
    console.log(this.props.getResponseDataUser);
    if (this.props.getResponseDataUser || this.props.errorResponseDataUser) {
      if (this.props.errorResponseDataUser) {
        swal("Failed!", this.props.errorResponseDataUser, "error");
      } else {
        swal({
          title: "User Updated !",

          icon: "success",
          button: "Oke",
        });
      }
    }
    return (
      <>
        <h1>Edit User</h1>
        <FormComponentUser onSubmit={(data) => this.handleSubmit(data)} />
      </>
    );
  }
}

export default connect(mapStateToProps, null)(EditUser);