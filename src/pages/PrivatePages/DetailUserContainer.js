import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersDetail } from "../../actions/userAction";
import BackComponent from "../../component/BackComponent";
import DetailUser from "../../component/Detail/DetailUser";

class DetailUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }

  render() {
    return (
      <div>
        <h1>Detail User</h1>
        <BackComponent />
        <DetailUser />
      </div>
    );
  }
}

export default connect()(DetailUserContainer);
