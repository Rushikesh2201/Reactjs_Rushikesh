
import React, { Component } from "react";
import Header from "./Header";
import GoogleAds from "./GoogleAds";
import Table from "./Table";
import Tags from "./Tags";
import Table2 from "./Table2";
import CallDetailsLink from "./CallDetailsLink";
import Styles from '../../css/MonthlyReport/main.module.css'

export class MonthlyReport extends Component {
  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.App}>
          <Header />
          <GoogleAds />

          <div className={Styles.MainContiner}>
            <Table />
          </div>
          <div className={Styles.container2}>
            <Tags />
            <div>
              <Table2 />
            </div>
            <CallDetailsLink />
          </div>
        </div>
      </div>
    );
  }
}

export default MonthlyReport;