import "./App.css";
//import {Gradient} from 'react-gradient';
import React, { Component } from "react";
//import Media from "react-media";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlassChart} from "@fortawesome/free-solid-svg-icons"


export class App extends Component {

  constructor() {
  //call constructor for initialize the variable
  super();

   this.state = {

    device : "mobile",

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
        name : "Campaign group: Heath's Auto Service",
        CAMPAIGN : "Leads Near Me - Heath's Auto Service <A2B>",
        CLICKS : 176 ,
        IMPRESSIONS : 2291,
        CTR :"7.68% ",
        AVGCPC :" $8.13",
        COST  : "$1430",
      },
     ],

    data2:  [
       {
         name : "Campaign group: University Auto Repair",
        CAMPAIGN : "University Auto Repair <A62>",
       CLICKS : 229 ,
        IMPRESSIONS : 3256,
        CTR :"7.03% ",
        AVGCPC :"$4.83",
        COST : "$1105.26"
      },
    ],

    data3 : [
      {
        name : "car repair",
        position : 3,
        location : "Flagstaff,Arizona,United States",
      }, {
        name : "brake service",
        position : 3,
        location : "Flagstaff,Arizona,United States",
      },
      {
        name : "auto repair",
        position : 3,
        location : "Flagstaff,Arizona,United States",
      },
      {
        name : "transmission repair",
        position : 3,
        location : "Flagstaff,Arizona,United States",
      },
      {
        name : "auto repair near me",
        position : 3,
        location : "Flagstaff,Arizona,United States",
      }
    ],

    data4 : [
      {
        name : "transmission repair",
        position : 4,
        location : "Flagstaff,Arizona,United States",
      }, {
        name : "auto shop near me",
        position : 5,
        location : "Flagstaff,Arizona,United States",
      },
      {
        name : "auto repair",
        position : 5,
        location : "Flagstaff,Arizona,United States",
      },
      {
        name : "mechanic near me",
        position : 5,
        location : "Flagstaff,Arizona,United States",
      },
      {
        name : "auto repair near me",
        position : 6,
        location : "Flagstaff,Arizona,United States",
      }
    ],

    data5 : [
      {
        name : "auto repair ",
        position : 2,
        location : "Flagstaff,Arizona,United States",
      }, {
        name : "mechanic near me",
        position : 2,
        location : "Flagstaff,Arizona,United States",
      },
      {
        name : "auto shop near me ",
        position : 2,
        location : "Flagstaff,Arizona,United States",
      },
      {
        name : "auto repair near me",
        position : 2,
        location : "Flagstaff,Arizona,United States",
      },
      {
        name : "car repair ",
        position : 2,
        location : "Flagstaff,Arizona,United States",
      }
    ],

    data6 : [
      {
        name : "brake service",
        position : 1,
        location : "Flagstaff,Arizona,United States",
      }, {
        name : "car repair",
        position : 2,
        location : "Flagstaff,Arizona,United States",
      },
      {
        name : "mechanic near me",
        position : 2,
        location : "Flagstaff,Arizona,United States",
      },
      {
        name : "auto shop near me ",
        position : 2,
        location : "Flagstaff,Arizona,United States",
      },
      {
        name : "auto repair",
        position : 2,
        location : "Flagstaff,Arizona,United States",
      }
    ],

  rows : '',

   }


