import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import logo from "../images/logo.svg";
import FacebookIcon from "../images/facebook.svg";
import GoogleIcon from "../images/google.svg";
import "./SignIn.css";

export default function SignIn() {
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
    <div className="SignIn">
      <div className="Item">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="Content">
          <div>
            <h2>Tối ưu hóa việc quản lý tài chính cá nhân</h2>
          </div>
          <form className="form-signIn">
            <div className="formItem">
              <span>Tài khoản</span>
              <input
                name="email"
                value={data.username}
                onChange={handleChange}
              />
            </div>
            <div className="formItem">
              <span>Mật khẩu</span>
              <input
                name="password"
                type="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <button className="formItem btnSubmit" onClick={handleSubmit}>
              Đăng nhập
            </button>
          </form>
          <div className="or">
            <div className="ngang"></div>
            <span>OR</span>
            <div className="ngang"></div>
          </div>
          <button className="BySocial facebook">
            <img src={FacebookIcon} alt="FacebookIcon" />
            <span>Đăng nhập bằng Facebook</span>
          </button>
          <button className="BySocial google">
            <img src={GoogleIcon} alt="GoogleIcon" />
            <span>Đăng nhập bằng Google</span>
          </button>
        </div>
      </div>
      <div className="Item Change-Signin">
        <span>Lần đầu tiên sử dụng?</span>
        <Link to="/signup">Đăng ký</Link>
      </div>
    </div>
  );
}
