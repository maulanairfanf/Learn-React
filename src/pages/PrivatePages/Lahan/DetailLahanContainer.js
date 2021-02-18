import React, { Component } from "react";
import { connect } from "react-redux";
import { getLahanDetail } from "../../../actions/lahanAction";
import DetailLahan from "../../../component/Detail/DetailLahan";

class DetailLahanContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getLahanDetail(this.props.match.params.id));
  }

  render() {
    return (
      <div>
        <h1>Detail</h1>
        <DetailLahan />
      </div>
    );
  }
}

export default connect()(DetailLahanContainer);
