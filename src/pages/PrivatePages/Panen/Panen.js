import React, { Component } from "react";
import TableComponentPanen from "../../../component/Table/TableComponentPanen";
import { connect } from "react-redux";
import { deletePanen, getPanenList } from "../../../actions/panenAction";
import { deleteDataWilayah } from "../../../actions/masterAction";

class Panen extends Component {
  componentDidMount() {
    this.props.dispatch(getPanenList());
    this.props.dispatch(deleteDataWilayah());
    this.props.dispatch(deleteDataWilayah());
  }

  render() {
    return (
      <div>
        <TableComponentPanen />
      </div>
    );
  }
}

export default connect()(Panen);
