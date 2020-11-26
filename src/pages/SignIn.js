import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.svg";
import FacebookIcon from "../assets/facebook.svg";
import GoogleIcon from "../assets/google.svg";
import LockIcon from "@material-ui/icons/Lock";
import DraftsIcon from "@material-ui/icons/Drafts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignIn.css";
import InputField from "../components/UI_Kits/InputField";
import { Form, Formik, FastField } from "formik";
import { Button } from "@material-ui/core";

export default function SignIn() {
  const [canSubmit, setCanSubmit] = useState(false);

  let history = useHistory();

  const handleSubmit = (values) => {
    axios.post("https://api-expense-tracker-codersx.herokuapp.com/api/login", values).then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        history.push("/");
    }).catch((error) => {
      toast.error("Invalid username or password");
    });
  };

  const initialValues = {
    email: "",
    password: "",
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
          <Formik 
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {(formikProps) => {
              const { values, errors, touched } = formikProps;
              console.log({ values, touched, errors });

              return (
                <Form>
                  <FastField
                    name="email"
                    component={InputField}
                    label="Email"
                    startAdornment={<DraftsIcon />}
                    // placeholder="Email"
                  />

                  <FastField
                    name="password"
                    type="password"
                    component={InputField}
                    label="Password"
                    startAdornment={<LockIcon />}
                    // placeholder="Eg: Wow nature ..."
                  />

                  <Button type="submit" fullWidth variant="contained" color="primary">
                    Đăng nhập
                  </Button>
                </Form>
              );
            }}
          </Formik>
          {/* <form className="form-signIn">
            <InputField 
              name="Email"
              value={data.username}
              
            /> */}
          {/* <div className="formItem">
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
            </div> */}
          {/* <button
              // className={
              //   canSubmit
              //     ? "formItem btnSubmit"
              //     : "formItem btnSubmit disabledBtn"
              // }
              type="button"
              // disabled={!canSubmit}
              onClick={handleSubmit}
            >
              Đăng nhập
            </button>
          </form> */}
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
