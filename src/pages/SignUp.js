import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import logo from "../images/logo.svg";
import "./SignUp.css";

export default function SignUp() {
  const [data, setData] = useState({
    contact: "",
    name: "",
    username: "",
    password: "",
    avatar: "https://picsum.photos/400",
  });

  let history = useHistory();

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

    axios.post("http://localhost:8000/api/user", data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
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
              <label for="email">Tài khoản</label>
              <input
                name="email"
                id="email"
                value={data.username}
                onChange={handleChange}
              />
            </div>
            <div className="formItem">
              <label for="password">Mật khẩu</label>
              <input
                name="password"
                id="password"
                type="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <button className="formItem btnSubmit" onClick={handleSubmit}>
              Đăng ký
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
