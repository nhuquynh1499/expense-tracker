import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Transaction from "./pages/Transaction";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Transaction />

        <Switch>
          <Route path="/transaction">
            <Transaction />
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
