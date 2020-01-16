import React from "react";
import Users from "./Users";
import Home from "./Home";
import Nav from "./Nav";
import ManageUser from "./ManageUser";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Route path="/" component={Home} exact />
      <Route path="/users" component={Users} />
      <Route path="/manage-user/:userId?" component={ManageUser} />{" "}
      {/*optional second segment in URL at '?' */}
    </>
  );
}

export default App;
