// import React from "react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from "recharts";
// import Styles from "./css/barChart.module.css";

// const employee = [
//   {
//     name: "Kiran",
//     inHandSalary: 15000,
//     GrossSalary: 20000,
//   },
//   {
//     name: "Sagar",
//     inHandSalary: 22700,
//     GrossSalary: 25000,
//   },
//   {
//     name: "Satish",
//     inHandSalary: 20010,
//     GrossSalary: 26000,
//   },
//   {
//     name: "Akash",
//     inHandSalary: 18000,
//     GrossSalary: 23000,
//   },
//   {
//     name: "Sachin",
//     inHandSalary: 12000,
//     GrossSalary: 17500,
//   },
// ];

// let Barcharts = () => {
//   return (
//     <ResponsiveContainer width="100%" aspect={3}>
//       <BarChart
//         className={Styles.barChart}
//         data={employee}
//         width={400}
//         height={200}
//         margin={{ top: 100, right: 300, left: 200, bottom: 5 }}
//       >
//         <XAxis
//           dataKey="name"
//           interval={"preserveStartEnd"}
//           className={Styles.XAxis}
//         />
//         <YAxis />
//         <Tooltip contentStyle={{ backgroundColor: "#31302d" }} />
//         <Legend />
//         <Bar
//           dataKey="inHandSalary"
//           fill="#Ff5600"
//           barSize={70}
//           label={{ fill: "red" }}
//         />
//         <Bar
//           dataKey="GrossSalary"
//           fill="#009bff"
//           barSize={70}
//           label={{ fill: "blue" }}
//         />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };
// export default Barcharts;

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
