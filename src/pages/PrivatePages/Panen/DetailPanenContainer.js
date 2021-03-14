import React, { Component } from "react";
import { connect } from "react-redux";
import { getPanenDetail } from "../../../actions/panenAction";
import DetailPanen from "../../../component/Detail/DetailPanen";

class DetailPanenContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getPanenDetail(this.props.match.params.id));
  }

  render() {
    return (
      <div>  
        <DetailPanen />
      </div>
    );
  }
}

export default connect()(DetailPanenContainer);
