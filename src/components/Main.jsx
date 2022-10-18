import React, { useEffect, useState } from "react";
import { Navbar, Posts, Register } from './';

const Main = () => {

  const [data, setData] = useState({})

  return (
    <div id="main">
      <Navbar />
      <Posts data={data}/>
      <Register />
  </div>
  );
};

export default Main;
