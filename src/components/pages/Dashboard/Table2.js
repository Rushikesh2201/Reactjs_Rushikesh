import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";
import Styles from "./css/Table2.module.css";

function Table2(props) {
  return (
    <div>
      <div className={Styles.LocalTableDiv}>
        <table className={Styles.Table2}>
          <thead>
            <tr>
              <th className={Styles.Table2column1}>QUERY (desktop) </th>
              <th className={Styles.Table2column}>POSITION</th>
              <th className={Styles.Table2column}>LOCATION</th>
            </tr>
          </thead>

          {props.data3.map((rowdata, i) => (
            <tbody className={Styles.table2body}  key={`${i}_data3`}>
              <tr>
                <td className={Styles.Table2Data}>{rowdata.name}</td>
                <td className={Styles.Table2Data}>{rowdata.position}</td>
                <td className={Styles.Table2Data}>{rowdata.location}</td>
              </tr>
            </tbody>
          ))}
        </table>

        <table className={Styles.Table3}>
          <thead>
            <tr>
              <th className={Styles.Table2column1}>QUERY (mobile) </th>
              <th className={Styles.Table2column}>POSITION</th>
              <th className={Styles.Table2column}>LOCATION</th>
            </tr>
          </thead>
          {props.data4.map((rowdata, i) => (
            <tbody className={Styles.table2body} key={`${i}_data4`}>
              <tr>
                <td className={Styles.Table2Data}>{rowdata.name}</td>
                <td className={Styles.Table2Data}>{rowdata.position}</td>
                <td className={Styles.Table2Data}>{rowdata.location}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={Styles.Content}>
        <div className={Styles.MainContent1}>
          <FontAwesomeIcon
            icon={faMagnifyingGlassChart}
            size="10x"
            className = {Styles.Icon}
          />
          <h2 className={Styles.Local}>{props.heading}</h2>
        </div>
      </div>
      <div className={Styles.LocalUrlDiv1}>
        <h2 className={Styles.LocalUrl}>{props.url}</h2>
      </div>

      <div className={Styles.LocalParaDiv}>
        <p className={Styles.LocalPara}>{props.description}</p>
      </div>

      <div className={Styles.LocalTableDiv}>
        <table className={Styles.Table2}>
          <thead>
            <tr>
              <th className={Styles.Table2column1}>QUERY (desktop) </th>
              <th className={Styles.Table2column}>POSITION</th>
              <th className={Styles.Table2column}>LOCATION</th>
            </tr>
          </thead>
          {props.data5.map((rowdata, i) => (
            <tbody className={Styles.table2body} key={`${i}_data5`}>
              <tr>
                <td className={Styles.Table2Data}>{rowdata.name}</td>
                <td className={Styles.Table2Data}>{rowdata.position}</td>
                <td className={Styles.Table2Data}>{rowdata.location}</td>
              </tr>
            </tbody>
          ))}
        </table>

        <table className={Styles.Table3}>
          <thead>
            <tr>
              <th className={Styles.Table2column1}>QUERY (mobile) </th>
              <th className={Styles.Table2column}>POSITION</th>
              <th className={Styles.Table2column}>LOCATION</th>
            </tr>
          </thead>
          {props.data6.map((rowdata, i) => (
            <tbody className={Styles.table2body} key={`${i}_data6`}>
              <tr>
                <td className={Styles.Table2Data}>{rowdata.name}</td>
                <td className={Styles.Table2Data}>{rowdata.position}</td>
                <td className={Styles.Table2Data}>{rowdata.location}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
export default Table2;
