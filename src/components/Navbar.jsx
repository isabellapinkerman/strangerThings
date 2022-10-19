import React, {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { loginUser } from '../API-folder';
import Login from './Login';

const Navbar = () => {
  let Navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState()
  function redirect(){
    let path = '/login'
    Navigate(path)
  }
  function redirectSignup(){
    let path = '/register'
    Navigate(path)
  }
    return (
      <div id="navbar">
        <h2>Stranger's Things</h2>
        <input type="text" placeholder="Search"></input>
        <button>Search</button>
        <button onClick={redirect}>Log In</button>
        <button type="button" onClick={redirectSignup}>Sign Up</button>
        <ul>
          <li>—</li>
          <li>—</li>
          <li>—</li>
        </ul>
    </div>
    );
  };
  
  export default Navbar;