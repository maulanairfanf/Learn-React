import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from "../../../actions/userAction";
import TableComponentUser from "../../../component/Table/TableComponentUser";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }

  render() {
    return (
      <div>
        <TableComponentUser />
      </div>
    );
  }
}

export default connect()(Home);
