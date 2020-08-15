import React from 'react';
import CostPerDay from '../components/CostPerDay';
import './Transaction.css';

function Transaction() {
  return (
    <div className="transaction">
      <CostPerDay />
      <CostPerDay />

    </div>
  )
}

export default Transaction