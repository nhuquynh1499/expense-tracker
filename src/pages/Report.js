import React, { useState, useEffect } from "react";
import axios from "axios";
import ReportType from "../components/report/ReportType";
import ChartGeneral from "../components/report/ChartGeneral";
import KeyboardCapslockIcon from "@material-ui/icons/KeyboardCapslock";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import "./Report.css";

function Report() {
  const [report, setReport] = useState({});
  const [type, setType] = useState(null);
  const [date, setDate] = useState(new Date());
  let listGroupInflow, listAmountInflow, listGroupOutflow, listAmountOutflow;

  useEffect(() => {
    async function fetchData(m, y) {
      const res = await axios.get(
        `http://localhost:8080/api/report?m=${m}&y=${y}`
      );
      setReport(res.data);
    }
    fetchData(date.getMonth() + 1, date.getFullYear());
  }, [date]);

  console.log(report);

  if (report) {
    listGroupOutflow = report.listOutflow ? Object.keys(report.listOutflow) : [];
    listAmountOutflow = report.listOutflow ? Object.values(report.listOutflow) : [];
    listGroupInflow = report.listInflow ? Object.keys(report.listInflow) : [];
    listAmountInflow = report.listInflow ? Object.values(report.listInflow) : [];
  }

  function getMonthBefore() {
    const date = new Date();
    const day = date.getDate();
    let month = date.getMonth() - 1;
    let year = date.getFullYear();
    if (date.getMonth() - 1 < 0) {
      month = 11;
      year = date.getFullYear() - 1;
    }
    return new Date(year, month, day);
  }

  return (
    <div className="report">
      <div className="filter">
        <div
          className={
            date.getMonth() + 1 === new Date().getMonth()
              ? "item active"
              : "item"
          }
          onClick={() => {
            const beforeDate = getMonthBefore();
            setDate(beforeDate);
          }}
        >
          <span>Tháng trước</span>
          <div className="hrBottom"></div>
        </div>
        <div
          className={
            date.getMonth() === new Date().getMonth() ? "item active" : "item"
          }
          onClick={() => setDate(new Date())}
        >
          <span>Tháng này</span>
          <div className="hrBottom"></div>
        </div>
      </div>
      {report !== {} ? (
        <div>
          <ChartGeneral date={date} />
          <div className="choiceType">
            <div className={type === null ? "more" : "unshow"}>
              Xem chi tiết
              <ArrowForwardIcon className="icon" />
            </div>
            <div
              className={type === true ? "item outflow active" : "item outflow"}
              onClick={() => {
                setType(true);
              }}
            >
              <div className="color"></div>
              <p>Khoản chi</p>
            </div>
            <div
              className={type === false ? "item inflow active" : "item inflow"}
              onClick={() => {
                setType(false);
              }}
            >
              <div className="color"></div>
              <p>Khoản thu</p>
            </div>
            <div
              className={type !== null ? "short" : "unshow"}
              onClick={() => setType(null)}
            >
              <KeyboardCapslockIcon />
              <p>Thu gọn</p>
            </div>
          </div>
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
      ) : (
        <div className="nodata">
          <h1>Không có giao dịch</h1>
        </div>
      )}
    </div>
  );
}

export default Report;
