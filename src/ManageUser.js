import React, { useState, useEffect } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import Input from "./Input";
import PropTypes from "prop-types";
import { Heading, Button } from "@athena/forge";

function ManageUser({ users, handleAdd, handleEdit }) {
  const h1Style = {
    color: "blueviolet",
    fontStyle: "oblique",
    textShadow: "1px 1px black",
    marginBottom: 20
  };

  const match = useRouteMatch(); // info about the matching URL, can pull out the userId param from URL
  const { userId } = match.params; // destructure id from match.params.userId

  const [user, setUser] = useState({
    name: "",
    email: ""
  });
  const [saveCompleted, setSaveCompleted] = useState(false);

  useEffect(() => {
    if (userId && users.length > 0) {
      const editUser = users.find(user => user.id === parseInt(userId, 10));
      if (!editUser) return; // TODO add 404 page if bad id entered into URL
      setUser(editUser);
    }
  }, [userId, users]);

  function handleUserChange(event) {
    setUser({ ...user, [event.target.id]: event.target.value }); // Brackets are "computed property syntax"- sets a property using a variable
  }

  async function handleAddUser(event) {
    event.preventDefault(); // stop browswer from posting back after await
    userId ? await handleEdit(user) : await handleAdd(user);
    setSaveCompleted(true);
  }

  return (
    <>
      {saveCompleted && <Redirect to="/users" />}{" "}
      {/* using logical AND as an ad-hoc if statement. Only returns if 1st expression is true */}
      <Heading text="User Info" />
      <form onSubmit={handleAddUser}>
        {/* We use the reusable component "Input" to make updatable JSX inputs within the form
    You don't need reusable components to do this, but it makes the code nicer and easier to work with*/}
        <Input
          label="Name"
          id="name"
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
        <input type="submit" value="Save" />{" "}
        <input
          type="button"
          name="cancel"
          value="Cancel"
          onClick={() => setSaveCompleted(true)}
        />
      </form>
    </>
  );
}

ManageUser.propTypes = {
  users: PropTypes.array.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
};

export default ManageUser;
