
import React, { Component } from "react";
import Header from "./Header";
import GoogleAds from "./GoogleAds";
import Table from "./Table";
import Tags from "./Tags";
import Table2 from "./Table2";
import CallDetailsLink from "./CallDetailsLink";

export class MonthlyReport extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <Header />
          <GoogleAds />

          <div className="MainContiner">
            <Table />
          </div>
          <div className="container2">
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