import React from 'react';
import {Link} from 'react-router-dom';
import {registerUser} from '../API-folder';

const Register = () => {

    async function handleSubmit(event){
        try {
        event.preventDefault()
        const username = event.target[0].value
        const password = event.target[1].value
        const token = await registerUser(username, password)
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <div id="box">
        <form onSubmit={handleSubmit}>
            <input id='username' placeholder="Username:"></input>
            <input id='password' placeholder="Password:"></input>
           <Link to="/"><button type="submit">SUBMIT</button></Link> 
        </form>
        </div>
    )
}

export default Register;