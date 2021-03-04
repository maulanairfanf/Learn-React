import React, { Component } from "react";
import { connect } from "react-redux";
import TotalUserPict from "../../../assets/TotalUserPict.svg";
import TotalLahanPict from "../../../assets/TotalLahanPict.svg";
import TotalArtikelPict from "../../../assets/TotalArtikelPict.svg";
import TotalPartnerPict from "../../../assets/TotalPartnerPict.svg";
import TotalPupukTerdistribusiPict from "../../../assets/TotalPupukTerdistribusiPict.svg";
import TotalVarietasPict from "../../../assets/TotalVarietasPict.svg";
import EventCalender from "../../../component/Calender/EventCalender";
import { getTotalList } from "../../../actions/masterAction";

const mapStateToProps = (state) => {
  return {
    getTotalList: state.master.getTotalList,
    errorTotalList: state.master.errorTotalList,
  };
};
class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(getTotalList());
  }

  render() {
    console.log(this.props.getTotalList);
    return (
      <div className="position-relative">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="row ">
              <div className="col-md-6 mb-3 ">
                <div
                  className="w-100 p-3"
                  style={{ border: "1px solid #0CC23F", borderRadius: "10px" }}
                >
                  <div align="center">
                    <img src={TotalUserPict} />
                    <h6
                      style={{ fontSize: "18px", color: "#B8B7B7" }}
                      className=" mt-3"
                    >
                      Total User
                    </h6>
                    <h6 style={{ fontSize: "48px" }}>
                      {this.props.getTotalList.total_petani}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div
                  className="w-100 p-3"
                  style={{ border: "1px solid #0CC23F", borderRadius: "10px" }}
                >
                  <div align="center">
                    <img src={TotalLahanPict} />
                    <h6
                      style={{ fontSize: "18px", color: "#B8B7B7" }}
                      className=" mt-3"
                    >
                      Total Lahan
                    </h6>
                    <h6 style={{ fontSize: "48px" }}>
                      {this.props.getTotalList.total_lahan}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div
                  className="w-100 p-3"
                  style={{ border: "1px solid #0CC23F", borderRadius: "10px" }}
                >
                  <div align="center">
                    <img src={TotalVarietasPict} />
                    <h6
                      style={{ fontSize: "18px", color: "#B8B7B7" }}
                      className=" mt-3"
                    >
                      Total Varietas
                    </h6>
                    <h6 style={{ fontSize: "48px" }}>
                      {this.props.getTotalList.total_varietas}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div
                  className="w-100 p-3"
                  style={{ border: "1px solid #0CC23F", borderRadius: "10px" }}
                >
                  <div align="center">
                    <img src={TotalPupukTerdistribusiPict} />
                    <h6
                      style={{ fontSize: "18px", color: "#B8B7B7" }}
                      className=" mt-3"
                    >
                      Total Pupuk Terdistribusi
                    </h6>
                    <h6 style={{ fontSize: "48px" }}>
                      {this.props.getTotalList.total_pupuk}
                    </h6>
                  </div>
                </div>
              </div>{" "}
              {/* Total Partner */}
              <div className="col-md-6 mb-3">
                <div
                  className="w-100 p-3"
                  style={{ border: "1px solid #0CC23F", borderRadius: "10px" }}
                >
                  <div align="center">
                    <img src={TotalPartnerPict} />
                    <h6
                      style={{ fontSize: "18px", color: "#B8B7B7" }}
                      className=" mt-3"
                    >
                      Total Partner
                    </h6>
                    <h6 style={{ fontSize: "48px" }}>
                      {this.props.getTotalList.total_poktan}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div
                  className="w-100 p-3"
                  style={{ border: "1px solid #0CC23F", borderRadius: "10px" }}
                >
                  <div align="center">
                    <img src={TotalArtikelPict} />
                    <h6
                      style={{ fontSize: "18px", color: "#B8B7B7" }}
                      className=" mt-3"
                    >
                      Total Artikel
                    </h6>
                    <h6 style={{ fontSize: "48px" }}>
                      {this.props.getTotalList.total_artikel}
                    </h6>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-md-4  ">
            <div
              className="w-100 p-3"
              style={{ border: "1px solid #0CC23F", borderRadius: "10px" }}
            >
              <EventCalender />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Dashboard);
