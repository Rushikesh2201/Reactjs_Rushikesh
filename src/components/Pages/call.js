import "../../components/css/call.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export class Call extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          name: "Ascot Automotive <A5U>",
          first_time: 78,
          Answered: 116,
          Missed: 7,
          Total: 123,
          Average_Duration: "1m 54s",
        },

        {
          name: "Flagstaff Heath's Auto Service <A2B> ",
          first_time: 78,
          Answered: 139,
          Missed: 6,
          Total: 145,
          Average_Duration: "1m 45s",
        },

        {
          name: "University Auto Repair <A62>",
          first_time: 521,
          Answered: 1081,
          Missed: 98,
          Total: 1179,
          Average_Duration: "1m 14s",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <FontAwesomeIcon
            icon={faSquarePhone}
            className="IconCall"
            size="7x"
            color="orange"
          />
          <div className="Heading">
            <h1 class="HeadingCall">Calls</h1>

            <small className="date">
              <p className="Text">FROM</p>
              <p>07- 01-2021</p>

              <FontAwesomeIcon
                icon={faArrowRight}
                color="orange"
                className="IconArrow"
                size=""
              />

              <p className="Text">TO </p>
              <p>07 - 31 - 2021</p>
            </small>
          </div>
        </div>

        <div className="tableDiv">
          <table className="table">
            <thead>
              <tr>
                <th className="tableHeading1">Name</th>
                <th className="tableHeading">First Time</th>
                <th className="tableHeading">Answered</th>
                <th className="tableHeading">Missed</th>
                <th className="tableHeading">Total</th>
                <th className="tableHeading">Average Duration</th>
              </tr>
            </thead>
            {this.state.data.map((rowdata, i) => (
              <tbody className="tableBody">
                <tr>
                  <td className="tableData1">{rowdata.name}</td>
                  <td className="tableData">{rowdata.first_time}</td>
                  <td className="tableData">{rowdata.Answered}</td>
                  <td className="tableData">{rowdata.Missed}</td>
                  <td className="tableData">{rowdata.Total}</td>
                  <td className="tableData">{rowdata.Average_Duration}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default Call;
