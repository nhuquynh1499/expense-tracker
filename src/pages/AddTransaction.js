import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import SubjectIcon from "@material-ui/icons/Subject";
import EventIcon from "@material-ui/icons/Event";
import Modal from "@material-ui/core/Modal";
import { GroupContext } from "../contexts/Group";
import GroupItem from "../components/GroupItem";
import "./AddTransaction.css";

function AddTransaction() {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(0);
  const [data, setData] = React.useState({
    groupId: "",
    amount: 0,
    note: "",
    time: getToday(),
  });
  const nameGroup = useRef(null);
  const iconGroup = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  function selectGroup(id, name, icon, addSum) {
    nameGroup.current.value = name;
    iconGroup.current.setAttribute(
      "style",
      "background-image: url(" + icon + ")"
    );
    const amount = addSum ? Math.abs(data.amount) : -1 * Math.abs(data.amount);
    setData({
      ...data,
      amount: amount,
      groupId: id,
    });

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

  const handleSubmit = async () => {
    await axios.post("http://localhost:8080/api/transaction", data);
    await axios.post("http://localhost:8080/api/report", {
      month: new Date(data.time).getMonth() + 1,
      year: new Date(data.time).getFullYear(),
      groupId: data.groupId,
      amount: data.amount,
    });
    history.push("/");
  };

  return (
    <div className="addTransaction">
      <div className="container">
        <div className="item">
          <div className="icon vnd">VND</div>
          <div className="content amount">
            <p>Số tiền</p>
            <input
              name="amount"
              type="text"
              defaultValue={0}
              value={Math.abs(data.amount)}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="item group" onClick={handleOpen}>
          <div ref={iconGroup} className="icon"></div>
          <div className="content">
            <input
              name="group"
              ref={nameGroup}
              placeholder="Chọn nhóm"
              disabled
            />
            <NavigateNextIcon className="moreIcon" />
          </div>
        </div>
        <Modal open={open} onClose={handleClose}>
          <div className="Modal">
            <div className="headerModal">
              <div className="wrappedButton">
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
            </div>
            <div className="mainModal">
              <GroupContext.Consumer>
                {({ groups }) => {
                  return groups.map((group, index) => {
                    return (
                      group.type === type && (
                        <GroupItem
                          group={group}
                          key={index}
                          onClick={() =>
                            selectGroup(
                              group._id,
                              group.name,
                              group.icon,
                              group.addSum
                            )
                          }
                        />
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
          <input
            type="text"
            name="note"
            placeholder="Ghi chú"
            className="content"
            value={data.note}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <div className="icon">
            <EventIcon className="imgIcon" />
          </div>
          <input
            name="time"
            className="content"
            type="date"
            value={data.time}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="action">
        <button className="save" onClick={handleSubmit}>
          Lưu
        </button>
      </div>
    </div>
  );
}

export default AddTransaction;
