import React from "react";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";

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
      {props.getUsersDetail ? (
        <div>
          <h1>{props.getUsersDetail.nama}</h1>
          <h1>{props.getUsersDetail.id}</h1>
        </div>
      ) : (
        <Spinner colors="dark" />
      )}
    </div>
  );
};

export default connect(mapStateToProps, null)(DetailUser);
