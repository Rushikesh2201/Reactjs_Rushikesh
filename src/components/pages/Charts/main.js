import React from "react";
import Styles from "./main.module.css";
import LineChart from "../../organisms/LineChart/lineChart";
import BarChart from "../../organisms/BarChart/barChart";

let Charts = () => {
  return (
    <div>
      <h1 className={Styles.ChartText}>Line Chart</h1>
      <LineChart />

      <h1 className={Styles.ChartText}>Bar Chart</h1>
      <BarChart />
    </div>
  );
};

export default Charts;
