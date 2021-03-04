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
        <DetailLahan />
      </div>
    );
  }
}

export default connect()(DetailLahanContainer);
