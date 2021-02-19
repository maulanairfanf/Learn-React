import React, { Component } from "react";
import FormComponentPanen from "../../../component/Form/FormComponentPanen";
import { getPanenDetail, putPanenUpdate } from "../../../actions/panenAction";
import swal from "sweetalert";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getResponseDataPanen: state.panen.getResponseDataPanen,
    errorResponseDataPanen: state.panen.errorResponseDataPanen,
  };
};

class EditPanen extends Component {
  componentDidMount() {
    this.props.dispatch(getPanenDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putPanenUpdate(data, this.props.match.params.id));
  }

  render() {
    console.log(this.props.getResponseDataPanen);
    if (this.props.getResponseDataPanen || this.props.errorResponseDataPanen) {
      if (this.props.errorResponseDataPanen) {
        swal("Failed!", this.props.errorResponseDataPanen, "error");
      } else {
        swal({
          title: "Panen Updated !",

          icon: "success",
          button: "Oke",
        });
      }
    }
    return (
      <>
        <h1>Edit Lahan</h1>
        <FormComponentPanen onSubmit={(data) => this.handleSubmit(data)} />
      </>
    );
  }
}

export default connect(mapStateToProps, null)(EditPanen);
