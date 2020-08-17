import React, { useState, useEffect } from "react";
import axios from "axios";
import ExpenseItem from "./ExpenseItem";

import "./CostPerDay.css";

function CostPerDay({ date }) {
  const [transactions, setTransactions] = useState([]);
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth() + 1;
  const year = new Date(date).getFullYear();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/transaction?d=${day}&m=${month}&y=${year}`
      );
      const transactions = res.data;
      setTransactions(transactions);
    };
    fetchData();
  }, [day, month, year]);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="costPerDay">
      <div className="date">
        <h1>{day}</h1>
        <div className="infor">
          <h3>{daysOfWeek[new Date(date).getDay()]}</h3>
          <p>
            tháng {month} {year}
          </p>
        </div>
        <h2 className="sumAmount">{Number(6000000).toLocaleString()}</h2>
      </div>
      <div className="content">
        {transactions.length > 0 &&
          transactions.map((transaction, index) => (
            <ExpenseItem
              groupId={transaction.groupId}
              amount={transaction.amount}
              note={transaction.note}
              key={index}
            />
          ))}
      </div>
    </div>
  );
}

export default CostPerDay;
