import React, { Component } from "react";
import Styles from "./css/main.module.css";
import ApiService from '../../../utils/ApiService';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUser, resetUser } from "./../../../utils/actions";
import moment from "moment";

import Header from "../../common/Header";
import CustomTitleH1 from "./CustomTitleH1";
import Table from "./Table";
// import Tags from "./Tags";
// import Table2 from "./Table2";
import { startOfDay, endOfDay, addDays, subDays } from 'date-fns';
import { CustomDateRangePicker } from "../../common/CustomDateRangePicker"
import Table2 from "./Table2";
export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      campaignsData: [],
      adGroupData: [],
      filterDateRange: [startOfDay(subDays(new Date(), 31)), endOfDay(addDays(new Date(), -1))],
      cardsData: [{ name: 'Total Campaigns', value: 0 }, { name: 'Total Clicks', value: 0 }, { name: 'Total Impressions', value: 0 }, { name: 'Total Cost', value: 0 }]
    };
  }
  componentDidMount() {
    this.getCampaignsData();
    this.getAdGroupsData();
  }
  onChangeDateFilter = (e) => {
    this.setState({ filterDateRange: [moment(e[0]).toDate(), moment(e[1]).toDate()] }, () => {
      this.getCampaignsData();
      this.getAdGroupsData();

    })
  }
  getCampaignsData = () => {
    const { cardsData } = this.state
    let payload = {
      customer_id: 4422361780,
      from_date: moment(this.state.filterDateRange[0]).format('YYYY-MM-DDT00:00:00'),
      to_date: moment(this.state.filterDateRange[1]).format('YYYY-MM-DDT00:00:00')
    };
    let header = { Token: this.props.user.userInfo.token }
    ApiService.get("/v1/getCampaigns", payload, header, (res, err) => {
      if (err == null) {
        cardsData.forEach((itm) => {
          if (itm.name === 'Total Campaigns') {
            itm.value = res.count
          }
          if (itm.name === 'Total Clicks') {
            const total = res.results.reduce((prev, next) => prev + next.clicks, 0);
            itm.value = total
          }
          if (itm.name === 'Total Impressions') {
            const total = res.results.reduce((prev, next) => prev + next.impressions, 0);
            itm.value = total
          }
          if (itm.name === 'Total Cost') {
            const total = res.results.reduce((prev, next) => prev + next.cost, 0);
            itm.value = '$' + total.toFixed(2)
          }
        })
        this.setState({ campaignsData: res, cardsData: cardsData })
      } else {
        console.log(err);

      }
    });
  }

  getAdGroupsData = () => {
    let payload = {
      customer_id: 4422361780,
      from_date: moment(this.state.filterDateRange[0]).format('YYYY-MM-DDT00:00:00'),
      to_date: moment(this.state.filterDateRange[1]).format('YYYY-MM-DDT00:00:00')
    };
    let header = { Token: this.props.user.userInfo.token }
    ApiService.get("/v1/getAdsGroups", payload, header, (res, err) => {
      if (err == null) {
        this.setState({ adGroupData: res, })
      } else {
        console.log(err);

      }
    });
  }

  render() {
    return (
      <>
        <Header />

        <div className={[Styles.container, 'container-fluid'].join(" ")}>


          <div className={Styles.App}>


            <div className="col-md-12  d-flex align-items-center justify-content-between" style={{ padding: '29px 0px 5px 0px' }}>
              <CustomTitleH1 ads="Dashboard" />
              <CustomDateRangePicker filterDateRange={this.state.filterDateRange} onChangeDateFilter={(e) => this.onChangeDateFilter(e)}
                className={[Styles.datePickerStyle].join(" ")} />
            </div>
            <hr className="style4" />

            <div className={["col-md-12 col-sm-12 d-flex flex-wrap p-0", Styles.cardsOuter].join(" ")}>
              {this.state.cardsData.map((itm, i) => {
                return (
                  <div className={["col-md-3 col-sm-12 p-0"].join(" ")} key={`${i}_cards`}>
                    <div className={[Styles.cardStyle].join(" ")}>
                      <span className={Styles.cardCount}>{itm.value}</span>
                      <span className={Styles.cardTitle}>{itm.name}</span>
                    </div>
                  </div>)
              })}
            </div>
            <div className={Styles.MainContiner}>
              <Table data={this.state.campaignsData} />
            </div>

            <div className={Styles.MainContiner}>
              <Table2 data={this.state.adGroupData} />
            </div>
            {/* <div className={[Styles.container2, 'col-md-12 col-sm-12'].join(" ")}>
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
            </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default connect((state) => ({ user: state.user }), {
  setUser,
  resetUser,
})(withRouter(Dashboard));
