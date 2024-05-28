// Exercise:
// 1. Create a React class component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types
import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Welcome extends Component{
    render() {
        const{name = "boy"} = this.props;
        return (
            <div>
                <h1>Hello, {name}!</h1>
                <p>this react component is made by class, we call it class component</p>
            </div>
        )
    }
};

Welcome.propTypes = {
    name:PropTypes.string,
};
export default Welcome;