import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./style.css";

function Header() {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(pathname);

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  return (
    <div className="header">
      <div
        className={
          isActive === "/transaction" || isActive === "/"
            ? "transaction item active"
            : "item"
        }
      >
        <h2 className="title">Transactions</h2>
      </div>
      <div className={ isActive === "/add-transaction" ? "addTransactionHeader item active" : "item" }>
        <Link to="/transaction">
          <ArrowBackIosIcon className="backIcon" />
        </Link>
        <div className="name">
          <span className="title">Thêm giao dịch</span>
        </div>
      </div>
      <div className={isActive === "/report" ? "report item active" : "item"}>
        <h2 className="title">Report</h2>
      </div>
      <div
        className={isActive === "/planning" ? "planning item active" : "item"}
      >
        <h2 className="title">Planning</h2>
      </div>
      <div className={isActive === "/user" ? "user item active" : "item"}>
        <h2 className="title">Profile</h2>
      </div>
    </div>
  );
}

export default Header;
