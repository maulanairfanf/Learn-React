import React, { Component } from "react";
import TableComponentPanen from "../../../component/Table/TableComponentPanen";
import { connect } from "react-redux";
import { getPanenList, deleteDataPanen } from "../../../actions/panenAction";

class Panen extends Component {
  componentDidMount() {
    this.props.dispatch(getPanenList());
    this.props.dispatch(deleteDataPanen());
  }

  render() {
    return (
      <div>
        <h1>haii from Panen</h1>
        <TableComponentPanen />
      </div>
    );
  }
}

export default connect()(Panen);
