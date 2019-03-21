import React from 'react';
import './Person.css';

// Cannont access state.  Functions are very simple in what they do and that is the benefit.
// Larger applications should not have many state changing elements.
const person = (props) => {
    return (
      <div className="Person">
        <p onClick={props.click}>I'm a { props.name } and I am { props.age } years old!</p>
        <p>{ props.children }</p>
        <input type="text" value={ props.name } onChange={ props.changed } />
      </div>
    )
}

export default person;