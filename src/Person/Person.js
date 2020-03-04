import React from 'react';
import  './Person.css'

const Person = (props) => {
    return <div className="person">
        <p>I am a {props.name} and I am {props.age} years old. {props.children}</p>
        <p>{props.children}</p>
        <p onClick={props.click}>Click me!</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
};

export default Person;
