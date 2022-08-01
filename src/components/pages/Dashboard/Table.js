import React from "react";
import Styles from "./css/Table.module.css";

function Table(props) {
  return (
    <>
      {Object.keys(props.data).length > 0 && props.data.results.length > 0 && (
        <>
          {props.data.results.map((el, i) => (
            <div className={Styles.TableContainer} key={`${i}_table_outer`}>
              <h3 className={Styles.campaign}>Campaign group: {props.data.results[i][0].detail.customer_info} </h3>
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
                {el.map((rowdata, i) => (
                  <tbody className={Styles.Table1Body} key={`${i}_table_body`}>
                    <tr>
                      <td className={Styles.Table1Data}>{rowdata.detail.name}</td>
                      <td className={Styles.Table1Data}>{rowdata.clicks}</td>
                      <td className={Styles.Table1Data}>{rowdata.impressions}</td>
                      <td className={Styles.Table1Data}>{Number(rowdata.ctr).toFixed(2)}</td>
                      <td className={Styles.Table1Data}>${Number(rowdata.average_cpc).toFixed(2)}</td>
                      <td className={Styles.Table1Data}>${Number(rowdata.cost).toFixed(2)}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          ))}
        </>
      )}
    </>
  );
}
export default Table;
