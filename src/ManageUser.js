import React, { useState } from "react";
import { addUser } from "./api/userApi";
import { Redirect } from "react-router-dom";
import Input from "./Input";

function ManageUser() {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });
  const [saveCompleted, setSaveCompleted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault(); // stop browswer from posting back after await
    const savedUser = await addUser(user);
    setSaveCompleted(true);
  }

  function handleUserChange(event) {
    setUser({ ...user, [event.target.id]: event.target.value }); // Brackets are "computed property syntax"- sets a property using a variable
  }

  return (
    <>
      {saveCompleted && <Redirect to="/users" />}{" "}
      {/* using logical AND as an ad-hoc if statement. Only returns if 1st expression is true */}
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          id="name"
          type="text"
          onChange={handleUserChange}
          value={user.name}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          onChange={handleUserChange}
          value={user.email}
        />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default ManageUser;
