import React from 'react';
import './ReportItem.css';

function ReportItem() {
  return (
    <div className="reportItem">
      <img className="iconCategory" src="https://freeiconshop.com/wp-content/uploads/edd/eat-flat-1.png" alt="icon" />
      <h3 className="category">Food & Beverage</h3>
      <h3 className="amount">{Number(50000).toLocaleString()}</h3>
    </div>
  )
}

export default ReportItem