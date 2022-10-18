import React, { useEffect, useState } from "react";
import { Navbar } from './';

const Main = () => {

  const [data, setData] = useState()
  useEffect(()=>{
  async function getUrl(){
    let response = await fetch( `https://strangers-things.herokuapp.com/api/2209-FTB-ET_WEB_FT`)
    let result = await response.json(
      console.log(result),
      setData(result)
    )
    getUrl()
  }},[])

  return (
    <div id="main">
      <Navbar />
      {/* <Posts data={data}/> */}
  </div>
  );
};

export default Main;
