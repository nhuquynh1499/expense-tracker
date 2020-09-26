import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GroupProvider } from "./contexts/Group";
import { TransactionProvider } from "./contexts/Transaction";
import Routes from "./routes/index";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <GroupProvider>
      <TransactionProvider>
        <Router>
          <div className="App">
            <div className="HeaderAndMain">
              <Header />
              <div className="main">
                <Routes />
              </div>
            </div>
            <Footer />
          </div>
        </Router>
      </TransactionProvider>
    </GroupProvider>
  );
}

export default App;
