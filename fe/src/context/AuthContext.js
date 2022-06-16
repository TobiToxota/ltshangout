/** @format */

import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

// create the context
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  
  // create the state
  let [authTokens, setAuthtokens] = useState(localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null);
  let [user, setUser] = useState(localStorage.getItem("authTokens") ? jwt_decode(localStorage.getItem("authTokens")) : null);

  // get a Navigator to send the user to the right page
  const navigate = useNavigate();


  // define the loginUser function
  let loginUser = async (e) => {
    e.preventDefault();

    // get the token from the api
    let response = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    let data = await response.json();

    // if the response is ok, save the token in the local storage
    if (response.status == 200) {
      setAuthtokens(data.token);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/");
    } else {

        // if the response is not ok, show the error
      alert("Something went wrong");
    }
  };

  // put in the contextData
  let contextData = {
    user: user,
    loginUser: loginUser,
  };

  // return the Authcontext with the contextData and the children
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
