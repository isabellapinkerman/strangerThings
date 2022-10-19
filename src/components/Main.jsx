import React, { useEffect, useState } from "react";
import { Navbar, Posts, Register, Login } from './';
import { BrowserRouter as Router,
Route, Routes, Switch, Link} from "react-router-dom";

const Main = () => {

  const [data, setData] = useState({})

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div id="main">
            <Navbar />
            <Posts data={data}/>
          </div>
        }>
        </Route>
        <Route path="/register" element={
          <div id="main">
            <Navbar />
            <Register />
          </div>
        }>
        </Route>
        <Route path="/login" element={
          <div id="main">
            <Navbar />
            <Login />
          </div>
        }>
          <Route path="/login/me" element={
          <div id="main">
            <Navbar />
          </div>
        }></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default Main;
