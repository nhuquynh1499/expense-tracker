import React, { useState, useEffect } from "react";
import axios from "axios";
import ReportType from "../components/ReportType";
import ChartGeneral from '../components/ChartGeneral';

import "./Report.css";

function Report() {
  const [reports, setReports] = useState([]);
  const [type, setType] = useState(true);
  let listGroupInflow, listAmountInflow, listGroupOutflow, listAmountOutflow;

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `http://localhost:8080/api/report?m${
          new Date().getMonth() + 1
        }=&y=${new Date().getFullYear()}`
      );
      setReports(res.data);
    }
    fetchData();
  }, []);

  if (reports[0]) {
    listGroupOutflow = Object.keys(reports[0].listOutflow);
    listAmountOutflow = Object.values(reports[0].listOutflow);
    listGroupInflow = Object.keys(reports[0].listInflow);
    listAmountInflow = Object.values(reports[0].listInflow);
  }

  return (
    <div className="report">
      <div className="filter">
        <div
          className={type ? "item active" : "item"}
          onClick={() => {setType(true)}}
        >
          <span>Khoản chi</span>
          <div className="hrBottom"></div>
        </div>
        <div
          className={type === false ? "item active" : "item"}
          onClick={() => {setType(false)}}
        >
          <span>Khoản thu</span>
          <div className="hrBottom"></div>
        </div>
      </div>
      <ChartGeneral />
      {type === true && (
        <ReportType
          type={type}
          listGroup={listGroupOutflow}
          listAmount={listAmountOutflow}
        />
      )}
      {type === false && (
        <ReportType
          type={type}
          listGroup={listGroupInflow}
          listAmount={listAmountInflow}
        />
      )}
    </div>
  );
}

export default Report;
