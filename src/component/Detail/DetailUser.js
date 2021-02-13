import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getUsersDetail: state.users.getUsersDetail,
    errorUsersDetail: state.users.errorUsersDetail,
  };
};
const DetailUser = (props) => {
  console.log(props.getUsersDetail);
  return (
    <div>
      <h1>{props.getUsersDetail.nama}</h1>
      <h1>{props.getUsersDetail.nik}</h1>
    </div>
  );
};

export default connect(mapStateToProps, null)(DetailUser);
