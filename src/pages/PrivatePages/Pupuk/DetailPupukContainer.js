import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteDataWilayah } from "../../../actions/masterAction";
import { getPupukDetail } from "../../../actions/pupukAction";
import DetailPupuk from "../../../component/Detail/DetailPupuk";

class DetailPupukContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getPupukDetail(this.props.match.params.id));
    this.props.dispatch(deleteDataWilayah())
  }
  render() {
    return (
      <div>
        <DetailPupuk />
      </div>
    );
  }
}

export default connect()(DetailPupukContainer);
