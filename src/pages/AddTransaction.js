import React, { useRef } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import SubjectIcon from "@material-ui/icons/Subject";
import EventIcon from "@material-ui/icons/Event";
import Modal from "@material-ui/core/Modal";
import { GroupContext } from "../contexts/Group";
import GroupItem from "../components/GroupItem";
import "./AddTransaction.css";

function AddTransaction() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(0);
  const [amountValue, setAmountValue] = React.useState(0);
  const nameGroup = useRef(null);
  const iconGroup = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setAmountValue(event.target.value);
  }
  console.log(amountValue);

  function selectGroup(name, icon) {
    nameGroup.current.innerHTML = name;
    iconGroup.current.setAttribute('style', 'background-image: url('+ icon + ')');
    setOpen(false);
  }

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
            <input type="text" defaultValue={0} value={Number(amountValue)} onChange={handleChange}/>
          </div>
        </div>
        <div className="item group" onClick={handleOpen}>
          <div ref={iconGroup} className="icon"></div>
          <div className="content">
            <span ref={nameGroup}>Chọn nhóm</span>
            <NavigateNextIcon className="moreIcon" />
          </div>
        </div>
        <Modal open={open} onClose={handleClose}>
          <div className="Modal">
            <div className="headerModal">
              <button
                className={type === 2 ? "active" : null}
                onClick={() => setType(2)}
              >
                Đi vay/Cho vay
              </button>
              <button
                className={type === 0 ? "active" : null}
                onClick={() => setType(0)}
              >
                Khoản chi
              </button>
              <button
                className={type === 1 ? "active" : null}
                onClick={() => setType(1)}
              >
                Khoản thu
              </button>
            </div>
            <div className="mainModal">
              <GroupContext.Consumer>
                {({ groups }) => {
                  return groups.map((group, index) => {
                    return (
                      group.type === type && (
                        <GroupItem group={group} key={index} onClick={() => selectGroup(group.name, group.icon)}/>
                      )
                    );
                  });
                }}
              </GroupContext.Consumer>
            </div>
          </div>
        </Modal>
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
