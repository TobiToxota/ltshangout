/** @format */

import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import anime from "animejs";
import Notificaton from "./Notification";
import Progress from "./Progress";

const UserComponent = ({ id }) => {
  let { user, authTokens } = useContext(AuthContext);

  const [thisUser, setThisUser] = useState({
    name: "",
    avatar: "",
    id: "",
  });

  const [errormsg, setErrormsg] = useState(false);

  return (
    <div className="container is-fluid active is-rounded" id="main-container">
      <div
        className="notification is-light is-rounded"
        style={{
          marginTop: "25vh",
          borderRadius: 15,
          minHeight: "150px",
        }}>
        <h3 class="subtitle is-3 mb-2 roboto">Name: {thisUser.name}</h3>


        </div>
    </div>
  );
};

export default UserComponent;
