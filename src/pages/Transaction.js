import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "../images/add.svg";
import { TransactionContext } from "../contexts/Transaction";
import CostPerDay from "../components/CostPerDay";
import "./Transaction.css";

function Transaction() {
  const [value, setValue] = useState(0);
  return (
    <div className="transaction">
      <Link to="/add-transaction" className="addTransactionIcon">
        <div className="wrapped">
          <img src={AddIcon} alt="icon" className="icon" />
        </div>
      </Link>
      <div className="filterDate">
        <button
          className={value === 0 ? "active" : null}
          onClick={() => setValue(0)}
        >
          Tháng trước
        </button>
        <button
          className={value === 1 ? "active" : null}
          onClick={() => setValue(1)}
        >
          Tháng này
        </button>
        <button
          className={value === 2 ? "active" : null}
          onClick={() => setValue(2)}
        >
          Tương lai
        </button>
      </div>
      <div className="listTransaction">
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
            arrayAllDate.map((date, index) => (
              <CostPerDay date={date} key={index} />
            ))
          );
        }}
      </TransactionContext.Consumer>
      </div>
    </div>
  );
}

export default Transaction;
