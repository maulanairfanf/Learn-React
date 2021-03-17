import React, { Component } from "react";
import FormComponentLahan from "../../../component/Form/FormComponentLahan";
import { getLahanDetail, putLahanUpdate } from "../../../actions/lahanAction";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
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
    return (
      <>
        {this.props.getLahanDetail ? (
          <>
            <h4 className="text-secondary">Edit Lahan</h4>{" "}
            <FormComponentLahan onSubmit={(data) => this.handleSubmit(data)} />
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

export default connect(mapStateToProps, null)(EditLahan);
