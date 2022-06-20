
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlassChart} from '@fortawesome/free-solid-svg-icons'
import Styles from "../../css/MonthlyReport/Table2.module.css"

export class Table2 extends Component{
        constructor(){
            super();
            this.state = {
                data3: [
                    {
                      name: "car repair",
                      position: 3,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "brake service",
                      position: 3,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "auto repair",
                      position: 3,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "transmission repair",
                      position: 3,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "auto repair near me",
                      position: 3,
                      location: "Flagstaff,Arizona,United States",
                    },
                  ],
            
                  data4: [
                    {
                      name: "transmission repair",
                      position: 4,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "auto shop near me",
                      position: 5,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "auto repair",
                      position: 5,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "mechanic near me",
                      position: 5,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "auto repair near me",
                      position: 6,
                      location: "Flagstaff,Arizona,United States",
                    },
                  ],
            
                  data5: [
                    {
                      name: "auto repair ",
                      position: 2,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "mechanic near me",
                      position: 2,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "auto shop near me ",
                      position: 2,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "auto repair near me",
                      position: 2,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "car repair ",
                      position: 2,
                      location: "Flagstaff,Arizona,United States",
                    },
                  ],
            
                  data6: [
                    {
                      name: "brake service",
                      position: 1,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "car repair",
                      position: 2,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "mechanic near me",
                      position: 2,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "auto shop near me ",
                      position: 2,
                      location: "Flagstaff,Arizona,United States",
                    },
                    {
                      name: "auto repair",
                      position: 2,
                      location: "Flagstaff,Arizona,United States",
                    },
                  ],
            }
        }

    render(){
        return(
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

                {this.state.data3.map((rowdata, i) => (
                  <tbody className={Styles.table2body}>
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
                {this.state.data4.map((rowdata, i) => (
                  <tbody className={Styles.table2body}>
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
                  className={Styles.Icon}
                  size="10x"
                />
                 <h2 className={Styles.Local}>
                Local SEO
              </h2>
            </div>
              <div className={Styles.LocalUrlDiv1}>
                <h2 className={Styles.LocalUrl}>URL used for reports</h2>
              </div>
            </div>

            <div className={Styles.LocalParaDiv}>
              <p className={Styles.LocalPara}>
                TOP 5 KEYWORDS BY PLATFORM (07 - 31 - 2021)
              </p> 
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
                {this.state.data5.map((rowdata, i) => (
                  <tbody className={Styles.table2body}>
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
                {this.state.data6.map((rowdata, i) => (
                  <tbody className={Styles.table2body}>
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
        )
    }
}
export default Table2;