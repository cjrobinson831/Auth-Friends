import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import AddFriend from './AddFriend';
import Friend from './Friend';

const MyFriends = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    })

    return (
        <>
            <AddFriend />
            <h1>My Friends!</h1>
            {friends.map(friend => (
                <div key={friend.id}>
                    <Friend friend={friend} />

                </div>
            ))}
        </>
    )
}

export default MyFriends;