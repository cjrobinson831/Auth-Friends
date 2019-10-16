import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth.js";
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl';


const Login = props => {
    const [userCredentials, setUserCredentials] = useState({ username: '', password: '' })

    const handleChange = e => {
        setUserCredentials(
            {
                ...userCredentials,
                [e.target.name]: e.target.value
            }
        )
    }

    const onSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/login', userCredentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                props.history.push('/myfriends')
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <FormControl onSubmit={onSubmit}>
                <input type="text" name="username" value={userCredentials.username} onChange={handleChange} />
                <input type="password" name="password" value={userCredentials.password} onChange={handleChange} />
                <Button color="inherit"> Log In </Button>
            </FormControl>
        </div>
    );
};

export default Login;