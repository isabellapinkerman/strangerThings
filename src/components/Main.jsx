import React, { useEffect, useState } from "react";
import { Navbar, Posts, Register } from './';
import { BrowserRouter as Router,
Route, Switch, Link} from "react-router-dom";

const Main = () => {

  const [data, setData] = useState({})

  return (
    <Router>
    <div id="main">
        <Navbar />
        <Register />
        <Posts data={data}/>
   </div>
  </Router>
  );
};

export default Main;
