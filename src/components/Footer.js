import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import PieChartIcon from "@material-ui/icons/PieChart";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PersonIcon from '@material-ui/icons/Person';

function Footer() {
  return (
    <div className="footer">
      <Link to="/transaction" className="footerItem active">
        <AccountBalanceWalletIcon className="icon" />
        <p>Giao dịch</p>
      </Link>
      <Link to="/report" className="footerItem">
        <PieChartIcon className="icon" />
        <p>Báo cáo</p>
      </Link>
      <Link to="/add-transaction"className="footerItem addTransaction" >
        <AddCircleIcon className="icon"/>
      </Link>
      <Link  to="/planning" className="footerItem">
        <ImportContactsIcon className="icon" />
        <p>Kế hoạch</p>
      </Link>
      <Link to="/user"className="footerItem">
        <PersonIcon className="icon" />
        <p>Tài khoản</p>
      </Link>
    </div>
  );
}

export default Footer;
