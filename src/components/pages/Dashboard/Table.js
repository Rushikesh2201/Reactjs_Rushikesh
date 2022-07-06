import React from "react";
import Styles from "./css/Table.module.css";

function Table(props) {
  return (
    <>
    {Object.keys(props.data).length > 0 && props.data.results.length > 0 && (
    <div className={Styles.TableContainer}>
      {console.log(props)}
      <h3 className={Styles.campaign}>Campaign group </h3>

      <table className={Styles.Table1}>
        <thead>
          <tr>
            <th className={Styles.Table1column1}>CAMPAIGN</th>
            <th className={Styles.Table1column}>CLICKS</th>
            <th className={Styles.Table1column}>IMPRESSIONS</th>
            <th className={Styles.Table1column}>CTR</th>
            <th className={Styles.Table1column}>AVG. CPC </th>
            <th className={Styles.Table1column}>COST</th>
          </tr>
        </thead>
        {props.data.results.map((rowdata, i) => (
          <tbody className={Styles.Table1Body} key={`${i}_table`}>
            {console.log(rowdata)}
            <tr>
              <td className={Styles.Table1Data1}>{rowdata.name[0]}</td>
              <td className={Styles.Table1Data}>{rowdata.clicks}</td>
              <td className={Styles.Table1Data}>{rowdata.impressions}</td>
              <td className={Styles.Table1Data}>{Number(rowdata.ctr).toFixed(2)}</td>
              <td className={Styles.Table1Data}>{rowdata.average_cpc}</td>
              <td className={Styles.Table1Data}>{rowdata.cost}</td>
            </tr>
          </tbody>
        ))}
      </table>

      
    </div>
    )}
    </>
  );
}
export default Table;
