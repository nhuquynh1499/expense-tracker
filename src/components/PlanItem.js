import React from "react";
import { GroupContext } from "../contexts/Group";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./PlanItem.css";

function PlanItem(props) {
  const { groupId, goal, amount, dateStart, dateEnd } = props.planning;

  function formatDay(date) {
    const monthOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const d = new Date(date);
    return d.getDate() + " " + monthOfYear[d.getMonth()] + " " + d.getFullYear();
  }

  function sumDay() {
    const dStart = new Date(dateStart);
    const dEnd = new Date(dateEnd);
    return Math.ceil((dEnd - dStart + 1) / (3600000*24));
  }

  function dayFromNow() {
    const dStart = new Date(dateStart);
    return (Date.now() - dStart) > 0 ? Math.ceil((Date.now() - dStart) / (3600000 * 24)) : 0
  }

  return (
    <div className="planItem">
      <div className="headerPlan">
        <GroupContext.Consumer>
          {({ getInforGroup }) => {
            const group = getInforGroup(groupId);
            return (
              group && (
                <div className="group">
                  <img className="iconCategory" src={group.icon} alt="icon" />
                  <p>{group.name}</p>
                </div>
              )
            );
          }}
        </GroupContext.Consumer>
        <div className="number">
          <span className="goal">{Number(goal).toLocaleString()}</span>
          <span className="amount">Còn lại {Number(goal + amount).toLocaleString()}</span>
        </div>
      </div>
      <LinearProgress className="process" variant="determinate" value={amount / goal * 100} />
      <div className="time">
        <p>{formatDay(dateStart)} - {formatDay(dateEnd)}</p>
        <p>{dayFromNow()} / {sumDay()}</p>
      </div>
    </div>
  );
}

export default PlanItem;
