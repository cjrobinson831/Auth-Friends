import React from 'react';

const Friend = ({ friend }) => {
    reurn(
        <div>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
        </div>
    )
}

export default Friend;