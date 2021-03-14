import React, { Component } from "react";
import FormComponentLahan from "../../../component/Form/FormComponentLahan";
import { getLahanDetail, putLahanUpdate } from "../../../actions/lahanAction";
import swal from "sweetalert";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getResponseDataLahan: state.lahan.getResponseDataLahan,
    errorResponseDataLahan: state.lahan.errorResponseDataLahan,
    getLahanDetail: state.lahan.getLahanDetail,
    errorLahanDetail: state.lahan.errorLahanDetail,
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
        {this.props.getLahanDetail ? (
          <>
            <h4 className="text-secondary">Edit Lahan</h4>{" "}
            <FormComponentLahan onSubmit={(data) => this.handleSubmit(data)} />
          </>
        ) : (
          <div className="text-center">
            <div class="spinner-grow text-info" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, null)(EditLahan);
