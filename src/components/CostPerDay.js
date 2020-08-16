import React from "react";
import { TransactionContext } from "../contexts/Transaction";
import ExpenseItem from "./ExpenseItem";

import "./CostPerDay.css";

function CostPerDay({ time }) {
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
        <h1>{new Date(time.date).getDate()}</h1>
        <div className="infor">
          <h3>{daysOfWeek[new Date(time.date).getDay()]}</h3>
          <p>
            tháng {new Date(time.date).getMonth()}{" "}
            {new Date(time.date).getFullYear()}
          </p>
        </div>
        <h2 className="sumAmount">{Number(time.sumAmount).toLocaleString()}</h2>
      </div>
      <div className="content">
        {time?.listTransaction?.map((item) => {
          return (
            <TransactionContext.Consumer>
              {({ transactions }) => {
                const transaction = transactions.find((transaction) => {
                  return transaction._id === item;
                });
                return (
                  transaction && (
                    <ExpenseItem
                      groupId={transaction.groupId}
                      amount={transaction.amount}
                      note={transaction.note}
                    />
                  )
                );
              }}
            </TransactionContext.Consumer>
          );
        })}
      </div>
    </div>
  );
}

export default CostPerDay;
