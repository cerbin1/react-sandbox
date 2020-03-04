import React from 'react';

const UserInput = (props) => {
    const inputStyle = {
        margin: '16px auto',
        display: 'block'
    };

    return <input style={inputStyle} type="text" onChange={props.changed} value={props.username}/>
};

export default UserInput;
