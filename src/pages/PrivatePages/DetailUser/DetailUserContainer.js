import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersDetail } from "../../../actions/userAction";
import DetailUser from "../../../component/Detail/DetailUser";

class DetailUserContainer extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }

  render() {
    return (
      <div>
        <h1>Detail User</h1>
        <DetailUser />
      </div>
    );
  }
}

export default connect()(DetailUserContainer);
