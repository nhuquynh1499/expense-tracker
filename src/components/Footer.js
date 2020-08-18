import React, { useState, useEffect } from "react";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";
import AddIcon from "../images/add.svg";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import PieChartIcon from "@material-ui/icons/PieChart";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import PersonIcon from "@material-ui/icons/Person";

function Footer(props) {
  let { pathname } = useLocation();
  const [isActive, setIsActive] = useState(pathname);
  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);
  const toggle = () => {
    setIsActive(pathname);
  };

  return (
    <div className="footer">
      <div className="footerPage left">
        <Link
          className={
            isActive === "/transaction" || isActive === "/" ? "footerItem active" : "footerItem"
          }
          onClick={toggle}
          to="/transaction"
        >
          <AccountBalanceWalletIcon className="icon" />
          <p>Giao dịch</p>
        </Link>
        <Link
          to="/report"
          className={
            isActive === "/report" ? "footerItem active" : "footerItem"
          }
          onClick={toggle}
        >
          <PieChartIcon className="icon" />
          <p>Báo cáo</p>
        </Link>
      </div>
      <Link to="/add-transaction" className="footerItem addTransaction">
        <div className="wrapped">
          <img src={AddIcon} alt="icon" className="icon" />
        </div>
      </Link>
      <div className="footerPage right">
        <Link
          to="/planning"
          className={
            isActive === "/planning" ? "footerItem active" : "footerItem"
          }
          onClick={toggle}
        >
          <ImportContactsIcon className="icon" />
          <p>Kế hoạch</p>
        </Link>
        <Link
          to="/user"
          className={isActive === "/user" ? "footerItem active" : "footerItem"}
          onClick={toggle}
        >
          <PersonIcon className="icon" />
          <p>Tài khoản</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
