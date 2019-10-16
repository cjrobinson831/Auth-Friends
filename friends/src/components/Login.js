import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
    const [userCredentils, setuserCredentials] = useState({ username: '', password: '' })

    const handleChange = e => {
        setuserCredentials(
            {
                ...userCredentils,
                [e.target.name]: e.target.value
            }
        )
    }
}

const onSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
        .post('/login', userCredentils)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
        })
        .catch(err => console.log(err))
}

return (
    <div>
        <form onSubmit={onSubmit}>
            <input type='text' name='username' value={userCredentils.username} onChange={handleChange} />
            <input type='password' name='password' value={userCredentils} onChange={handleChange} />
            <button> Log In </button>
        </form>
    </div>
);

export default Login;