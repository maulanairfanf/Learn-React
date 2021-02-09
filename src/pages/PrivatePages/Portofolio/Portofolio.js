import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { getUsersDetail } from "../../../actions/userAction";
import DetailUser from "../../../component/Detail/DetailUser";

class Portofolio extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }
  render() {
    return (
      <div>
        <h1>Details USer</h1>
        <DetailUser />
      </div>
    );
  }
}

export default connect()(Portofolio);
