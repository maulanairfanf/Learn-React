import React, { Component } from "react";
import FormComponentCreate from "../../../component/Form/FormComponentCreate";
import { reduxForm, field } from "react-redux";
import { Container } from "reactstrap";
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
        swal("User Created", "success");
      } else {
        swal("Failed Created", "error");
      }
    }
    return (
      <Container>
        <h1>haii from create user</h1>
        <FormComponentCreate onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}
export default connect(mapStateToProps, null)(CreateUser);
