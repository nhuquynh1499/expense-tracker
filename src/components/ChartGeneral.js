import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import "./ChartGeneral.css";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

export default function ChartGeneral() {
  const dataset = [
    {
      seriesname: "Khoản chi",
      data: [
        {
          value: "-120000",
        },
        {
          value: "-200000",
        },
        {
          value: "-150000",
        },
        {
          value: "-150000",
        },
      ],
    },
    {
      seriesname: "Khoản thu",
      data: [
        {
          value: "0",
        },
        {
          value: "0",
        },
        {
          value: "500000",
        },
        {
          value: "0",
        }
      ],
    },
  ]

  const dataSource = {
    chart: {
      caption: "Top Finishers",
      subcaption: "2016-2017",
      bgColor: "#f5f5f8",
      yaxisname: "Open Play Goals",
      palettecolors: "#E64571, #88D786",
      plotgradientcolor: " ",
      theme: "fusion",
      yaxismaxvalue: "30",
      // formatnumberscale: "1",
      // numdivlines: "2",
      showlegend: "1",
      interactivelegend: "0",
      showvalues: "0",
      showsum: "0",
    },
    categories: [
      {
        category: [
          {
            label: "1-3",
          },
          {
            label: "4-7",
          },
          {
            label: "8-11",
          },
          {
            label: "12-15",
          },
          {
            label: "16-19",
          },
          {
            label: "20-23",
          },
          {
            label: "24-27",
          },
          {
            label: "28-31",
          },
        ],
      },
    ],
    dataset: dataset
  };

  const chartConfigs = {
    type: "stackedcolumn2d",
    width: "100%",
    dataSource: dataSource,
  };
  return (
    <div className="ChartGeneral">
      <ReactFC {...chartConfigs} />
    </div>
  );
}
