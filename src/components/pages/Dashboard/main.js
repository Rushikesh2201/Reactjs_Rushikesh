// import "../../core/App.css";
import React, { Component } from "react";
import Styles from "./css/main.module.css";
//import ApiService from '../../../utils/ApiService';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUser, resetUser } from "./../../../utils/actions";

import Header from "./Header";
import Navbar from "./navbar";
import GoogleAds from "./GoogleAds";
import Table from "./Table";
import Tags from "./Tags";
import Table2 from "./Table2";
import CallDetailsLink from "./CallDetailsLink";

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      campaignsData: {
        count: 2,
        results: [
          {
            _id: 11875822037,
            customer_id: ["4422361780"],
            name: ["Aero Auto Repair San Diego <A63>"],
            impressions: 1293,
            cost_micros: 762980000,
            clicks: 90,
            conversions: 9,
            ctr: 6.960556844547564,
            average_cpc: "$8.48",
            cost_per_conversion: 84775555.55555555,
            cost: "$762.98",
          },
          {
            _id: 15231642940,
            customer_id: ["4422361780"],
            name: ["Aero Auto Repair San Diego Oil Change"],
            impressions: 369,
            cost_micros: 306240000,
            clicks: 37,
            conversions: 0,
            ctr: 10.02710027100271,
            average_cpc: "$8.28",
            cost_per_conversion: null,
            cost: "$306.24",
          },
          {
            _id: 15231648463,
            customer_id: ["4422361780"],
            name: ["Aero Auto Repair San Diego Brakes"],
            impressions: 70,
            cost_micros: 47170000,
            clicks: 5,
            conversions: 1,
            ctr: 7.142857142857142,
            average_cpc: "$9.43",
            cost_per_conversion: 47170000,
            cost: "$47.17",
          },
        ],
      },
    };
  }
  componentDidMount() {
    // console.log(this.props.user)
    // let payload = {
    //   customer_id: 4422361780,
    //   from_date: '2022-06-24T00:00:00',
    //   to_date: '2022-06-30T00:00:00'
    // };
    // let header = { Token: this.props.user.userInfo.token }
    // ApiService.get("/v1/getCampaigns", payload, header, (res, err) => {
    //   if (err == null) {
    //     console.log(res)
    //     this.setState({ campaignsData: res })
    //   } else {
    //     console.log(err);
    //   }
    // });
  }

  render() {
    return (
      <div className={Styles.container}>
        {console.log(this.state.campaignsData)}
        <div className={Styles.App}>
          <Navbar /> 
          <Header
            heading="Monthly Report"
            title="Tobey Harris - Heath's Auto"
            leads="Leads Near Me"
          />
        
          <GoogleAds ads="Google Ads" duration="Previous 30 days" />

          <div className={Styles.MainContiner}>
            <Table data={this.state.campaignsData} />
          </div>
          <div className={Styles.container2}>
            <Tags
              heading="Local SEO"
              url="URL used for reports"
              description="TOP 5 KEYWORDS BY PLATFORM (07 - 31 - 2021)"
            />
            <div>
              <Table2
                heading="Local SEO"
                url="URL used for reports"
                description="TOP 5 KEYWORDS BY PLATFORM (07 - 31 - 2021)"
                data3={[
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
                ]}
                data4={[
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
                ]}
                data5={[
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
                ]}
                data6={[
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
                ]}
              />
            </div>
            <CallDetailsLink />
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
