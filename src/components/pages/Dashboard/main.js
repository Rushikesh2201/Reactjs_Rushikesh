import React, { Component } from "react";
import Styles from "./css/main.module.css";
import ApiService from '../../../utils/ApiService';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUser, resetUser } from "./../../../utils/actions";
import moment from "moment";

import Header from "./Header";
import GoogleAds from "./GoogleAds";
import Table from "./Table";
import Tags from "./Tags";
import Table2 from "./Table2";
import CallDetailsLink from "./CallDetailsLink";

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      campaignsData: []
    };
  }
  componentDidMount() {
    let payload = {
      customer_id: 4422361780,
      from_date: moment().subtract(30, 'days').format('YYYY-MM-DDT00:00:00'),
      to_date: moment().format('YYYY-MM-DDT00:00:00')
    };
    let header = { Token: this.props.user.userInfo.token }
    ApiService.get("/v1/getCampaigns", payload, header, (res, err) => {
      if (err == null) {
        console.log(res)
        this.setState({ campaignsData: res })
      } else {
        console.log(err);

      }
    });
  }

  render() {
    return (
      <div className={Styles.container}>
        {console.log(this.state.campaignsData)}
        <div className={Styles.App}>
          <Header
            heading="Monthly Report"
            title="Aero Auto Repair San Diego"
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
            {/* <CallDetailsLink /> */}
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
