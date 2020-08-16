import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LinearProgress from "@material-ui/core/LinearProgress";
import FoodIcon from '../images/food.svg';
import "./PlanItem.css";

function PlanItem() {
  return (
    <div className="planItem">
      <img
        className="iconCategory"
        src={FoodIcon}
        alt="icon"
      />
      <div className="infor">
        <div className="header">
          <div className="textHeader">
            <h3>Tất cả khoản chi</h3>
            <p>01/04/2020 - 05/05/2020</p>
          </div>
          <MoreVertIcon className="iconMore"/>
        </div>
        <div className="main">
          <div className="titleMain">
            <p>Còn lại</p>
            <div className="textMain">
              <h3>{Number(150000).toLocaleString()}</h3>
              <p>Còn 20 ngày</p>
            </div>
          </div>
          <LinearProgress className="process" variant="determinate" value={50} />
        </div>
      </div>
    </div>
  );
}

export default PlanItem;
