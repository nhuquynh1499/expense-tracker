import React, { useState, useEffect } from "react";
import axios from "axios";
import ReportItem from "../components/ReportItem";
import Chart from "../components/Chart";
import { GroupContext } from "../contexts/Group";
import "./Report.css";

function Report() {
  const [reports, setReports] = useState([]);
  const backgroundColor = [
    "#989BCF",
    "#66C4BE",
    "#E7716E",
    "#F5C431",
    "#62B58E",
    "#BC95DF",
  ];
  let listGroup, listAmount;

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `http://localhost:8080/api/report?m${new Date().getMonth() + 1}=&y=${new Date().getFullYear()}`
      );
      setReports(res.data);
    }
    fetchData();
  }, []);

  if (reports[0]) {
    listGroup = Object.keys(reports[0].listTransaction);
    listAmount = Object.values(reports[0].listTransaction);
  }

  return (
    <div className="report">
      <div className="sum">
        <p>Khoản chi</p>
        <p className="amount">{Number(50000).toLocaleString()}</p>
      </div>
      <GroupContext.Consumer>
        {({ getInforGroup }) => {
          let data;
          if (listGroup && listAmount) {
            data = listGroup.map((item, index) => {
              return {
                label: getInforGroup(item) ? getInforGroup(item).name : null,
                value: listAmount[index],
              };
            });
          }
          return data && <Chart chartData={data} />;
        }}
      </GroupContext.Consumer>
      {listGroup?.map((item, index) => {
        return (
          <ReportItem
            key={index}
            groupId={item}
            amount={listAmount[index]}
            bgColor={backgroundColor[index]}
          />
        );
      })}
    </div>
  );
}

export default Report;
