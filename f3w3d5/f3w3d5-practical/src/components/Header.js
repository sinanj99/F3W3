import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/company">
          Company
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/add-book">
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/delete-book">
          Delete Book
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/edit-book">
          Edit Book
        </NavLink>
      </li>
    </ul>
  );
}
export default Header;
