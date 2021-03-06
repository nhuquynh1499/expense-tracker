/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import "./ChartGeneral.css";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

export default function ChartGeneral({ date }) {
  const [transactions, setTransactions] = useState(null);
  let listInflow = [],
    listOutflow = [];
  let dataInflow = [],
    dataOutflow = [];

  // Lấy số ngày trong tháng
  function getNumberOfDays() {
    var isLeap =
      date.getFullYear() % 4 === 0 &&
      (date.getFullYear() % 100 !== 0 || date.getFullYear() % 400 === 0);
    return [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][
      date.getMonth()
    ];
  }

  function getDayStartEndInWeek() {
    let dayStart = [],
      dayEnd = [];
    for (let day = 1; day <= getNumberOfDays(); day++) {
      if (day === 1) dayStart.push(day);
      if (day === getNumberOfDays()) dayEnd.push(day);
      const dayOfWeek = new Date(
        date.getFullYear(),
        date.getMonth(),
        day
      ).getDay();
      if (dayOfWeek === 0) {
        dayEnd.push(day);
      }
      if (dayOfWeek === 1) {
        dayStart.push(day);
      }
    }
    return { dayStart, dayEnd };
  }

  // Tạo mảng chứa tuần trong tháng. Ví du tháng 8/2020 thì trả về mảng ["1-2","3-9","10-16","17-23","24-30","31-31"]
  function weeksOfMonth() {
    // dayStart = [1, 3, 10, 17, 24, 31]
    // dayEnd = [2, 9, 16, 23, 30, 31]
    const { dayStart, dayEnd } = getDayStartEndInWeek();
    return dayStart.map((item, index) => {
      return String(item) + "-" + String(dayEnd[index]);
    });
  }

  function getData(listTransaction) {
    const { dayStart, dayEnd } = getDayStartEndInWeek();

    let result = Array.from(Array(weeksOfMonth().length)).map(() => 0);
    listTransaction.forEach((item) => {
      const date = new Date(item.time).getDate();
      dayStart.forEach((day, index) => {
        if (date >= day && date <= dayEnd[index])
          result[index] += Number(item.amount);
      });
    });
    return result.map((item) => {
      return { value: String(item) };
    });
  }

  useEffect(() => {
    async function fetch() {
      const res = await axios.get(
        `https://api-expense-tracker-codersx.herokuapp.com/api/transaction/${localStorage.getItem('userId')}?m=${
          date.getMonth() + 1
        }&y=${date.getFullYear()}`
      );
      setTransactions(res.data);
    }

    fetch();
  }, [date]);

  transactions?.forEach((transaction) => {
    if (transaction.amount > 0) listInflow.push(transaction);
    else listOutflow.push(transaction);
  });

  dataOutflow = getData(listOutflow);
  dataInflow = getData(listInflow);

  const dataset = [
    {
      seriesname: "Khoản chi",
      data: dataOutflow,
    },
    {
      seriesname: "Khoản thu",
      data: dataInflow,
    },
  ];

  const dataSource = {
    chart: {
      caption:
        "Báo cáo kết quả thu chi trong tháng " +
        (date.getMonth() + 1),
      bgColor: "#f5f5f8",
      yaxisname: "Open Play Goals",
      palettecolors: "#E44B65, #43aa8b",
      plotgradientcolor: " ",
      theme: "fusion",
      // interactivelegend: "0",
      showlegend: "0",
    },
    categories: [
      {
        category: weeksOfMonth().map((i) => {
          return { label: i };
        }),
      },
    ],
    dataset: dataset,
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
