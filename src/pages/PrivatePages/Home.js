import React, { useEffect, Component } from "react";
import TableComponent from "../../component/Table/TableComponent";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from "../../actions/userAction";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }

  render() {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(Home);
