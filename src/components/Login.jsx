import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../API-folder";

const Login = (props) => {
  const [user, setUser] = useState();
  console.log(props);
  function getUser() {
    setUser(user);
  }

  const Navigate = useNavigate()
  function redirectSignUp(){
      let path = '/register'
      Navigate(path)
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      console.log(event);
      const username = event.target[0].value;
      const password = event.target[1].value;
      const token = await loginUser(username, password);
      console.log(token);
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
      console.log(username, password);
    
      let path = "/welcome";
      Navigate(path);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="box">
      <form onSubmit={handleSubmit} user={user}>
        <input id="username" placeholder="Username:"></input>
        <input id="password" placeholder="Password:"></input>
        <button type="submit">SUBMIT</button>
        <button type="button" onClick={redirectSignUp}>Don't have an account?</button>
      </form>
    </div>
  );
};

export default Login;
