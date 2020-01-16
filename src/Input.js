import React from "react";
import PropTypes from "prop-types";

//This is a reusable component that makes an updatable input field

function Input(props) {
  // remember, functions with upper-case in files that import React are assumed to be React components
  // that's why "Input" doesn't conflict with html tag "input"
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      ></input>
    </div>
  );
}

// a property of the Input component. Sets the expected types of arguments, and if they are required
Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "number", "password"]),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

// another property of Input. Sets the default value of optional arguments if nothing is passed
Input.defaultProps = {
  type: "text"
};

export default Input;
