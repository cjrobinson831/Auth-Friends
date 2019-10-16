import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'


const AddFriend = () => {
    const [friendData, setFriendData] = useState({ name: '', age: '', email: '' })

    const handleChange = e => {
        setFriendData(
            {
                ...friendData,
                [e.target.name]: e.target.value
            }
        )
    }

    const onSubmit = e => {
        e.preventDefault()

        axiosWithAuth()
            .post('/friends', friendData)
            .then(res => {
                console.log(e.target)
                setFriendData(
                    {
                        ...friendData,
                        name: '',
                        age: '',
                        email: ''
                    }
                )
            })
            .catch(err => console.log(err));
    };

    return (
        <FormControl onSubmit={onSubmit}>
            <input
                type='text'
                name='name'
                value={friendData.name}
                placeholder="Friends Name"
                onChange={handleChange}
                variant="outlined" color="primary"
            />

            <input
                type='text'
                name='age'
                value={friendData.age}
                placeholder="Friend's Age"
                onChange={handleChange}
                variant="outlined" color="primary"
            />

            <input
                type='text'
                name='email'
                value={friendData.email}
                placeholder="Friend's email"
                onChange={handleChange}
                variant="outlined" color="primary"
            />
            <Button variant="outlined" color="primary" type="submit">Add Friend</Button>
        </FormControl>
    );
};

export default AddFriend;