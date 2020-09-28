import React from "react";
import { Switch, Route } from "react-router-dom";

import Transaction from "../pages/Transaction";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
// import Home from "../pages/Home";
import AddTransaction from "../pages/AddTransaction";
import Report from "../pages/Report";
import Planning from "../pages/Planning";
import User from "../pages/User";

import { PrivateRoute } from "./PrivateRoute";

export default function () {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <PrivateRoute exact path="/" component={Transaction} />
      <PrivateRoute path="/transaction" component={Transaction} />
      <PrivateRoute path="/report" component={Report} />
      <PrivateRoute path="/add-transaction" component={AddTransaction} />
      <PrivateRoute path="/planning" component={Planning} />
      <PrivateRoute path="/user" component={User} />
      



    </Switch>
  );
}