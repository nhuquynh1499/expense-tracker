import React from "react";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import WidgetsIcon from "@material-ui/icons/Widgets";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import BuildIcon from "@material-ui/icons/Build";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import userIcon from "../images/user.svg";
import "./User.css";

function User() {
  return (
    <div className="user">
      <h1 className="title">Tài khoản</h1>
      <img className="avatar" src={userIcon} alt="avatar" />
      <div className="infor">
        <h3 className="name">Như Quỳnh</h3>
        <p className="mail">ngngocnhuquynh0104@gmail.com</p>
      </div>
      <div className="quotes">
        <p>
        Save money and <br/> 
        money will save you 
        </p>
      </div>
      <div className="userItem">
        <AccountBalanceWalletIcon className="iconItem" />
        <span>Ví của tôi</span>
        <NavigateNextIcon className="iconItem"/>
      </div>
      <div className="userItem">
        <WidgetsIcon className="iconItem" />
        <span>Nhóm</span>
        <NavigateNextIcon className="iconItem"/>
      </div>
      <div className="userItem">
        <MonetizationOnIcon className="iconItem" />
        <span>Sổ nợ</span>
        <NavigateNextIcon className="iconItem"/>
      </div>
      <div className="userItem">
        <BuildIcon className="iconItem" />
        <span>Công cụ</span>
        <NavigateNextIcon className="iconItem"/>
      </div>
    </div>
  );
}

export default User;
