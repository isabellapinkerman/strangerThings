import React from 'react';
import { Link } from 'react-router-dom'
import { loginUser } from "../API-folder";

const Login = () => {

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const username = event.target[0].value;
      const password = event.target[1].value;
      const registeredUser = await loginUser(username, password);
      const token = registeredUser.token
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
    
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="box">
      <form onSubmit={handleSubmit}>
        <input id="username" placeholder="Username:" type='text'></input>
        <input id="password" placeholder="Password:" type='password'></input>
        <button type="submit">SUBMIT</button>
       <Link to={"/register"}>
        <button type="button">Don't have an account?</button>
       </Link>
      </form>
    </div>
  );
};

export default Login;
