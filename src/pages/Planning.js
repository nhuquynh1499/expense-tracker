import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddIcon from "../images/add.svg";
import PlanItem from "../components/PlanItem";
import "./Planning.css";

function Planning() {
  const [value, setValue] = React.useState(0);
  const [planning, setPlanning] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8080/api/planning");
      const planning = res.data;
      setPlanning(planning);
    }
    fetchData();
  }, []);

  return (
    <div className="planning">
      <Link to="/add-planning" className="addPlanningIcon">
        <div className="wrapped">
          <img src={AddIcon} alt="icon" className="icon" />
        </div>
      </Link>
      <div className="typePlan">
        <div
          className={value === 0 ? "item active" : "item"}
          onClick={() => setValue(0)}
        >
          <span>Đang tiến hành</span>
          <div className="hrBottom"></div>
        </div>
        <div
          className={value === 1 ? "item active" : "item"}
          onClick={() => setValue(1)}
        >
          <span>Kết thúc</span>
          <div className="hrBottom"></div>
        </div>
      </div>
      <div className="mainPlan">
        {planning.length > 0 &&
          planning.map((item, index) => (
            <PlanItem planning={item} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Planning;
