import React, { Component } from "react";
import TableComponentPanen from "../../../component/Table/TableComponentPanen";
import { connect } from "react-redux";
import { deletePanen, getPanenList } from "../../../actions/panenAction";

class Panen extends Component {
  componentDidMount() {
    this.props.dispatch(getPanenList());

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
