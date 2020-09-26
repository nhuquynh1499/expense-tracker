import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddIcon from "../images/add.svg";
import CostPerDay from "../components/transaction/CostPerDay";
import "./Transaction.css";

function Transaction() {
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState([]);

  useEffect(() => {
    async function filterTransaction(m, y) {
      async function fetchData() {
        const res = await axios.get(
          `http://localhost:8080/api/transaction?m=${m}&y=${y}`
        );
        return res.data;
      }
      const data = await fetchData();
      const arrayAllDate = data.reduce((arrayDate, transaction) => {
        // console.log(transaction)
        if (arrayDate.indexOf(transaction.time) === -1) {
          arrayDate.push(transaction.time);
        }
        return arrayDate;
      }, []);
      arrayAllDate &&
        arrayAllDate.sort((a, b) => {
          if (a > b) return -1;
          if (a < b) return 1;
          return 0;
        });
      setValue(arrayAllDate);
    }

    filterTransaction(date.getMonth() + 1, date.getFullYear());
  }, [date]);

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
    <div className="transaction">
      <Link to="/add-transaction" className="addTransactionIcon">
        <div className="wrapped">
          <img src={AddIcon} alt="icon" className="icon" />
        </div>
      </Link>
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
      <div className="listTransaction">
        {value.length > 0 ? (
          value.map((date, index) => <CostPerDay date={date} key={index} />)
        ) : (
          <h1 className="nodata">Không có giao dịch</h1>
        )}
      </div>
    </div>
  );
}

export default Transaction;
