import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {registerUser} from '../API-folder';

const Login = (props) => {
    let Navigate = useNavigate()
    function handleSubmit(event){
        event.preventDefault()
        console.log(event)
        const username = event.target[0].value
        const password = event.target[1].value
        console.log(username,password)
    }
    function redirectSignup(){
      let path = '/register'
      Navigate(path)
    }

    return(
        <div id="box">
        <form onSubmit={handleSubmit}>
            <input id='username' placeholder="Username:"></input>
            <input id='password' placeholder="Password:"></input>
            <button type="submit">SUBMIT</button>
            <button type="button" onClick={redirectSignup}>Don't have an account?</button>
        </form>
        </div>
    )
}

export default Login;