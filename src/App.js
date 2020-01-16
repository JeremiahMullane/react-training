import React, { useState, useEffect } from "react";
import { getUsers, deleteUser, addUser } from "./api/userApi";
import Users from "./Users";
import Home from "./Home";
import Nav from "./Nav";
import ManageUser from "./ManageUser";
import { Route } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  // useEffect runs by default after every render
  useEffect(() => {
    // Using _users to avoid naming confusion with users above
    getUsers().then(_users => setUsers(_users));
  }, []); //empty dependency array means change default to "run just once" when rendered

  function handleDelete(id) {
    deleteUser(id).then(() => {
      // Remove deleted element from users array
      const newUsers = users.filter(user => user.id !== id);
      setUsers(newUsers); //update state, so React knows to re-render
    });
  }

  async function handleAdd(user) {
    const savedUser = await addUser(user);
    setUsers([...users, savedUser]);
  }

  return (
    <>
      <Nav />
      <Route path="/" component={Home} exact />
      <Route
        path="/users"
        render={reactRouterProps => {
          return <Users users={users} deleteUser={handleDelete} />;
        }}
      />{" "}
      {/*pass props to User components */}
      <Route
        path="/manage-user/:userId?"
        render={reactRouterProps => {
          return <ManageUser handleAdd={handleAdd} />;
        }}
      />{" "}
    </>
  );
}

export default App;
