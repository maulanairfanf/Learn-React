import React, { Component } from "react";
import { connect } from "react-redux";
import { getLahanList, deleteDataLahan } from "../../../actions/lahanAction";
import { deleteDataWilayah } from "../../../actions/masterAction";
import TableComponentLahan from "../../../component/Table/TableComponentLahan";

class Lahan extends Component {
  componentDidMount() {
    this.props.dispatch(getLahanList());
    this.props.dispatch(deleteDataLahan());
    this.props.dispatch(deleteDataWilayah())
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
