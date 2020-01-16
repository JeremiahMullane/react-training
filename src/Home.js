import React from "react";

function Home() {
  const h1Style = {
    color: "purple",
    marginBottom: 20
  };

  const h2Style = {
    color: "blue",
    fontStyle: "oblique",
    textShadow: "1px 1px black",
    marginBottom: 20
  };

  return (
    <>
      <h1 className="header" style={h1Style}>
        Home
      </h1>
      <h2 style={h2Style}>Welcome to your React App!</h2>
    </>
  );
}

export default Home;
