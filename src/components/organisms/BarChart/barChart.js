

import React from "react";
import { Bar } from "react-chartjs-2";
import Styles from "./barChart.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let BarCharts = () => {
  return (
    <div id={Styles["barChart"]} className="">
      <Bar
        className={Styles.bar}
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "#of votes",
              data: [40, 65, 39, 58, 99, 83],
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
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
            {
              label: "Quantity",
              data: [100, 104, 67, 507, 900, 50],
              backgroundColor: "rgba(255, 99, 132, 1)",
              borderColor: "rgba(255, 99, 132, 1)",
            },
          ],
        }}
        height={500}
        width={100}
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
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default BarCharts;
