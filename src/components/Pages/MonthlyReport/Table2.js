
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlassChart} from '@fortawesome/free-solid-svg-icons'

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
            <div className="LocalTableDiv">
              <table className="Table2">
                <thead>
                  <tr>
                    <th className="Table2column1">QUERY (desktop) </th>
                    <th className="Table2column">POSITION</th>
                    <th className="Table2column">LOCATION</th>
                  </tr>
                </thead>

                {this.state.data3.map((rowdata, i) => (
                  <tbody className="table2body">
                    <tr>
                      <td className="Table2Data">{rowdata.name}</td>
                      <td className="Table2Data">{rowdata.position}</td>
                      <td className="Table2Data">{rowdata.location}</td>
                    </tr>
                  </tbody>
                ))}
              </table>

              <table className="Table3">
                <thead>
                  <tr>
                    <th className="Table2column1">QUERY (mobile) </th>
                    <th className="Table2column">POSITION</th>
                    <th className="Table2column">LOCATION</th>
                  </tr>
                </thead>
                {this.state.data4.map((rowdata, i) => (
                  <tbody className="table2body">
                    <tr>
                      <td className="Table2Data">{rowdata.name}</td>
                      <td className="Table2Data">{rowdata.position}</td>
                      <td className="Table2Data">{rowdata.location}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
            <div className="Content">
            <div className="MainContent1">
              <h2 className="Local">
                <FontAwesomeIcon
                  icon={faMagnifyingGlassChart}
                  className="Icon"
                  size="5x"
                />
                Local SEO
              </h2>
            </div>
              <div className="LocalUrlDiv1">
                <h2 className="LocalUrl">URL used for reports</h2>
              </div>
            </div>

            <div className="LocalParaDiv">
              <p className="LocalPara">
                TOP 5 KEYWORDS BY PLATFORM (07 - 31 - 2021)
              </p> 
            </div>
           
            <div className="LocalTableDiv">
              <table className="Table2">
                <thead>
                  <tr>
                    <th className="Table2column1">QUERY (desktop) </th>
                    <th className="Table2column">POSITION</th>
                    <th className="Table2column">LOCATION</th>
                  </tr>
                </thead>
                {this.state.data5.map((rowdata, i) => (
                  <tbody className="table2body">
                    <tr>
                      <td className="Table2Data">{rowdata.name}</td>
                      <td className="Table2Data">{rowdata.position}</td>
                      <td className="Table2Data">{rowdata.location}</td>
                    </tr>
                  </tbody>
                ))}
              </table>

              <table className="Table3">
                <thead>
                  <tr>
                    <th className="Table2column1">QUERY (mobile) </th>
                    <th className="Table2column">POSITION</th>
                    <th className="Table2column">LOCATION</th>
                  </tr>
                </thead>
                {this.state.data6.map((rowdata, i) => (
                  <tbody className="table2body">
                    <tr>
                      <td className="Table2Data">{rowdata.name}</td>
                      <td className="Table2Data">{rowdata.position}</td>
                      <td className="Table2Data">{rowdata.location}</td>
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