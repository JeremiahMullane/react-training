import React from "react";

function Input(props) {
  // remember, functions with upper-case in files that import React are assumed to be React components
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

export default Input;
