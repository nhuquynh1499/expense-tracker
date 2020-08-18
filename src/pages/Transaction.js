import React from "react";
import { TransactionContext } from "../contexts/Transaction";
import CostPerDay from "../components/CostPerDay";
import "./Transaction.css";

function Transaction() {
  return (
    <div className="transaction">
      <TransactionContext.Consumer>
        {({ transactions }) => {
          const arrayAllDate = transactions.reduce((arrayDate, transaction) => {
            if (arrayDate.indexOf(transaction.time) === -1) {
              arrayDate.push(transaction.time);
            }
            return arrayDate;
          }, []);
          arrayAllDate.sort((a, b) => {
            if (a > b) return -1;
            if (a < b) return 1;
            return 0;
          });
          console.log(arrayAllDate);
          return (
            arrayAllDate &&
            arrayAllDate.map((date, index) => <CostPerDay date={date} key={index}/>)
          );
        }}
      </TransactionContext.Consumer>
    </div>
  );
}

export default Transaction;
