import React from 'react';
import {registerUser} from '../API-folder';

const Register = (props) => {

    function handleSubmit(event){
        event.preventDefault()
        console.log(event)
        const username = event.target[0].value
        const password = event.target[1].value
        console.log(username,password)
    }

    return(
        <div id="box">
        <form onSubmit={handleSubmit}>
            <input id='username' placeholder="Username:"></input>
            <input id='password' placeholder="Password:"></input>
            <button>SUBMIT</button>
        </form>
        </div>
    )
}

export default Register;