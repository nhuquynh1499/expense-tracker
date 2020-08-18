import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import FoodIcon from "../images/food.svg";
import "./PlanItem.css";

function PlanItem() {
  return (
    <div className="planItem">
      <div className="headerPlan">
        <img className="iconCategory" src={FoodIcon} alt="icon" />
        <p>Ăn uống</p>
        <h1>{Number(150000).toLocaleString()}</h1>
      </div>
      <LinearProgress className="process" variant="determinate" value={50} />
      <div className="time">
        <p>10 Jun 2020 - 10 Jul 2020</p>
        <p>3 / 26</p>
      </div>
    </div>
  );
}

export default PlanItem;
