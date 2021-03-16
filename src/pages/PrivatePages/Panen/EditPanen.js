import React, { Component } from "react";
import FormComponentPanen from "../../../component/Form/FormComponentPanen";
import { getPanenDetail, putPanenUpdate } from "../../../actions/panenAction";
import swal from "sweetalert";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getResponseDataPanen: state.panen.getResponseDataPanen,
    errorResponseDataPanen: state.panen.errorResponseDataPanen,
    getPanenDetail: state.panen.getPanenDetail,
    errorPanenDetail: state.panen.errorPanenDetail,
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
        {this.props.getPanenDetail ? (
          <>
            <h4 className="text-secondary">Edit Panen</h4>{" "}
            <FormComponentPanen onSubmit={(data) => this.handleSubmit(data)} />
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

export default connect(mapStateToProps, null)(EditPanen);
