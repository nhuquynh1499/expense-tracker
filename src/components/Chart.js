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
    width: "100%",
    dataFormat: "json",
    dataSource: {
      chart: {
        // caption: "Thống kê chi tiêu",
        // subCaption: "Tháng này",
        bgColor: "#f5f5f8",
        numberSuffix: " VND",
        showPercentInTooltip: "0",
        decimals: "1",
        useDataPlotColorForLabels: "1",  
        showLegend: "0",
        // paletteColors: color,
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
