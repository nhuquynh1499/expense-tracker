import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { GroupProvider } from "./contexts/Group";
import { TransactionProvider } from "./contexts/Transaction";
import Transaction from "./pages/Transaction";
import AddTransaction from "./pages/AddTransaction";
import Report from "./pages/Report";
import Planning from "./pages/Planning";
import User from "./pages/User";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <GroupProvider>
      <TransactionProvider>
        <Router>
          <div className="App">
            <Header />
            <div className="main">
              <Switch>
                <Route path="/transaction">
                  <Transaction />
                </Route>
                <Route path="/add-transaction">
                  <AddTransaction />
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
            </div>
            <Footer />
          </div>
        </Router>
      </TransactionProvider>
    </GroupProvider>
  );
}

export default App;
