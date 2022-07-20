/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  // get the user from the context
  let { user, logoutUser } = useContext(AuthContext);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
      style={{ backgroundColor: "#fff0" }}>
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/logo_light.png" />
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          style={{ color: "white" }}>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {user ? ( // if user is logged in
                <div id="loggedIn" className="is-inline-flex">
                  <a className="button is-light is-rounded" id="avatar">
                    <span className="icon">
                      <img
                        src="https://avatars.dicebear.com/api/pixel-art/{{user.get_username}}.svg"
                        alt=""
                      />
                    </span>
                  </a>

                  <div>
                    <a className="button is-light is-rounded mr-2">
                      <span className="icon">
                        <i className="fa-solid fa-list-ul" />
                      </span>
                      <p className="is-size-7">Your NightOuts</p>
                    </a>
                  </div>

                  <div onClick={logoutUser}>
                    <a className="button is-light is-rounded">
                      <span className="icon">
                        <i className="fa-solid fa-person-running" />
                      </span>
                      <span>LogOut</span>
                    </a>
                  </div>
                </div>
              ) : (
                // if user is not logged in
                <div id="loggedOut" className="is-inline-flex">
                  <div>
                    <a className="button is-rounded is-light">
                      <strong>Sign up</strong>
                    </a>
                    <a className="button is-rounded is-light">
                      <Link to="/login" style={{ color: "purple" }}>
                        Login
                      </Link>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
