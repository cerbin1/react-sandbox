import React from 'react';

const UserOutput = (props) => {
    const paragraphStyle = {
        textAlign: 'center'
    };

    return <div>
        <p style={paragraphStyle}>Default paragraph name</p>
        <p style={paragraphStyle}>Username: {props.username}</p>
    </div>
};

export default UserOutput;
