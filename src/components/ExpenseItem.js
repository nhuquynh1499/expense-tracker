import React from "react";
import { GroupContext } from "../contexts/Group";
import "./ExpenseItem.css";

function ExpenseItem({ groupId, amount, note }) {
  return (
    <GroupContext.Consumer>
      {({ getInforGroup }) => {
        const group = getInforGroup(groupId);
        return (
          group && (
            <div className="expenseItem">
              <img className="iconCategory" src={group.icon} alt="icon" />
              <div className="infor">
                <h3 className="category">{group.name}</h3>
                <p className="notes">{note}</p>
              </div>
              <h2 className={group.addSum ? "amountMoney inflow" : "amountMoney outflow"}>
                {Number(amount).toLocaleString()}
              </h2>
            </div>
          )
        );
      }}
    </GroupContext.Consumer>
  );
}

export default ExpenseItem;
