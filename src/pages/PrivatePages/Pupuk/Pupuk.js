import React, { Component } from "react";
import TableComponentPupuk from "../../../component/Table/TableComponentPupuk";
import { connect } from "react-redux";
import { getPupukList, deleteDataPupuk } from "../../../actions/pupukAction";

class Pupuk extends Component {
  componentDidMount() {
    this.props.dispatch(getPupukList());
    this.props.dispatch(deleteDataPupuk());
  }

  render() {
    return (
      <div>
        <TableComponentPupuk />
      </div>
    );
  }
}

export default connect()(Pupuk);
