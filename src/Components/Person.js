import React from 'react';

const Person = (props) => {
    return (
        <p className="text-6xl" onClick={props.click}>This is {props.name}. He's got {props.teeth} teeth, which throws him in the {props.status} category!</p>
    )
}

export default Person;