import "../../core/App.css";
//import {Gradient} from 'react-gradient';
import React, { Component } from "react";
//import jsonData from "./data.json";

// const gradient = [
//    [ '#ff4000', '#666666', '#000000' ]
// ]

export class Dashboard extends Component {
  // constructor() {
  //   super();

  //   this.state = { data: jsonData };
  // }

//  CampainData = () => {
//     data.map((info) => {
//       console.log(info);
//       return (
//         <tr>
//           <td>{info.CAMPAIGN}</td>
//         </tr>
//       );
//     });
//   };

  constructor() {
  //call constructor for initialize the variable
  super();

   this.state = {
      data :
      [

       {
        name : "Campaign group",
        CAMPAIGN : "Ascot_Automotive_<A5U>",
       CLICKS: 211,
        IMPRESSIONS : 3622,
        CTR :"5.83%",
       AVGCPC :" $7.3",
       COST : "$1539.98"
      },
      ],

    data1:  [

       {
        name1 : "Campaign group: Heath's Auto Service",
        CAMPAIGN1 : "Leads Near Me - Heath's Auto Service <A2B>",
        CLICKS1 : 176 ,
        IMPRESSIONS1 : 2291,
        CTR1 :"7.68% ",
        AVGCPC1 :" $8.13",
        COST1 : "$1430",
      },
     ],

    data3:  [
       {
         name2 : "Campaign group: University Auto Repair",
        CAMPAIGN2 : "University Auto Repair <A62>",
       CLICKS2 : 229 ,
        IMPRESSIONS2 : 3256,
        CTR2 :"7.03% ",
        AVGCPC2 :"$4.83",
        COST2 : "$1105.26"
      },
    ],
  rows : '',

   }
console.log(this.state.data);
  } //Close constructorconstructor

  render() {
    return (
      <div className="container">
        <div className="App">
          <header className="App-header">
            {/* <Gradient 
           gradient ={ gradient } 
           property="background"
            duration={ 3000 }
           angle="45deg"
          />     */}
            <h1 className="Title">Monthly Report </h1>
            <small className="small">Tobey Harris - Heath's Auto</small>
            <div className="TextLead">
              <h1 className="LeadH1">Leads Near Me</h1>
            </div>
          </header>

          <div className=" App2">
            <h1 className="Ads">Google Ads</h1>
            <p className="smallAdText">Previous 30 days</p>
          </div>

          <div className="">
            <h3 className="campaign">Campaign group </h3>
            <div >
              <table className="CampaignGroupTable">
                <thead>
                 <tr>
                    <th className="CampaignGroupTableColumns">CAMPAIGN</th>
                    <th className="CampaignGroupTableColumns">CLICKS</th>
                    <th className="CampaignGroupTableColumns">IMPRESSIONS</th>
                    <th className="CampaignGroupTableColumns">CTR</th>
                    <th className="CampaignGroupTableColumns">AVG. CPC </th>
                    <th className="CampaignGroupTableColumns">COST</th>
                  </tr>
                  </thead>
               {
                 this.state.data.map((rowdata, i) => 
               <tbody className ="CampaignGroupTableBody">
                <tr><td>{rowdata.name}</td></tr>
                <tr><td>{rowdata.CAMPAIGN}</td></tr>
                <tr><td>{rowdata.CLICKS}</td></tr>
                <tr><td>{rowdata.IMPRESSIONS}</td></tr>
                <tr><td>{rowdata.CTR}</td></tr>
                <tr><td>{rowdata.AVGCPC}</td></tr>
                <tr><td>{rowdata.COST}</td></tr>
                </tbody>)}
                {/* <tbody>{this.tableRows}</tbody> */}
         

           
              </table>
            </div>
          </div>

          <div className="">
            <h3 className="campaign">Campaign group: Heath's Auto Service </h3>
            <div>
              {/* <table className="CampaignGroupTable">
                <thead>
                <tr>
                  <th className="CampaignGroupTableColumns">CAMPAIGN</th>
                  <th className="CampaignGroupTableColumns">CLICKS</th>
                  <th className="CampaignGroupTableColumns">IMPRESSIONS</th>
                  <th className="CampaignGroupTableColumns">CTR</th>
                  <th className="CampaignGroupTableColumns">AVG. CPC </th>
                  <th className="CampaignGroupTableColumns">COST</th>
                </tr>
              </thead>
                {/* @Table rows */}
              {/* </table>  */}
            </div>
          </div>

          <div className="">
            <h3 className="campaign">
              Campaign group: University Auto Repair{" "}
            </h3>
            <div>
              {/* <table className="CampaignGroupTable">
              <thead>
                <tr>
                  <th className="CampaignGroupTableColumns">CAMPAIGN</th>
                  <th className="CampaignGroupTableColumns">CLICKS</th>
                  <th className="CampaignGroupTableColumns">IMPRESSIONS</th>
                  <th className="CampaignGroupTableColumns">CTR</th>
                  <th className="CampaignGroupTableColumns">AVG. CPC </th>
                  <th className="CampaignGroupTableColumns">COST</th>
                </tr>
                </thead>
                {/* @Table rows */}
              {/* </table>  */}
            </div>
          </div>

          <div className="container2">
            <div className="MainContent">
              <h2 className="Local">Local SEO</h2>

              <div className="LocalUrlDiv">
                <h2 className="LocalUrl">URL used for reports</h2>
              </div>
            </div>

            <div className="LocalParaDiv">
              <p className="LocalPara">
                TOP 5 KEYWORDS BY PLATFORM (07 - 31 - 2021)
              </p>
            </div>

            <div className="LocalTableDiv">
              {/* <table className="LocalSEOTable1">
              <thead>
                <tr>
                  <th className="LocalSEOTableColumns">QUERY (desktop) </th>
                  <th className="LocalSEOTableColumns">POSITION</th>
                  <th className="LocalSEOTableColumns">LOCATION</th>
                </tr>
                </thead>
              </table> */}

              {/* <table className="LocalSEOTable2">
              <thead>
                <tr>
                  <th className="LocalSEOTableColumns">QUERY (mobile) </th>
                  <th className="LocalSEOTableColumns">POSITION</th>
                  <th className="LocalSEOTableColumns">LOCATION</th>
                </tr>
                </thead>
              </table> */}
            </div>

            <div className="MainContent">
              <h2 className="Local">Local SEO</h2>

              <div className="LocalUrlDiv">
                <h2 className="LocalUrl">URL used for reports</h2>
              </div>
            </div>

            <div className="LocalParaDiv">
              <p className="LocalPara">
                TOP 5 KEYWORDS BY PLATFORM (07 - 31 - 2021)
              </p>
            </div>

            <div className="LocalTableDiv">
              {/* <table className="LocalSEOTable1">
                <thead>
                <tr>
                  <th className="LocalSEOTableColumns">QUERY (desktop) </th>
                  <th className="LocalSEOTableColumns">POSITION</th>
                  <th className="LocalSEOTableColumns">LOCATION</th>
                </tr>
                </thead>
              </table> */}
{/* 
              <table className="LocalSEOTable2">
                <thead>
                <tr>
                  <th className="LocalSEOTableColumns">QUERY (mobile) </th>
                  <th className="LocalSEOTableColumns">POSITION</th>
                  <th className="LocalSEOTableColumns">LOCATION</th>
                </tr>
                </thead>
              </table> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
