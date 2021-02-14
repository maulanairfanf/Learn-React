import React, { Component } from "react";
import TableComponent from "../../../component/Table/TableComponent";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from "../../../actions/userAction";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
  }

  render() {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(App);
