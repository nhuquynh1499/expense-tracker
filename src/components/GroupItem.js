import React from "react";
import "./GroupItem.css";

function GroupItem({ group, onClick }) {
  return (
    <div className="GroupItem" onClick={onClick}>
      <img src={group.icon} alt="icon" />
      <p>{group.name}</p>
    </div>
  );  
}

export default GroupItem;
