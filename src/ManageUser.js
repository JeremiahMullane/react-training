import React, { useState } from "react";

function ManageUser() {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  function handleSubmit(event) {}
  return (
    <>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input id="name" type="text" value={user.name}></input>
        </div>
        <div>
          <label htmlFor="email" value={user.email}>
            Email
          </label>
          <br />
          <input id="email" type="email"></input>
        </div>
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default ManageUser;
