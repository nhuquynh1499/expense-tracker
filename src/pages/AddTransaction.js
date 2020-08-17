import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import SubjectIcon from "@material-ui/icons/Subject";
import EventIcon from "@material-ui/icons/Event";
import "./AddTransaction.css";

function AddTransaction() {
  function getToday() {
    const today = new Date();
    return (
      today.getFullYear() +
      "-" +
      (today.getMonth() > 8
        ? today.getMonth() + 1
        : "0" + (today.getMonth() + 1)) +
      "-" +
      today.getDate()
    );
  }

  return (
    <div className="addTransaction">
      <h1>Thêm Giao Dịch</h1>
      <div className="container">
        <div className="item">
          <div className="icon vnd">VND</div>
          <div className="content amount">
            <p>Số tiền</p>
            <input type="text" defaultValue={0} />
          </div>
        </div>
        <div className="item group">
          <div className="icon"></div>
          <div className="content">
            <span>Chọn nhóm</span>
            <NavigateNextIcon className="moreIcon" />
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <SubjectIcon className="imgIcon" />
          </div>
          <input type="text" placeholder="Ghi chú" className="content" />
        </div>
        <div className="item">
          <div className="icon">
            <EventIcon className="imgIcon" />
          </div>
          <input className="content" type="date" defaultValue={getToday()} />
        </div>
      </div>
      <div className="container action">
        <button> Hủy </button>
        <button> Lưu </button>
      </div>
    </div>
  );
}

export default AddTransaction;
