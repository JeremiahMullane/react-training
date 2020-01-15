// Exercise:
// 1. Create a Nav component that contains 2 anchors: Home, Users
// 2. Display the Nav component on every page

import React from "react";

const Nav = () => {
  return (
    <ul>
      <li>
        <a href="http://localhost:3000/">Home</a>
      </li>
      <li>
        <a href="http://localhost:3000/users">Users</a>
      </li>
    </ul>
  );
};

export default Nav;
