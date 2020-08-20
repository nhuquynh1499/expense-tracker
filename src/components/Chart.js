import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import "./Chart.css";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

export default function Chart(props) {
  const { chartData } = props;
  const chartConfigs = {
    type: "pie2d",
    width: "550",
    height: "350",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Split of revenue by product categories",
        subCaption: "Last year",
        numberPrefix: "$",
        showPercentInTooltip: "0",
        decimals: "1",
        useDataPlotColorForLabels: "1",
        // paletteColors: color,

        //Theme
        theme: "fusion",
      },
      data: chartData,
    },
  };

  return (
    <div className="chart">
      <ReactFC {...chartConfigs} />
    </div>
  );
}
