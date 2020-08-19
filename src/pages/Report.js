import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.piecelabel.js";
import "chartjs-plugin-datalabels";
import ReportItem from "../components/ReportItem";
import "./Report.css";

function Report() {

  return (
    <div className="report">
      <div className="sum">
        <h1>{Number(50000).toLocaleString()}</h1>
      </div>
      <Doughnut
        data={{
          labels: [
            "Africa",
            "Asia",
            "Europe",
            "Latin America",
            "North America",
          ],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: [
                "#d62828",
                "#00a896",
                "#f77f00",
                "#fcbf49",
                "#05668d",
              ],
              data: [2478, 5267, 734, 784, 433],
            },
          ],
        }}
        option={{
          pieceLabel: {
            render: "value",
          },

          plugins: {
            datalabels: {
              display: true,
							color: 'white'
            },
          },
        }}
      />
      <ReportItem />
      <ReportItem />
      <ReportItem />
      <ReportItem />
      <ReportItem />
    </div>
  );
}

export default Report;
