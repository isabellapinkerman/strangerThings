import React from 'react';
import {registerUser} from '../API-folder';

const Register = (props) => {

    async function handleSubmit(event){
        try {
            event.preventDefault()
        console.log(event)
        const username = event.target[0].value
        const password = event.target[1].value
        const token = await registerUser(username, password)
        console.log(token)
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
        console.log(username,password)
        } catch (error) {
            console.log(error)
        }
        console.log(event.target)
    }

    return(
        <div id="box">
        <form onSubmit={handleSubmit}>
            <input id='username' placeholder="Username:"></input>
            <input id='password' placeholder="Password:"></input>
            <button type="submit">SUBMIT</button>
        </form>
        </div>
    )
}

export default Register;