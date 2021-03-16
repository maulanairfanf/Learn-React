import React, { Component } from "react";
import FormComponentUser from "../../../component/Form/FormComponentUser";
import { getUsersDetail, putUsersUpdate } from "../../../actions/userAction";
import swal from "sweetalert";
import { connect } from "react-redux";
import FormPict from "../../../component/Form/FormPict";

const mapStateToProps = (state) => {
  return {
    getResponseDataUser: state.users.getResponseDataUser,
    errorResponseDataUser: state.users.errorResponseDataUser,
    getUsersDetail: state.users.getUsersDetail,
    errorUserDetail: state.users.errorUserDetail,
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
      console.log(this.props);
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
        {this.props.getUsersDetail ? (
          <>
            <h4 className="text-secondary">Edit User</h4>
            <FormPict />
            <FormComponentUser onSubmit={(data) => this.handleSubmit(data)} />
          </>
        ) : (
          <div className="text-center">
            <div className="spinner-grow text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, null)(EditUser);
