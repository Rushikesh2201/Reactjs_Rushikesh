import React from "react";
import Header from "./Header";
import GoogleAds from "./GoogleAds";
import Table from "./Table";
import Tags from "./Tags";
import Table2 from "./Table2";
import CallDetailsLink from "./CallDetailsLink";
import Styles from "../../css/MonthlyReport/main.module.css";

function MonthlyReport() {
  return (
    <div className={Styles.container}>
      <div className={Styles.App}>
        <Header
          heading="Monthly Report"
          title="Tobey Harris - Heath's Auto"
          leads="Leads Near Me"
        />

        <GoogleAds ads="Google Ads" duration="Previous 30 days" />

        <div className={Styles.MainContiner}>
          <Table
            data={[
              {
                name: "Campaign group",
                CAMPAIGN: "Ascot_Automotive_<A5U>",
                CLICKS: 211,
                IMPRESSIONS: 3622,
                CTR: "5.83%",
                AVGCPC: " $7.3",
                COST: "$1539.98",
              },
            ]}
            data1={[
              {
                name: "Campaign group: Heath's Auto Service",
                CAMPAIGN: "Leads Near Me - Heath's Auto Service <A2B>",
                CLICKS: 176,
                IMPRESSIONS: 2291,
                CTR: "7.68% ",
                AVGCPC: " $8.13",
                COST: "$1430",
              },
            ]}
            data2={[
              {
                name: "Campaign group: University Auto Repair",
                CAMPAIGN: "University Auto Repair <A62>",
                CLICKS: 229,
                IMPRESSIONS: 3256,
                CTR: "7.03% ",
                AVGCPC: "$4.83",
                COST: "$1105.26",
              },
            ]}
          />
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
export default MonthlyReport;