console.log(this.state.data);


  } //Close constructorconstructor

  render() {
    return (
      <div className="container">
        {/* <Media
          queries = {{ medium: "(max-width: 1024px)" }}
          defaultMatches={{ medium: this.state.device === 'mobile' }}
          render={() =><h1>Hiii</h1> } /> */}
         
        <div className="App">
          <header className="App-header">
          
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

          <div className="MainContiner">
            <h3 className="campaign">Campaign group </h3>
            <div  >
              <table className="CampaignGroupTable">
                <thead>
                 <tr>
                    <th className="CampaignGroupTableColumns1">CAMPAIGN</th>
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
                <tr>
                  <td className = "RowStyle">{rowdata.CAMPAIGN}</td>
                  <td className = "RowStyle">{rowdata.CLICKS}</td>
                  <td className = "RowStyle" >{rowdata.IMPRESSIONS}</td>
                  <td className = "RowStyle">{rowdata.CTR}</td>
                  <td className = "RowStyle">{rowdata.AVGCPC}</td>
                  <td className = "RowStyle">{rowdata.COST}</td>
                </tr>
                </tbody> 
                )
               
                }
  
              </table>
            </div>
          </div>

          <div className="">
            <h3 className="campaign">Campaign group: Heath's Auto Service </h3>
            <div>
               <table className="CampaignGroupTable">
                <thead>
                <tr>
                  <th className="CampaignGroupTableColumns1">CAMPAIGN</th>
                  <th className="CampaignGroupTableColumns">CLICKS</th>
                  <th className="CampaignGroupTableColumns">IMPRESSIONS</th>
                  <th className="CampaignGroupTableColumns">CTR</th>
                  <th className="CampaignGroupTableColumns">AVG. CPC </th>
                  <th className="CampaignGroupTableColumns">COST</th>
                </tr>
              </thead>

              {
                 this.state.data1.map((rowdata, i) =>
               <tbody className ="CampaignGroupTableBody">
                <tr>
                  <td>{rowdata.CAMPAIGN}</td>
                  <td>{rowdata.CLICKS}</td>
                  <td>{rowdata.IMPRESSIONS}</td>
                  <td>{rowdata.CTR}</td>
                  <td>{rowdata.AVGCPC}</td>
                  <td>{rowdata.COST}</td>
                </tr>
                </tbody>
                )
              }
               </table>  
            </div>
          </div>

          <div className="">
            <h3 className="campaign">
              Campaign group: University Auto Repair{" "}
            </h3>
            <div>
              <table className="CampaignGroupTable">
              <thead>
                <tr>
                  <th className="CampaignGroupTableColumns1">CAMPAIGN</th>
                  <th className="CampaignGroupTableColumns">CLICKS</th>
                  <th className="CampaignGroupTableColumns">IMPRESSIONS</th>
                  <th className="CampaignGroupTableColumns">CTR</th>
                  <th className="CampaignGroupTableColumns">AVG. CPC </th>
                  <th className="CampaignGroupTableColumns">COST</th>
                </tr>
                </thead>
                
                {
                 this.state.data2.map((rowdata, i) => 
               <tbody className ="CampaignGroupTableBody">
                <tr>
               <td>{rowdata.CAMPAIGN}</td>
                <td>{rowdata.CLICKS}</td>
               <td>{rowdata.IMPRESSIONS}</td>
                <td>{rowdata.CTR}</td>
               <td>{rowdata.AVGCPC}</td>
                <td>{rowdata.COST}</td>
                </tr>
                </tbody>)}

              </table> 
            </div>
          </div>
          <div className="container2">
           
            <div className="MainContent">
            <FontAwesomeIcon icon={faMagnifyingGlassChart}
                size = "10x"

            />
         <h2 className="Local">Local SEO</h2>

              <div className="LocalUrlDiv">
                <h2 className="LocalUrl">URL used for reports</h2>
              </div>
           

            <div className="LocalParaDiv">
              <p className="LocalPara">
                TOP 5 KEYWORDS BY PLATFORM (07 - 31 - 2021)
              </p>
            </div>
            </div>
            <div className="LocalTableDiv">
              <table className="LocalSEOTable1">
              <thead>
               
                <tr>
                  <th className="LocalSEOTableColumns1">QUERY (desktop) </th>
                  <th className="LocalSEOTableColumns">POSITION</th>
                  <th className="LocalSEOTableColumns">LOCATION</th>
                </tr>
                   
                </thead>
               
                  {
                    this.state.data3.map((rowdata, i) =>
                    <tbody className = "table2body">
                    <tr>
                      <td className = "RowStyle">{rowdata.name}</td>
                      <td className = "RowStyle">{rowdata.position}</td>
                      <td className = "RowStyle">{rowdata.location}</td>
                      </tr>
                    </tbody>
                    )
                  }
              
              </table>

              <table className="LocalSEOTable2">
              <thead>
                <tr>
                  <th className="LocalSEOTableColumns1">QUERY (mobile) </th>
                  <th className="LocalSEOTableColumns">POSITION</th>
                  <th className="LocalSEOTableColumns">LOCATION</th>
                </tr>
                </thead>
                { this.state.data4.map((rowdata, i) =>
                <tbody className = "table2body">
                     <tr>
                      <td className = "RowStyle">{rowdata.name}</td>
                      <td className = "RowStyle">{rowdata.position}</td>
                      <td className = "RowStyle">{rowdata.location}</td>
                      </tr>
                </tbody>
                )} 
              </table>
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
              <table className="LocalSEOTable1">
                <thead>
                <tr>
                  <th className="LocalSEOTableColumns1">QUERY (desktop) </th>
                  <th className="LocalSEOTableColumns">POSITION</th>
                  <th className="LocalSEOTableColumns">LOCATION</th>
                </tr>
                </thead>
                { this.state.data5.map((rowdata, i) =>
                <tbody className = "table2body">
                     <tr>
                      <td className = "RowStyle">{rowdata.name}</td>
                      <td className = "RowStyle">{rowdata.position}</td>
                      <td className = "RowStyle">{rowdata.location}</td>
                      </tr>
                </tbody>
                )} 
              </table>

              <table className="LocalSEOTable2">
                <thead>
                <tr>
                  <th className="LocalSEOTableColumns1">QUERY (mobile) </th>
                  <th className="LocalSEOTableColumns">POSITION</th>
                  <th className="LocalSEOTableColumns">LOCATION</th>
                </tr>
                </thead>
                { this.state.data6.map((rowdata, i) =>
                <tbody className = "table2body">
                     <tr>
                      <td className = "RowStyle">{rowdata.name}</td>
                      <td className = "RowStyle">{rowdata.position}</td>
                      <td className = "RowStyle">{rowdata.location}</td>
                      </tr>
                </tbody>
                )} 
              </table>
            </div>
          </div>
        </div>
         
      </div>
    );
  }
}

export default App;
