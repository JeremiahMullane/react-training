import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Heading, Button } from "@athena/forge";

function Users({ users, deleteUser }) {
  //destructure props argument

  return (
    <>
      <Heading text="Users" />
      <Link to="/manage-user">
        <Button
          text="Add User"
          icon="Add"
          className="fe_u_margin--bottom-medium"
        ></Button>
      </Link>
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
                <Button
                  text="Delete"
                  icon="Delete"
                  aria-label={`Delete user ${user.name}`}
                  onClick={() => deleteUser(user.id)}
                  className="fe_u_margin--xsmall"
                  variant="secondary"
                />
                <Link to={"/manage-user/" + user.id}>
                  {/*includes optional id metadata in URL */}
                  <Button
                    text="Edit"
                    icon="Edit"
                    aria-label={`Edit user ${user.name}`}
                    className="fe_u_margin--xsmall"
                    variant="secondary"
                  />
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
