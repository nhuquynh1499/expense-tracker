import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import logo from "../images/logo.svg";
import FacebookIcon from "../images/facebook.svg";
import GoogleIcon from "../images/google.svg";
import LockIcon from "@material-ui/icons/Lock";
import DraftsIcon from "@material-ui/icons/Drafts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignIn.css";

export default function SignIn() {
  const [data, setData] = useState({
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

    axios.post("http://localhost:8080/api/login", data).then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        history.push("/");
    }).catch((error) => {
      toast.error("Invalid username or password");
    });
  };

  return (
    <div className="SignIn">
      <ToastContainer />
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
              <DraftsIcon className="iconInput" />
              <label for="email">Email</label>
              <input
                name="email"
                id="email"
                value={data.username}
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
