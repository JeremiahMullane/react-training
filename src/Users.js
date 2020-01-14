import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "./api/userApi";

function Users() {
  const [users, setUsers] = useState([]);

  // useEffect runs by default after every render
  useEffect(() => {
    // Using _users to avoid naming confusion with users above
    getUsers().then(_users => setUsers(_users));
  }, []); //empty dependency array means change default to "run just once"

  const h1Style = {
    color: "purple",
    marginBottom: 20
  };

  function handleDelete(id) {
    deleteUser(id).then(() => {
      // Remove deleted element from users array
      const newUsers = users.filter(user => user.id !== id);
      setUsers(newUsers); //update state, so React knows to re-render
    });
  }

  return (
    <>
      <h1 className="header" style={h1Style}>
        Users
      </h1>
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
                <button onClick={() => handleDelete(user.id)}>Delete</button>
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
