import React, { useState, useEffect } from "react";
import { getUsers, deleteUser, addUser, editUser } from "./api/userApi";
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

  async function handleEdit(user) {
    const savedUser = await editUser(user);
    setUsers(users.map(_user => (_user.id === user.id ? savedUser : _user)));
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
      />
      <Route
        path="/manage-user/:userId?"
        render={reactRouterProps => {
          return (
            <ManageUser
              users={users}
              handleAdd={handleAdd}
              handleEdit={handleEdit}
            />
          );
        }}
      />
    </>
  );
}

export default App;
