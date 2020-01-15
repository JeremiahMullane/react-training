import React from "react";
import Users from "./Users";
import Home from "./Home";
import Nav from "./Nav";
import ManageUser from "./ManageUser";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Always display Nav */}
      <Route path="/" component={Nav} />
      {/* When URL is at root, load the Home component. */}
      <Route path="/" component={Home} exact />
      {/* When URL is at root, load the Users component. */}
      <Route path="/users" component={Users} exact />
      {/* When URL is '/user', load the ManageUser component. */}
      <Route path="/user" component={ManageUser} />
    </>
  );
}

export default App;
