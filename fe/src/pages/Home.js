/** @format */

import React, {useContext, createContext, useState} from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";

import AuthContext from "../context/AuthContext";



function Home() {

  const WelcomeContext = createContext();

  let [isActive, setIsActive] = useState(true);

  let {authTokens, logoutUser} = useContext(AuthContext)

  return (
    <div>
      <>
      <Welcome/>
      </>
    </div>
  );
}

export default Home;
