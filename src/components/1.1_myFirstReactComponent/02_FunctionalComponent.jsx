// Exercise:
// 1. Create a React functional component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types
import React from 'react';
import PropTypes from 'prop-types';


const Greeting = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>this react component is made by expression, we call it functional component</p>
    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;