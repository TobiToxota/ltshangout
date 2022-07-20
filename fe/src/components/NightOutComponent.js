/** @format */

import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import anime from "animejs";
import Notificaton from "./Notification";
import Progress from "./Progress";

const NightOutComponent = ({ id }) => {
  let { user, authTokens } = useContext(AuthContext);

  const [thisNightOut, setThisNightOut] = useState({
    title: "",
    numberOfPersons: "",
    suggesteddates: ["02.04.2020", "03.04.2020"],
    participants: [
      {
        name: "",
        avatar: "",
      },
    ],
    id: "",
    createdBy: "",
  });

  const [errormsg, setErrormsg] = useState(false);

  return (
    <div className="container is-fluid active is-rounded" id="main-container">
      <div
        className="notification is-light is-rounded"
        style={{ marginTop: "25vh", borderRadius: 15, minHeight: "150px" }}>
        <h3 class="subtitle is-3 mb-2">Title: {thisNightOut.title}</h3>
        <Progress percentage={33}></Progress>
        <div id="creator" className="mt-2 is-inline-block is-vcentered is-flex">
          <button className="button is-info is-rounded p-2">
            <img
              src="https://avatars.dicebear.com/api/pixel-art/{{user.get_username}}.svg"
              alt=""
              width={30}
            />
            <p className="roboto-plain">{thisNightOut.createdBy}</p>
          </button>
          <p
            className="roboto is-inline-flex ml-2 pb-2"
            style={{ verticalAlign: "bottom" }}>
            has created this NightOut
          </p>
        </div>
        <div id="participants" className="mt-5 is-vcentered is-flex">
          <h3 className="subtitle is-3 mb-2">Participants:</h3>
          
        </div>
      </div>
    </div>
  );
};

export default NightOutComponent;
