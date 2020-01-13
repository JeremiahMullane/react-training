import React from "react";

function App() {
  const h1Style = {
    color: "red",
    marginBottom: 20
  };

  const users = [
    { id: 1, name: "Cory", email: "c@h.com" },
    { id: 1, name: "Megan", email: "m@c.com" },
    { id: 1, name: "Tami", email: "t@tonga.com" }
  ];

  return (
    <>
      <h1 className="header" style={h1Style}>
        App
      </h1>
      <label htmlFor="firstName">First Name </label>
      <input id="firstName" type="text"></input>
      <p>My app.</p>
    </>
  );
}

export default App;

/*
JSX Differences:
    1.  class => className
    2.  for => htmlFor
    3.  objectStyles, camelCased rather than kabob-cased
*/
