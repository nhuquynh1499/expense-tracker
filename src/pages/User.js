import React from "react";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import WidgetsIcon from "@material-ui/icons/Widgets";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import BuildIcon from "@material-ui/icons/Build";
import userIcon from "../images/user.svg";
import "./User.css";

function User() {
  return (
    <div className="user">
      <img className="avatar" src={userIcon} alt="avatar" />
      <div className="infor">
        <h3 className="name">Như Quỳnh</h3>
        <p className="mail">ngngocnhuquynh0104@gmail.com</p>
      </div>
      <button className="settingUser">Thiết lập tài khoản</button>
      <h1 className='title'>Mở rộng</h1>
      <div className="main">
        <div className="userItem">
          <div className="bgIcon wallet">
            <AccountBalanceWalletIcon className="iconItem" />
          </div>
          <span>Ví của tôi</span>
        </div>
        <div className="userItem">
          <div className="bgIcon group">
            <WidgetsIcon className="iconItem" />
          </div>
          <span>Nhóm</span>
        </div>
        <div className="userItem">
          <div className="bgIcon brown">
            <MonetizationOnIcon className="iconItem" />
          </div>
          <span>Sổ nợ</span>
        </div>
        <div className="userItem">
          <div className="bgIcon setting">
            <BuildIcon className="iconItem" />
          </div>
          <span>Công cụ</span>
        </div>
      </div>
    </div>
  );
}

export default User;
