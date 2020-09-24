import React, { useState, useEffect } from "react";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import DonutSmallOutlinedIcon from "@material-ui/icons/DonutSmallOutlined";
import TurnedInNotOutlinedIcon from "@material-ui/icons/TurnedInNotOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

function Footer(props) {
  let { pathname } = useLocation();
  const pathnameHadFooter = ["", "transaction", "report", "planning", "user"];
  const [isActive, setIsActive] = useState(pathname);

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);
  const toggle = () => {
    setIsActive(pathname);
  };

  return (
    <div className={pathnameHadFooter.indexOf(isActive.substring(1)) !== -1 ? "footer" : "footer notShow"}>
      <Link
        className={
          isActive === "/transaction" || isActive === "/"
            ? "footerItem active"
            : "footerItem"
        }
        onClick={toggle}
        to="/transaction"
      >
        <AccountBalanceWalletOutlinedIcon className="icon" />
        <p>Giao dịch</p>
      </Link>
      <Link
        to="/report"
        className={isActive === "/report" ? "footerItem active" : "footerItem"}
        onClick={toggle}
      >
        <DonutSmallOutlinedIcon className="icon" />
        <p>Báo cáo</p>
      </Link>
      <Link
        to="/planning"
        className={
          isActive === "/planning" ? "footerItem active" : "footerItem"
        }
        onClick={toggle}
      >
        <TurnedInNotOutlinedIcon className="icon" />
        <p>Kế hoạch</p>
      </Link>
      <Link
        to="/user"
        className={isActive === "/user" ? "footerItem active" : "footerItem"}
        onClick={toggle}
      >
        <PersonOutlineOutlinedIcon className="icon" />
        <p>Tài khoản</p>
      </Link>
    </div>
  );
}

export default Footer;
