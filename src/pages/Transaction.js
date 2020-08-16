import React, { useState, useEffect } from "react";
import axios from "axios";
import CostPerDay from "../components/CostPerDay";
import "./Transaction.css";

function Transaction() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/time")
      .then((res) => {
        const times = res.data;
        setTimes(times);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <div className="transaction">
      {
        times.map((time, index) => {
          return <CostPerDay key={index} time={time} />
        })
      }
    </div>
  );
}

export default Transaction;
