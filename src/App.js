import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';
import NavBar from './navbar';
import { UserProvider } from './context';

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <UserProvider>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/alldata/" element={<AllData />} />
          </Routes>
        </div>
      </UserProvider>      
    </HashRouter>
  );
}

export default App;
