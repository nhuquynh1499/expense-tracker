import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expenseItem">
      <img className="iconCategory" src="https://freeiconshop.com/wp-content/uploads/edd/eat-flat-1.png" alt="icon" />
      <div className="infor">
        <h3 className="category">Ăn uống</h3>
        <p className="notes">Tau ăn trưa đấy</p>
      </div>
      <h2 className="amountMoney outflow">{Number(50000).toLocaleString()}</h2>
    </div>
  )
}

export default ExpenseItem;