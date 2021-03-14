import React, { Component } from "react";
import FormComponentPupuk from "../../../component/Form/FormComponentPupuk";
import { getPupukDetail, putPupukUpdate } from "../../../actions/pupukAction";
import swal from "sweetalert";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getResponseDataPupuk: state.pupuk.getResponseDataPupuk,
    errorResponseDataPupuk: state.pupuk.errorResponseDataPupuk,
    getPupukDetail: state.pupuk.getPupukDetail,
    errorResponseDataPupuk: state.pupuk.errorResponseDataPupuk,
  };
};

class EditPupuk extends Component {
  componentDidMount() {
    this.props.dispatch(getPupukDetail(this.props.match.params.id));
  }
  handleSubmit(data) {
    this.props.dispatch(putPupukUpdate(data, this.props.match.params.id));
  }

  render() {
    if (this.props.getResponseDataPupuk || this.props.errorResponseDataPupuk) {
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
        {this.props.getPupukDetail ? (
          <>
            <h4 className="text-secondary">Edit Pupuk</h4>
            <FormComponentPupuk onSubmit={(data) => this.handleSubmit(data)} />
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

export default connect(mapStateToProps, null)(EditPupuk);
