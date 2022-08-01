
import React, { Component } from "react";
import Styles from './css/Table3.module.css'

const Table3 = (props) => {


    return (
        <>
            {Object.keys(props.data).length > 0 && props.data.results.length > 0 && (

                <table className={Styles.table}>
                    <thead>
                        <tr>
                            <th className={Styles.tableHeading1}>Name</th>
                            <th className={Styles.tableHeading} style={{ width: '10%' }}>First Time</th>
                            <th className={Styles.tableHeading} style={{ width: '10%' }}>Answered</th>
                            <th className={Styles.tableHeading} style={{ width: '10%' }}>Missed</th>
                            <th className={Styles.tableHeading} style={{ width: '10%' }}>Total</th>
                            <th className={Styles.tableHeading} style={{ width: '15%' }}>Average Duration</th>
                        </tr>
                    </thead>
                    {props.data.results.map((rowdata, i) => (
                        <tbody className={Styles.tableBody} key={`${i}_table3`}>
                            <tr>
                                <td className={Styles.tableData1}>{rowdata.detail.tracking_info.name}</td>
                                <td className={Styles.tableData}>{rowdata.first_time_callers}</td>
                                <td className={Styles.tableData}>{rowdata.answered_calls}</td>
                                <td className={Styles.tableData}>{rowdata.missed_calls}</td>
                                <td className={Styles.tableData}>{rowdata.total_calls}</td>
                                <td className={Styles.tableData}>{rowdata.formatted_average_duration}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            )}
        </>
    )
}
export default Table3;