import "../../core/App.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/index.module.css";
import ApiService from '../../../utils/ApiService';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUser, resetUser } from "./../../../utils/actions";
export class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      device: "mobile",
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

      rows: "",
    };

  }
  componentDidMount() {
    console.log(this.props.user)
    let payload = {
      customer_id: 4422361780,
      from_date: '2022-06-24T00:00:00',
      to_date: '2022-06-30T00:00:00'
    };
    let header = { Token: this.props.user.userInfo.token }
    ApiService.get("/v1/getCampaigns", payload, header, (res, err) => {
      if (err == null) {
        console.log(res)
      } else {
        console.log(err);

      }
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.App}>
          <header className={styles.AppHeader}>
            <h1 className={styles.Title}>Monthly Report </h1>
            <small className={styles.smallText}>
              Tobey Harris - Heath's Auto
            </small>
            <div className={styles.TextLead}>
              <h1 className={styles.LeadTextH1}>Leads Near Me</h1>
            </div>
          </header>

          <div className={styles.App2}>
            <h1 className={styles.Ads}>Google Ads</h1>
            <p className={styles.AdText}>Previous 30 days</p>
          </div>

          <div className={styles.MainContiner} style={{ padding: "1.5em 0" }}>
            <h3 className={styles.campaign}>Campaign group </h3>
            <div>
              <table className={styles.CampaignGroupTable}>
                <thead>
                  <tr>
                    <th className={styles.CampaignGroupTableColumns1}>
                      CAMPAIGN
                    </th>
                    <th className={styles.CampaignGroupTableColumns}>CLICKS</th>
                    <th className={styles.CampaignGroupTableColumns}>
                      IMPRESSIONS
                    </th>
                    <th className={styles.CampaignGroupTableColumns}>CTR</th>
                    <th className={styles.CampaignGroupTableColumns}>
                      AVG. CPC{" "}
                    </th>
                    <th className={styles.CampaignGroupTableColumns}>COST</th>
                  </tr>
                </thead>
                {this.state.data.map((rowdata, i) => (
                  <tbody className={styles.CampaignGroupTableBody} key={`data_${i}`}>
                    <tr>
                      <td className={styles.RowStyle}>{rowdata.CAMPAIGN}</td>
                      <td className={styles.RowStyle}>{rowdata.CLICKS}</td>
                      <td className={styles.RowStyle}>{rowdata.IMPRESSIONS}</td>
                      <td className={styles.RowStyle}>{rowdata.CTR}</td>
                      <td className={styles.RowStyle}>{rowdata.AVGCPC}</td>
                      <td className={styles.RowStyle}>{rowdata.COST}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>

          <div className="" style={{ padding: "1.5em 0" }}>
            <h3 className={styles.campaign}>
              Campaign group: Heath's Auto Service{" "}
            </h3>
            <div>
              <table className={styles.CampaignGroupTable}>
                <thead>
                  <tr>
                    <th className={styles.CampaignGroupTableColumns1}>
                      CAMPAIGN
                    </th>
                    <th className={styles.CampaignGroupTableColumns}>CLICKS</th>
                    <th className={styles.CampaignGroupTableColumns}>
                      IMPRESSIONS
                    </th>
                    <th className={styles.CampaignGroupTableColumns}>CTR</th>
                    <th className={styles.CampaignGroupTableColumns}>
                      AVG. CPC{" "}
                    </th>
                    <th className={styles.CampaignGroupTableColumns}>COST</th>
                  </tr>
                </thead>

                {this.state.data1.map((rowdata, i) => (
                  <tbody className={styles.CampaignGroupTableBody} key={`data1_${i}`}>
                    <tr>
                      <td className={styles.RowStyle}>{rowdata.CAMPAIGN}</td>
                      <td className={styles.RowStyle}>{rowdata.CLICKS}</td>
                      <td className={styles.RowStyle}>{rowdata.IMPRESSIONS}</td>
                      <td className={styles.RowStyle}>{rowdata.CTR}</td>
                      <td className={styles.RowStyle}>{rowdata.AVGCPC}</td>
                      <td className={styles.RowStyle}>{rowdata.COST}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>

          <div className="" style={{ padding: "1.5em 0" }}>
            <h3 className={styles.campaign}>
              Campaign group: University Auto Repair{" "}
            </h3>
            <div>
              <table className={styles.CampaignGroupTable}>
                <thead>
                  <tr>
                    <th className={styles.CampaignGroupTableColumns1}>
                      CAMPAIGN
                    </th>
                    <th className={styles.CampaignGroupTableColumns}>CLICKS</th>
                    <th className={styles.CampaignGroupTableColumns}>
                      IMPRESSIONS
                    </th>
                    <th className={styles.CampaignGroupTableColumns}>CTR</th>
                    <th className={styles.CampaignGroupTableColumns}>
                      AVG. CPC{" "}
                    </th>
                    <th className={styles.CampaignGroupTableColumns}>COST</th>
                  </tr>
                </thead>

                {this.state.data2.map((rowdata, i) => (
                  <tbody className={styles.CampaignGroupTableBody} key={`data2_${i}`}>
                    <tr>
                      <td className={styles.RowStyle}>{rowdata.CAMPAIGN}</td>
                      <td className={styles.RowStyle}>{rowdata.CLICKS}</td>
                      <td className={styles.RowStyle}>{rowdata.IMPRESSIONS}</td>
                      <td className={styles.RowStyle}>{rowdata.CTR}</td>
                      <td className={styles.RowStyle}>{rowdata.AVGCPC}</td>
                      <td className={styles.RowStyle}>{rowdata.COST}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
          <div className={styles.container2}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1em 2em",
              }}
            >
              <div className="d-flex">
                <h2 className={styles.Local}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlassChart}
                    className={styles.Icon}
                    size="3x"
                  />
                </h2>
                <div>
                  <div>
                    <h2 className={styles.Local}>Local SEO</h2>
                  </div>
                  <div className={styles.LocalParaDiv}>
                    <p className={styles.LocalPara}>
                      TOP 5 KEYWORDS BY PLATFORM (07 - 31 - 2021)
                    </p>
                  </div>
                </div>
              </div>

              <div>
                {" "}
                <div className={styles.LocalUrlDiv}>
                  <h2 className={styles.LocalUrl}>
                    URL used for reports heathsauto.com
                  </h2>
                </div>
              </div>
            </div>
            <div className={styles.LocalTableDiv}>
              <table className={styles.LocalSEOTable1}>
                <thead>
                  <tr>
                    <th className={styles.LocalSEOTableColumns1}>
                      QUERY (desktop){" "}
                    </th>
                    <th className={styles.LocalSEOTableColumns}>POSITION</th>
                    <th className={styles.LocalSEOTableColumns}>LOCATION</th>
                  </tr>
                </thead>

                {this.state.data3.map((rowdata, i) => (
                  <tbody className={styles.table2body} key={`data3_${i}`}>
                    <tr>
                      <td className={styles.RowStyle1}>{rowdata.name}</td>
                      <td className={styles.RowStyle1}>{rowdata.position}</td>
                      <td className={styles.RowStyle1}>{rowdata.location}</td>
                    </tr>
                  </tbody>
                ))}
              </table>

              <table className={styles.LocalSEOTable2}>
                <thead>
                  <tr>
                    <th className={styles.LocalSEOTableColumns1}>
                      QUERY (mobile)
                    </th>
                    <th className={styles.LocalSEOTableColumns}>POSITION</th>
                    <th className={styles.LocalSEOTableColumns}>LOCATION</th>
                  </tr>
                </thead>
                {this.state.data4.map((rowdata, i) => (
                  <tbody className={styles.table2body} key={`data4_${i}`}>
                    <tr>
                      <td className={styles.RowStyle1}>{rowdata.name}</td>
                      <td className={styles.RowStyle1}>{rowdata.position}</td>
                      <td className={styles.RowStyle1}>{rowdata.location}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1em 2em",
              }}
            >
              <div className="d-flex">
                <h2 className={styles.Local}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlassChart}
                    className={styles.Icon}
                    size="3x"
                  />
                </h2>
                <div>
                  <div>
                    <h2 className={styles.Local}>Local SEO</h2>
                  </div>
                  <div className={styles.LocalParaDiv}>
                    <p className={styles.LocalPara}>
                      TOP 5 KEYWORDS BY PLATFORM (07 - 31 - 2021)
                    </p>
                  </div>
                </div>
              </div>

              <div>
                {" "}
                <div className={styles.LocalUrlDiv}>
                  <h2 className={styles.LocalUrl}>
                    URL used for reports heathsauto.com
                  </h2>
                </div>
              </div>
            </div>

            <div className={styles.LocalTableDiv}>
              <table className={styles.LocalSEOTable1}>
                <thead>
                  <tr>
                    <th className={styles.LocalSEOTableColumns1}>
                      QUERY (desktop){" "}
                    </th>
                    <th className={styles.LocalSEOTableColumns}>POSITION</th>
                    <th className={styles.LocalSEOTableColumns}>LOCATION</th>
                  </tr>
                </thead>
                {this.state.data5.map((rowdata, i) => (
                  <tbody className={styles.table2body} key={`data5_${i}`}>
                    <tr>
                      <td className={styles.RowStyle1}>{rowdata.name}</td>
                      <td className={styles.RowStyle1}>{rowdata.position}</td>
                      <td className={styles.RowStyle1}>{rowdata.location}</td>
                    </tr>
                  </tbody>
                ))}
              </table>

              <table className={styles.LocalSEOTable2}>
                <thead>
                  <tr>
                    <th className={styles.LocalSEOTableColumns1}>
                      QUERY (mobile){" "}
                    </th>
                    <th className={styles.LocalSEOTableColumns}>POSITION</th>
                    <th className={styles.LocalSEOTableColumns}>LOCATION</th>
                  </tr>
                </thead>
                {this.state.data6.map((rowdata, i) => (
                  <tbody className={styles.table2body} key={`data6_${i}`}>
                    <tr>
                      <td className={styles.RowStyle1}>{rowdata.name}</td>
                      <td className={styles.RowStyle1}>{rowdata.position}</td>
                      <td className={styles.RowStyle1}>{rowdata.location}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ user: state.user }), {
  setUser,
  resetUser,
})(withRouter(Dashboard));
