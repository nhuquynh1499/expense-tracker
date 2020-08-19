import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddIcon from "../images/add.svg";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
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
        <button
          className={value === 0 ? "active" : null}
          onClick={() => setValue(0)}
        >
          Đang tiến hành
        </button>
        <button
          className={value === 1 ? "active" : null}
          onClick={() => setValue(1)}
        >
          Kết thúc
        </button>
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
