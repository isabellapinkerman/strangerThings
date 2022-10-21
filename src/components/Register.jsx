import React from 'react';
import {registerUser} from '../API-folder';
import {useState, useEffect} from 'react';

const Register = () => {
    // const [register, setRegister] = useState();

    // useEffect((token)=>{
    //   registerUser = token
    // })

    async function handleSubmit(event){
        try {
        event.preventDefault()
        const username = event.target[0].value
        const password = event.target[1].value
        const token = await registerUser(username, password)
        console.log(token,"response from the register function")
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
        } catch (error) {
            console.log(error)
        }
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