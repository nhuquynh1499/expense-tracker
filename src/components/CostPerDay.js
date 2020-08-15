import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./CostPerDay.css";

function CostPerDay() {
  return (
    <div className="costPerDay">
      <div className="date">
        <h1>15</h1>
        <div className="infor">
          <h3>Thứ Năm</h3>
          <p>tháng 3 2018</p>
        </div>
        <h2 className="sumAmount">{Number(150000).toLocaleString()}</h2>
      </div>
      <div className="content">
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
      </div>
    </div>
  );
}

export default CostPerDay;
