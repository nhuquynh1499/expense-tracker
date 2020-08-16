import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PlanItem from "../components/PlanItem";
import "./Planning.css";

function Planning() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="planning">
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab label="Đang áp dụng" />
        <Tab label="Đã kết thúc" />
      </Tabs>
      <div>
        <PlanItem />
        <PlanItem />
      </div>
    </div>
  );
}

export default Planning;
