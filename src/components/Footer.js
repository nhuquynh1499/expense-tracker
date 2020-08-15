import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import PieChartIcon from "@material-ui/icons/PieChart";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Footer() {
  return (
    <div className="footer">
      <Link to="/transaction" className="footerItem active">
        <AccountBalanceWalletIcon className="icon" />
        <p>Transactions</p>
      </Link>
      <div className="footerItem">
        <PieChartIcon className="icon" />
        <p>Report</p>
      </div>
      <div className="footerItem addTransaction">
        <AddCircleIcon className="icon"/>
        <p>Add Transaction</p>
      </div>
      <div className="footerItem">
        <ImportContactsIcon className="icon" />
        <p>Planning</p>
      </div>
      <div className="footerItem">
        <MoreVertIcon className="icon" />
        <p>More</p>
      </div>
    </div>
  );
}

export default Footer;
