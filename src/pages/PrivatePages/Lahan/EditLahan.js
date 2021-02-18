import React, { Component } from "react";
import FormComponentLahan from "../../../component/Form/FormComponentLahan";
import { getLahanDetail, putLahanUpdate } from "../../../actions/lahanAction";
import swal from "sweetalert";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getResponseDataLahan: state.lahan.getResponseDataLahan,
    errorResponseDataLahan: state.lahan.errorResponseDataLahan,
  };
};

class EditLahan extends Component {
  componentDidMount() {
    this.props.dispatch(getLahanDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putLahanUpdate(data, this.props.match.params.id));
  }

  render() {
    console.log(this.props.getResponseDataLahan);
    if (this.props.getResponseDataLahan || this.props.errorResponseDataLahan) {
      if (this.props.errorResponseDataLahan) {
        swal("Failed!", this.props.errorResponseDataLahan, "error");
      } else {
        swal({
          title: "Lahan Updated !",

          icon: "success",
          button: "Oke",
        });
      }
    }
    return (
      <>
        <h1>Edit Lahan</h1>
        <FormComponentLahan onSubmit={(data) => this.handleSubmit(data)} />
      </>
    );
  }
}

export default connect(mapStateToProps, null)(EditLahan);
