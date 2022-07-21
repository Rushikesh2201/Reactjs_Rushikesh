

import React from "react";
import { Line } from "react-chartjs-2";
import Styles from "./lineChart.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
);

let LineCharts = () => {
  return (
    <div className={Styles.lineChart}>
      <Line className = {Styles.line}
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          // labels : ["CAMPAIGN", "CLICKS", "IMPRESSIONS", "CTR", "AVG. CPC", "COST"],
          datasets: [
            {
              label: "#of votes",
              // label : " Aero Auto Repair San Diego <A63>", 
              data: [40, 65, 39, 58, 99, 83],
              // data : ["Aero Auto Repair San Diego <A63>", 90, 1293, 6.96, 8.48, 762.98],
              backgroundColor: [
                "rgba(255, 3, 0, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(66, 255, 0, 1)",
                "rgba(153, 102, 255, 01)",
                "rgba(255, 159, 64, 01)",
              ],
              borderColor: [
                "rgba(255, 3, 0, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(66, 255, 0, 1)",
                "rgba(153, 102, 255, 01)",
                "rgba(255, 159, 64, 01)",
              ],
              borderWidth: 1,
            },
            {
              label: "Quantity",
              data: [100, 104, 67, 507, 900, 50],
              backgroundColor: ["rgba(255, 99, 132, 1)"],
              borderColor: "rgba(255, 99, 132, 1)",
            },
          ],
        }}
        height={500}
        width={200}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                    beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              font: {
                size : 25,
              }
            },
          },
        }}
      />
    </div>
  );
};

export default LineCharts;
