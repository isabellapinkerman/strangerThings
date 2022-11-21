import React from 'react'
import { Link,  Outlet } from 'react-router-dom';


const Navbar = (props) => {
const posts = props.posts
const setPosts = props.setPosts

function logOut(event){
  localStorage.removeItem('token')
}

    return (
      <div id="navbar">
        <h2>Stranger's Things</h2>
        <div>{
          !localStorage.getItem('token')? 
          <div>
          <Link to="/login"><button>Log In</button></Link>
         <Link to="/register"><button type="button">Sign Up</button></Link>
          </div> : 
          <Link to="/"><button onClick={logOut}>Log Out</button></Link>
        }</div>
        <div>{ localStorage.getItem('token') ?
        <Link to="/addPost"><button>Add Post</button></Link> :
        null
        }</div>
        <Outlet />
    </div>
    );
  };
  
  export default Navbar;