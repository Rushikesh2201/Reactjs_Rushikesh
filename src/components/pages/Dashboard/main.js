import React, { Component } from "react";
import Styles from "./css/main.module.css";
import ApiService from '../../../utils/middleware/ApiService';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUser, resetUser } from "./../../../utils/actions";
import moment from "moment";
import Tags from "./../../molecules/Tags"
import Header from "../../organisms/Navbar";
import Table from "./Table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ActivityLoader from "./../../atoms/ActivityLoader/ActivityLoader"
import { startOfDay, endOfDay, addDays, subDays } from 'date-fns';
import { CustomDateRangePicker } from "../../atoms/CustomDateRangePicker"
import Table2 from "./Table2";
import Table3 from "./Table3";
export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      showLoader: true,
      campaignsData: {},
      callData: {},
      adGroupData: [],
      filterDateRange: [startOfDay(subDays(new Date(), 31)), endOfDay(addDays(new Date(), -1))],
      cardsData: [{ name: 'Total Campaigns', value: 0 }, { name: 'Total Clicks', value: 0 }, { name: 'Total Impressions', value: 0 }, { name: 'Total Cost', value: 0 }]
    };
  }
  componentDidMount() {
    this.getCampaignsData();
    this.getCallData();
  }
  onChangeDateFilter = (e) => {
    this.setState({ filterDateRange: [moment(e[0]).toDate(), moment(e[1]).toDate()] }, () => {
      this.getCampaignsData();
      this.getCallData();
    })
  }
  getCampaignsData = () => {
    // const { cardsData } = this.state
    let payload = {
      from_date: moment(this.state.filterDateRange[0]).format('YYYY-MM-DDT00:00:00'),
      to_date: moment(this.state.filterDateRange[1]).format('YYYY-MM-DDT00:00:00')
    };
    let header = { Token: this.props.user.userInfo.token }
    ApiService.get("/v1/getCampaigns", payload, header, (res, err) => {
      if (err == null) {
        // cardsData.forEach((itm) => {
        //   if (itm.name === 'Total Campaigns') {
        //     itm.value = res.count
        //   }
        //   if (itm.name === 'Total Clicks') {
        //     const total = res.results.reduce((prev, next) => prev + next.clicks, 0);
        //     itm.value = total
        //   }
        //   if (itm.name === 'Total Impressions') {
        //     const total = res.results.reduce((prev, next) => prev + next.impressions, 0);
        //     itm.value = total
        //   }
        //   if (itm.name === 'Total Cost') {
        //     const total = res.results.reduce((prev, next) => prev + next.cost, 0);
        //     itm.value = '$' + total.toFixed(2)
        //   }
        // })
        this.setState({ campaignsData: res, showLoader: false })
      } else {
        console.log(err);
        this.setState({ showLoader: false })

      }
    });
  }
  getCallData = () => {
    let payload = {
      from_date: moment(this.state.filterDateRange[0]).format('YYYY-MM-DDT00:00:00'),
      to_date: moment(this.state.filterDateRange[1]).format('YYYY-MM-DDT00:00:00')
    };
    let header = { Token: this.props.user.userInfo.token }
    ApiService.get("/v1/getcalldata", payload, header, (res, err) => {
      if (err == null) {
        this.setState({ callData: res, showLoader: false })
      } else {
        console.log(err);
        this.setState({ showLoader: false })
      }
    });
  }

  // getAdGroupsData = () => {
  //   let payload = {
  //     from_date: moment(this.state.filterDateRange[0]).format('YYYY-MM-DDT00:00:00'),
  //     to_date: moment(this.state.filterDateRange[1]).format('YYYY-MM-DDT00:00:00')
  //   };
  //   let header = { Token: this.props.user.userInfo.token }
  //   ApiService.get("/v1/getAdsGroups", payload, header, (res, err) => {
  //     if (err == null) {
  //       this.setState({ adGroupData: res, })
  //     } else {
  //       console.log(err);

  //     }
  //   });
  // }

  render() {
    const { showLoader,callData,campaignsData,filterDateRange } = this.state;

    return (
      <>
        {showLoader && <ActivityLoader show={showLoader} />}

        <Header />
        <div className={[Styles.container, 'container-fluid'].join(" ")}>
          <div className={Styles.App}>
            <div className="col-md-12  d-flex align-items-center justify-content-end" style={{ padding: '13px 0px 13px 0px' }}>
              <CustomDateRangePicker filterDateRange={filterDateRange} onChangeDateFilter={(e) => this.onChangeDateFilter(e)}
                className={[Styles.datePickerStyle].join(" ")} />
            </div>
            <hr className="style4" />
            <div className={Styles.MainContiner}>
              {Object.keys(campaignsData).length > 0 ?
                (<Table data={campaignsData} />) : (<span></span>)
              }
            </div>
            {/* <div className={Styles.MainContiner}>
              <Table2 data={.adGroupData} />
            </div> */}
            <div className={[Styles.container2, 'col-md-12 col-sm-12'].join(" ")}>
              <Tags
                heading="Local SEO"
                url="URL used for reports lpandsonsautocare.com"
                description="TOP 5 KEYWORDS BY PLATFORM (07 - 31 - 2021)"
              />
              <div>
                <Table2
                  heading="Local SEO"
                  url="URL used for reports lpandsonsautocare.com"
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
            </div>
            <div style={{ marginBottom: '3rem' }}>
              <div className={Styles.outerCallData}>
                <FontAwesomeIcon
                  icon={faSquarePhone}
                  className={Styles.IconCall}
                  size="7x"
                  color="#ef5124"
                />
                <div className="">
                  <div className={Styles.headingCalls}>Calls</div>
                  <div className={["d-flex align-items-center", Styles.callsDateRange].join(" ")}>
                    <div className={Styles.LocalParaDiv}>
                      <p className={Styles.LocalPara}>From</p>
                    </div>
                    <p>{moment(this.state.filterDateRange[0]).format('DD - MM - YYYY')}</p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      color="#ef5124"
                      className={Styles.IconArrow}
                      size="sm"
                    />
                    <div className={Styles.LocalParaDiv} style={{ marginLeft: 10 }}>
                      <p className={Styles.LocalPara}>To</p>
                    </div>
                    <p>{moment(this.state.filterDateRange[1]).format('DD - MM - YYYY')}</p>
                  </div>
                </div>
              </div>
              {Object.keys(callData).length > 0 ?
                (<Table3 data={callData} />) : (<span></span>)
              }
            </div>


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
