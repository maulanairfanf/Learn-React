import React, { useEffect, Component } from "react";
import TableComponent from "../../../component/Table/TableComponent";
import { connect } from "react-redux";
import { getUsersList } from "../../../actions/userAction";

class Home extends Component {
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

export default connect()(Home);
