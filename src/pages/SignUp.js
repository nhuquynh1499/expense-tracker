import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.svg";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import DraftsIcon from "@material-ui/icons/Drafts";
import "./SignUp.css";

export default function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [canSubmit, setCanSubmit] = useState(false);

  let history = useHistory();

  useEffect(() => {
    setCanSubmit(data.name !== "" && data.email && data.password);
  }, [data]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://api-expense-tracker-codersx.herokuapp.com/api/user", data);
    history.push("/signin");
  };

  return (
    <div className="SignUp">
      <div className="Item">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="Content">
          <div>
            <h2>Tối ưu hóa việc quản lý tài chính cá nhân</h2>
          </div>
          <form className="form-signup">
            <div className="formItem">
              <PersonIcon className="iconInput" />
              <label for="name">Họ và tên</label>
              <input
                name="name"
                id="name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className="formItem">
              <DraftsIcon className="iconInput" />
              <label for="email">Email</label>
              <input
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="formItem">
              <LockIcon className="iconInput" />
              <label for="password">Mật khẩu</label>
              <input
                name="password"
                id="password"
                type="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>

            <button
              className={
                canSubmit
                  ? "formItem btnSubmit"
                  : "formItem btnSubmit disabledBtn"
              }
              type="button"
              disabled={!canSubmit}
              onClick={handleSubmit}
            >
              Tạo tài khoản
            </button>
          </form>
        </div>
      </div>
      <div className="Item Change-Signin">
        <span>Đã có tài khoản?</span>
        <Link to="/signin">Đăng nhập</Link>
      </div>
    </div>
  );
}
