import React, {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { loginUser } from '../API-folder';
import Login from './Login';
import { AddPost } from './';

const Navbar = (props) => {
  let Navigate = useNavigate()
  let username = props.username
  let password = props.password
  
  function redirect(){
    let path = '/login'
    Navigate(path)
  }
  function redirectSignup(){
    let path = '/register'
    Navigate(path)
  }
  function redirectLogout(){
    let token = loginUser("token")
    let path = '/'
    Navigate(path)
    localStorage.removeItem("token");
    // localStorage.setItem("token", null)
    password = null
  }
  function redirectAddPost(){
    let path = '/addPost'
    Navigate(path)
  }
    return (
      <div id="navbar">
        <h2>Stranger's Things</h2>
        <input type="text" placeholder="Search"></input>
        <button>Search</button>
        <div>{
          username === undefined && password === undefined ? 
          <button onClick={redirect}>Log In</button> : 
          <button onClick={redirectLogout}>Log Out</button>
        }</div>
        <button type="button" onClick={redirectSignup}>Sign Up</button>
        <button onClick={redirectAddPost}>Add Post</button>
    </div>
    );
  };
  
  export default Navbar;