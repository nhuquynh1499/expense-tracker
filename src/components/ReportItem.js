import React from "react";
import { GroupContext } from "../contexts/Group";
import "./ReportItem.css";

function ReportItem(props) {
  const { groupId, amount, bgColor } = props;

  return (
    <GroupContext.Consumer>
      {({ getInforGroup }) => {
        const group = getInforGroup(groupId);
        return (
          group && (
            <div className="reportItem" style={{ backgroundColor: bgColor }}>
              <img className="iconCategory" src={group.icon} alt="icon" />
              <h3 className="category">{group.name}</h3>
              <h3 className="amount">{Number(amount).toLocaleString()}</h3>
            </div>
          )
        );
      }}
    </GroupContext.Consumer>
  );
}

export default ReportItem;
