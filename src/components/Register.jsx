import React from 'react';

const Register = (props) => {

    function handleSubmit(event){
        event.preventDefault()
        console.log(event)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="username"></input>
            <input placeholder="password"></input>
            <button>SUBMIT</button>
        </form>
    )
}

export default Register;