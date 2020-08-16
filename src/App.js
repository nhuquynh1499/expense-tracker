import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Transaction from "./pages/Transaction";
import Report from "./pages/Report";
import Planning from "./pages/Planning";
import User from "./pages/User";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/transaction">
            <Transaction />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
          <Route path="/planning">
            <Planning />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/" exact>
            <Transaction />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
