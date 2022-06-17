/** @format */

import React, {useContext} from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";

import AuthContext from "../context/AuthContext";

function Home() {

  let {authTokens, logoutUser} = useContext(AuthContext)

  return (
    <div>
      <Header />
      <Welcome />
    </div>
  );
}

export default Home;
