/** @format */

import React, {useContext, createContext, useState} from "react";
import CreateNightOut from "../components/CreateNightOut";
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
      <Header/>
      <Welcome/>
      <CreateNightOut/>
      </>
    </div>
  );
}

export default Home;
