import React, { Component } from "react";
import { connect } from "react-redux";
import { getLahanList, deleteDataLahan } from "../../../actions/lahanAction";
import TableComponentLahan from "../../../component/Table/TableComponentLahan";

class Lahan extends Component {
  componentDidMount() {
    this.props.dispatch(getLahanList());
    this.props.dispatch(deleteDataLahan());
  }
  render() {
    return (
      <>
        <TableComponentLahan />
      </>
    );
  }
}

export default connect()(Lahan);
