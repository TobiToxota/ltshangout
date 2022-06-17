/** @format */

import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Notification from "../components/Notification";

function Login() {
  // create the login function
  let { loginUser } = useContext(AuthContext);
  let { user } = useContext(AuthContext);
  let { loginstatus } = useContext(AuthContext);

  return (
    <section className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="login-container">
          <p className="title">Login</p>
          <p className="subtitle">Welcome to ltshangout</p>
          <form onSubmit={loginUser}>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input is-rounded"
                  type="text"
                  placeholder="Username"
                  name="username"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check" />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input is-rounded"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button
                  className="button is-success is-rounded"
                  type="submit"
                  value="Login">
                  Login
                </button>
              </p>
            </div>
          </form>
          <p className="is-family-code mt-3">
            You dont have an account? {user && <p>{user.username}</p>}
          </p>
          <a href="/register">
            <p className="is-family-code is-size-5">Register</p>
          </a>
          {loginstatus && <Notification msg={"Your password or email is incorrect"}/>}
        </div>
        
      </div>
      <style>
        {`

        @keyframes move {
          from {
              left: -50%;
          }
          to  {
              left: 0%;
          }
          }
      
          .login-container {
          position: relative;
          animation-name: move;
          animation-duration: 0.3s;
          animation-fill-mode: forwards;
          color: black;
          }
          `}
      </style>
    </section>
  );
}

export default Login;
