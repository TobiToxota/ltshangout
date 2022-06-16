/** @format */

import React from "react";

function Register() {
  return (
    <section className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="login-container">
          <p className="title">Register</p>
          <p className="subtitle">Welcome to ltshangout</p>
          <form action="" method="post">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input is-rounded"
                  type="email"
                  placeholder="Email"
                  name="email"
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
              <p className="control has-icons-left">
                <input
                  className="input is-rounded"
                  type="password"
                  placeholder="Confirm your password"
                  name="confirmation"
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
                  value="Register">
                  Register
                </button>
              </p>
            </div>
            <p className="is-family-code">You allready have an account?</p>
            <a href="/login">
              <p className="is-family-code is-size-5">Login</p>
            </a>
          </form>
        </div>
      </div>
      <article className="message is-info">
        <div className="message-body">
          <p className="has-text-centered is-size-5"></p>
        </div>
      </article>
    </section>
  );
}

export default Register;
