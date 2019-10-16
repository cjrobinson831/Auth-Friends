import React from 'react';
import FormControl from '@material-ui/core/FormControl';


const Friend = ({ friend }) => {
    return (
        <div>
            <FormControl>
                <h2>{friend.name}</h2>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
            </FormControl>

        </div>
    )
}

export default Friend;