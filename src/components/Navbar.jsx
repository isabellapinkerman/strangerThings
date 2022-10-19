import React, {useState} from 'react'
import { loginUser } from '../API-folder';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState()



    return (
      <div id="navbar">
        <h2>Stranger's Things</h2>
        <input type="text" placeholder="Search"></input>
        <button>Search</button>
        <button onClick={loginUser}>Log In</button>
        <button>Sign Up</button>
        <ul>
          <li>—</li>
          <li>—</li>
          <li>—</li>
        </ul>
    </div>
    );
  };
  
  export default Navbar;