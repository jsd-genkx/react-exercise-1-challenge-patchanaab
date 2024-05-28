// Exercise:
// 1. Create a React function component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types
import React from 'react'
import PropTypes from 'prop-types';

function Hello(props){
    return(
        <div>
        <h1>Hello,{props.name}</h1>
        <p>this react component is made by declaration, we call it function component</p>
        </div>
    )
}

Hello.propTypes = {
    name: PropTypes.string,
  };
export default Hello;