import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { GroupProvider } from "../../contexts/Group";
import { TransactionProvider } from "../../contexts/Transaction"
import Routes from "../../routes/index";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import './style.css'

export default function Home() {
  return (
    <GroupProvider>
      <TransactionProvider>
        <Router>
          <div className="Home">
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
  )
}