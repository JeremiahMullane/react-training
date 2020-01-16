import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Users({ users, deleteUser }) {
  //destructure props argument
  const h1Style = {
    color: "purple",
    marginBottom: 20
  };

  return (
    <>
      <h1 className="header" style={h1Style}>
        Users
      </h1>
      <p>
        <Link to="/manage-user">
          <button>Add User</button>
        </Link>
      </p>
      {/*Display user data in a table with headers for id, name, and email*/}
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                {/* Delay execution via arrow func */}
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <Link to={"/manage-user/" + user.id}>
                  {" "}
                  {/*includes optional id metadata in URL */}
                  <button>Edit 🖊 </button>
                </Link>
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default Users;

/*
JSX Differences from HTML:
    1.  class => className
    2.  for => htmlFor
    3.  objectStyles, camelCased rather than kabob-cased
    4.  embed JS with braces {}
    5.  comments must be blocks embeded in braces
    6.  must be wrapped by empty tags <> ... </>
*/
