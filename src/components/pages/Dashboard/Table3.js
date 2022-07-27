
import React, { Component } from "react";
import Styles from './css/Table3.module.css'

export class Table3 extends Component {

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
            <table className={Styles.table}>
                <thead>
                    <tr>
                        <th className={Styles.tableHeading1}>Name</th>
                        <th className={Styles.tableHeading}>First Time</th>
                        <th className={Styles.tableHeading}>Answered</th>
                        <th className={Styles.tableHeading}>Missed</th>
                        <th className={Styles.tableHeading}>Total</th>
                        <th className={Styles.tableHeading}>Average Duration</th>
                    </tr>
                </thead>
                {this.state.data.map((rowdata, i) => (
                    <tbody className={Styles.tableBody}>
                        <tr>
                            <td className={Styles.tableData1}>{rowdata.name}</td>
                            <td className={Styles.tableData}>{rowdata.first_time}</td>
                            <td className={Styles.tableData}>{rowdata.Answered}</td>
                            <td className={Styles.tableData}>{rowdata.Missed}</td>
                            <td className={Styles.tableData}>{rowdata.Total}</td>
                            <td className={Styles.tableData}>{rowdata.Average_Duration}</td>
                        </tr>
                    </tbody>
                ))}
            </table>

        )
    }
}
export default Table3;