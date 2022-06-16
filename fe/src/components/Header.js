/** @format */

import React, {useContext} from 'react'
import AuthContext from "../context/AuthContext";

const Header = () => {

  // get the user from the context
  let user = useContext(AuthContext);

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
              <a className="button is-light is-rounded" href id="avatar">
                <span className="icon">
                  <img
                    src="https://avatars.dicebear.com/api/pixel-art/{{user.get_username}}.svg"
                    alt=""
                  />
                </span>
              </a>
              {user ? (
                <a className="button is-light is-rounded" href>
                  <span className="icon">
                    <i className="fa-solid fa-person-running" />
                  </span>
                  <span>LogOut</span>
                </a>
              ) : (
                <div>
                  <a className="button is-rounded is-info">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-link is-rounded">Log in</a>
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
