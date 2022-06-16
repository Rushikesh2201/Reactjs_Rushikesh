
import React , {Component} from "react";

export class Table extends Component{
    constructor() {
        super();
    
        this.state = {
    
          data: [
            {
              name: "Campaign group",
              CAMPAIGN: "Ascot_Automotive_<A5U>",
              CLICKS: 211,
              IMPRESSIONS: 3622,
              CTR: "5.83%",
              AVGCPC: " $7.3",
              COST: "$1539.98",
            },
          ],
    
          data1: [
            {
              name: "Campaign group: Heath's Auto Service",
              CAMPAIGN: "Leads Near Me - Heath's Auto Service <A2B>",
              CLICKS: 176,
              IMPRESSIONS: 2291,
              CTR: "7.68% ",
              AVGCPC: " $8.13",
              COST: "$1430",
            },
          ],
    
          data2: [
            {
              name: "Campaign group: University Auto Repair",
              CAMPAIGN: "University Auto Repair <A62>",
              CLICKS: 229,
              IMPRESSIONS: 3256,
              CTR: "7.03% ",
              AVGCPC: "$4.83",
              COST: "$1105.26",
            },
          ],
        }
    }   
    render(){
        return(
            <div className="TableContainer">
              <h3 className="campaign">Campaign group </h3>
           
              <table className="Table1">
                <thead>
                  <tr>
                    <th className="Table1column1">CAMPAIGN</th>
                    <th className="Table1column">CLICKS</th>
                    <th className="Table1column">IMPRESSIONS</th>
                    <th className="Table1column">CTR</th>
                    <th className="Table1column">AVG. CPC </th>
                    <th className="Table1column">COST</th>
                  </tr>
                </thead>
                {this.state.data.map((rowdata, i) => (
                  <tbody className="Table1Body">
                    <tr>
                      <td className="Table1Data">{rowdata.CAMPAIGN}</td>
                      <td className="Table1Data">{rowdata.CLICKS}</td>
                      <td className="Table1Data">{rowdata.IMPRESSIONS}</td>
                      <td className="Table1Data">{rowdata.CTR}</td>
                      <td className="Table1Data">{rowdata.AVGCPC}</td>
                      <td className="Table1Data">{rowdata.COST}</td>
                    </tr>
                  </tbody>
                ))}
              </table>

            <h3 className="campaign">Campaign group: Heath's Auto Service </h3>
              <table className="Table1">
                <thead>
                  <tr>
                    <th className="Table1column1">CAMPAIGN</th>
                    <th className="Table1column">CLICKS</th>
                    <th className="Table1column">IMPRESSIONS</th>
                    <th className="Table1column">CTR</th>
                    <th className="Table1column">AVG. CPC </th>
                    <th className="Table1column">COST</th>
                  </tr>
                </thead>

                {this.state.data1.map((rowdata, i) => (
                  <tbody className="Table1Body">
                    <tr>
                      <td className="Table1Data">{rowdata.CAMPAIGN}</td>
                      <td className="Table1Data">{rowdata.CLICKS}</td>
                      <td className="Table1Data">{rowdata.IMPRESSIONS}</td>
                      <td className="Table1Data">{rowdata.CTR}</td>
                      <td className="Table1Data">{rowdata.AVGCPC}</td>
                      <td className="Table1Data">{rowdata.COST}</td>
                    </tr>
                  </tbody>
                ))}
              </table>

            <h3 className="campaign">
              Campaign group: University Auto Repair
            </h3>

              <table className="Table1">
                <thead>
                  <tr>
                    <th className="Table1column1">CAMPAIGN</th>
                    <th className="Table1column">CLICKS</th>
                    <th className="Table1column">IMPRESSIONS</th>
                    <th className="Table1column">CTR</th>
                    <th className="Table1column">AVG. CPC </th>
                    <th className="Table1column">COST</th>
                  </tr>
                </thead>

                {this.state.data2.map((rowdata, i) => (
                  <tbody className="Table1Body">
                    <tr>
                      <td className="Table1Data">{rowdata.CAMPAIGN}</td>
                      <td className="Table1Data">{rowdata.CLICKS}</td>
                      <td className="Table1Data">{rowdata.IMPRESSIONS}</td>
                      <td className="Table1Data">{rowdata.CTR}</td>
                      <td className="Table1Data">{rowdata.AVGCPC}</td>
                      <td className="Table1Data">{rowdata.COST}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
          </div>
        )
    }
}
export default Table;