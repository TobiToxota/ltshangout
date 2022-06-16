/** @format */

import React, {useContext} from "react";
import Header from "../components/Header";
import AuthContext from "../context/AuthContext";

function Home() {

  let {authTokens, logoutUser} = useContext(AuthContext)

  return (
    <div>
      <Header />
    </div>
  );
}

export default Home;
