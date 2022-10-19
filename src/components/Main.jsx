import React, { useEffect, useState } from "react";
import { Navbar, Posts, Register } from './';

const Main = () => {

  const [data, setData] = useState({})

  return (
    <div id="main">
      <Navbar />
      <Register />
      <Posts data={data}/>
  </div>
  );
};

export default Main;
