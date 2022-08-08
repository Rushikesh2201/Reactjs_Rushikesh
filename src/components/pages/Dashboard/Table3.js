import { objectTypeAnnotation } from "@babel/types";
import React, { Component } from "react";
import Styles from "./css/Table3.module.css";

export class Table3 extends Component {
  // const Table3 = (props) => {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "California Autohaus <AA4>",
          firstTime: 44,
          answered: 68,
          missed: 2,
          total: 70,
          average_duration: "01m 67s",
        },
        {
          name: "Aero Auto Repair LNM <A63>",
          firstTime: 178,
          answered: 351,
          missed: 9,
          total: 360,
          average_duration: "01m 66s",
        },
        {
          name: "Aero Auto Repair San Carlos <AA5>",
          firstTime: 127,
          answered: 187,
          missed: 4,
          total: 191,
          average_duration: "01m 34s",
        },
        {
          name: "Aero Auto Repair Vista <A0O>",
          firstTime: 110,
          answered: 152,
          missed: 6,
          total: 158,
          average_duration: "01m 37s",
        },
      ],
    };
  }
  render() {
    return (
      <>
        {/* {Object.keys(props.data).length > 0 && props.data.results.length > 0 && ( */}
        {/* {object.key(this.state.data).length > 0 && this.state.data.} */}
        <div className="col-md-12 col-sm-12">
          <table className={[Styles.table, "col-md-12 col-sm-12"].join(" ")}>
            <thead>
              <tr>
                <th className={Styles.tableHeading1}>Name</th>
                <th className={Styles.tableHeading} style={{ width: "10%" }}>
                  First Time
                </th>
                <th className={Styles.tableHeading} style={{ width: "10%" }}>
                  Answered
                </th>
                <th className={Styles.tableHeading} style={{ width: "10%" }}>
                  Missed
                </th>
                <th className={Styles.tableHeading} style={{ width: "10%" }}>
                  Total
                </th>
                <th className={Styles.tableHeading} style={{ width: "15%" }}>
                  Average Duration
                </th>
              </tr>
            </thead>
            {this.state.data.map((rowdata, i) => (
              <tbody className={Styles.tableBody} key={`${i}_table3`}>
                <tr>
                  <td className={Styles.tableData1}>{rowdata.name}</td>
                  <td className={Styles.tableData} style={{}}>
                    {rowdata.firstTime}
                  </td>
                  <td className={Styles.tableData} style={{}}>
                    {rowdata.answered}
                  </td>
                  <td className={Styles.tableData} style={{}}>
                    {rowdata.missed}
                  </td>
                  <td className={Styles.tableData} style={{}}>
                    {rowdata.total}
                  </td>
                  <td className={Styles.tableData} style={{}}>
                    {rowdata.average_duration}
                  </td>
                </tr>
              </tbody>
            ))}
            {/* {props.data.results.map((rowdata, i) => ( */}
            {/* <tbody className={Styles.tableBody} key={`${i}_table3`}>
                            <tr>
                                <td className={Styles.tableData1}>{rowdata.detail.tracking_info.name}</td>
                                <td className={Styles.tableData}>{rowdata.first_time_callers}</td>
                                <td className={Styles.tableData}>{rowdata.answered_calls}</td>
                                <td className={Styles.tableData}>{rowdata.missed_calls}</td>
                                <td className={Styles.tableData}>{rowdata.total_calls}</td>
                                <td className={Styles.tableData}>{rowdata.formatted_average_duration}</td>
                            </tr>
                        </tbody>
                    ))} */}
          </table>
        </div>
        {/* )}  */}
      </>
    );
  }
}
export default Table3;
