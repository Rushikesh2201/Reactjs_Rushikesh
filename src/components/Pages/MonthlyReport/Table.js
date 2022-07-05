import React from "react";
import Styles from "../../css/MonthlyReport/Table.module.css";

function Table(props) {
  return (
    <div className={Styles.TableContainer}>
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
        {props.data.map((rowdata, i) => (
          <tbody className={Styles.Table1Body}>
            <tr>
              <td className={Styles.Table1Data1}>{rowdata.CAMPAIGN}</td>
              <td className={Styles.Table1Data}>{rowdata.CLICKS}</td>
              <td className={Styles.Table1Data}>{rowdata.IMPRESSIONS}</td>
              <td className={Styles.Table1Data}>{rowdata.CTR}</td>
              <td className={Styles.Table1Data}>{rowdata.AVGCPC}</td>
              <td className={Styles.Table1Data}>{rowdata.COST}</td>
            </tr>
          </tbody>
        ))}
      </table>

      <h3 className={Styles.campaign}>Campaign group: Heath's Auto Service </h3>
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

        {props.data1.map((rowdata, i) => (
          <tbody className={Styles.Table1Body}>
            <tr>
              <td className={Styles.Table1Data1}>{rowdata.CAMPAIGN}</td>
              <td className={Styles.Table1Data}>{rowdata.CLICKS}</td>
              <td className={Styles.Table1Data}>{rowdata.IMPRESSIONS}</td>
              <td className={Styles.Table1Data}>{rowdata.CTR}</td>
              <td className={Styles.Table1Data}>{rowdata.AVGCPC}</td>
              <td className={Styles.Table1Data}>{rowdata.COST}</td>
            </tr>
          </tbody>
        ))}
      </table>

      <h3 className={Styles.campaign}>
        Campaign group: University Auto Repair
      </h3>

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

        {props.data2.map((rowdata, i) => (
          <tbody className={Styles.Table1Body}>
            <tr>
              <td className={Styles.Table1Data1}>{rowdata.CAMPAIGN}</td>
              <td className={Styles.Table1Data}>{rowdata.CLICKS}</td>
              <td className={Styles.Table1Data}>{rowdata.IMPRESSIONS}</td>
              <td className={Styles.Table1Data}>{rowdata.CTR}</td>
              <td className={Styles.Table1Data}>{rowdata.AVGCPC}</td>
              <td className={Styles.Table1Data}>{rowdata.COST}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
export default Table;
