import React from "react";

function Home() {
  const h1Style = {
    color: "blueviolet",
    fontStyle: "oblique",
    textShadow: "1px 1px black",
    marginBottom: 20
  };

  const h2Style = {
    color: "olivedrab",
    fontStyle: "oblique",
    textShadow: "1px 1px black",
    marginBottom: 20
  };

  const h4Style = {
    color: "olivedrab",
    marginBottom: 20
  };

  return (
    <>
      <h1 className="header" style={h1Style}>
        Home
      </h1>
      <h2 style={h2Style}>Welcome to your React CRUD App!</h2>
      <h4 style={h4Style}>Use this App to manage a database of user info.</h4>
    </>
  );
}

export default Home;
