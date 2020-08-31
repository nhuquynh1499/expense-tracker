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

  const getPlan = () => {
    if (value === 0) {
      return planning.filter((plan) => {
        return Date.now() - new Date(plan.dateEnd).getTime() < 0;
      });
    } // Dang tien hanh
    else {
      return planning.filter((plan) => {
        return Date.now() - new Date(plan.dateEnd).getTime() > 0;
      });
    }
  };

  return (
    <div className="planning">
      <Link to="/add-planning" className="addPlanningIcon">
        <div className="wrapped">
          <img src={AddIcon} alt="icon" className="icon" />
        </div>
      </Link>
      <div className="filter">
        <div
          className={value === 1 ? "item active" : "item"}
          onClick={() => setValue(1)}
        >
          <span>Kết thúc</span>
          <div className="hrBottom"></div>
        </div>
        <div
          className={value === 0 ? "item active" : "item"}
          onClick={() => setValue(0)}
        >
          <span>Đang tiến hành</span>
          <div className="hrBottom"></div>
        </div>
      </div>
      <div className="mainPlan">
        {getPlan().length > 0 ? (
          getPlan().map((item, index) => (
            <PlanItem planning={item} key={index} />
          ))
        ) : (
          <h1 className="nodata">Không có kế hoạch</h1>
        )}
      </div>
    </div>
  );
}

export default Planning;
