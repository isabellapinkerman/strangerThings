import React, { useEffect, useState } from "react";
import { Navbar, Posts, Register, Login, WelcomeScreen } from './';
import { BrowserRouter as Router,
Route, Routes, Switch, Link} from "react-router-dom";

currentUserInfo = {
  useState
}

const Main = () => {

  const [data, setData] = useState({})

  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={
          <div id="main">
            <Posts data={data}/>
          </div>
        }></Route>
        <Route path="/register" element={
          <div id="main">
            <Register />
          </div>
        }></Route>
        <Route path="/login" element={
          <div id="main">
            <Login />
          </div>
        }></Route>
        <Route path="/login/welcome" element={
          <div id="main">
            <WelcomeScreen />
            <Posts data={data}/>
          </div>
        }></Route>
      </Routes>
    </Router>
  );
};

export default Main;
