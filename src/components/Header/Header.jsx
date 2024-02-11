import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
export default function Header() {
  return (
    <div className="wrapper-navbar">
      <div className="container-navbar">
        <div className="game-heading">
          <Link to="/">
            <h2>GameNest</h2>
          </Link>
        </div>
        <div className="link-headings">
          <div className="anchor-link">
            <div className="home-nav anchor-btns">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-700"}`
                }
              >
                <h3>Home</h3>
              </NavLink>
            </div>
            <div className="about-nav anchor-btns">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-700"}`
                }
              >
                <h3>About</h3>
              </NavLink>
            </div>
            <div className="contact-nav anchor-btns">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-700"}`
                }
              >
                <h3>Contact</h3>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Header
