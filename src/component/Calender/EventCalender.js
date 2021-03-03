import React, { Component } from "react";
import { connect } from "react-redux";
import { Calendar } from "react-feather";
import FullCalendar from "@fullcalendar/react";

import dayGridPlugin from "@fullcalendar/daygrid";
import { getPupukList } from "../../actions/pupukAction";

const mapStateToProps = (state) => {
  return {
    getPupukList: state.pupuk.getPupukList,
    errorPupukList: state.pupuk.errorPupukList,
  };
};

class EventCalender extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(getPupukList());
  }

  getData() {
    const arr = [];

    let i = 0;
    for (i = 0; i < this.props.getPupukList.length; i++) {
      arr.push({
        // title: this.props.getPupukList[i].jenis_pupuk,
        date: this.props.getPupukList[i].tgl_distribusi,
      });
    }

    return arr;
  }

  render() {
    const data = this.getData();


    console.log(data);
    return (
      <>
        <div>
          {data.length ? (
            <>
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={data}
              />
              <div
                className="scroll_calender border-top  border-secondary overflow-auto   mt-3 py-3"
                style={{ height: "250px" }}
              >
                <ul>
                  {this.props.getPupukList.map((items) => {
                    return (
                      <>
                        <li>
                          <span className="text-secondary align-baseline">
                            <Calendar className="mb-1 mr-2" size={18} />
                            <small>{items.tgl_distribusi}</small>
                          </span>
                          <h6>
                            {items.jenis_pupuk} distribution to {items.petani}
                          </h6>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
              <div></div>
            </>
          ) : (
            <div className=" d-flex justify-content-center ">
              <div className="spinner-border text-info " role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, null)(EventCalender);
