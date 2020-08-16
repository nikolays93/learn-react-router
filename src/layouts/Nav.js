import React from "react";
import { NavLink } from "react-router-dom";

const navs = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contacts",
    path: "/contacts",
  },
];

const Nav = () => (
  <nav className="app__navigation">
    <ul className="main-nav">
      {navs.map((nav) => (
        <li className="main-nav__item">
          <NavLink
            exact
            to={nav.path}
            className="main-nav__link"
            activeClassName="active"
          >
            {nav.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
