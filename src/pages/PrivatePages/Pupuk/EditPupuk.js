import React, { Component } from "react";
import FormComponentPupuk from "../../../component/Form/FormComponentPupuk";
import { getPupukDetail, putPupukUpdate } from "../../../actions/pupukAction";
import swal from "sweetalert";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getResponseDataPupuk: state.pupuk.getResponseDataPupuk,
    errorResponseDataPupuk: state.pupuk.errorResponseDataPupuk,
  };
};

class EditPupuk extends Component {
  componentDidMount() {
    this.props.dispatch(getPupukDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    console.log(data);
    this.props.dispatch(putPupukUpdate(data, this.props.match.params.id));
  }

  render() {
    if (this.props.getResponseDataPupuk || this.props.errorResponseDataPupuk) {
      console.log("haii");
      if (this.props.errorResponseDataPupuk) {
        swal("Failed!", this.props.errorResponseDataPupuk, "error");
      } else {
        swal({
          title: "Pupuk Updated !",
          icon: "success",
          button: "Oke",
        });
      }
    }
    return (
      <>
        <h1>Edit User</h1>
        <FormComponentPupuk onSubmit={(data) => this.handleSubmit(data)} />
      </>
    );
  }
}

export default connect(mapStateToProps, null)(EditPupuk);
