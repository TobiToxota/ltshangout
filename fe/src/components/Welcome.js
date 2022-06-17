/** @format */

import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import Header from "./Header";
import HomeContext from "../context/HomeContext";
import anime from "animejs";

const Welcome = () => {
  let { user } = useContext(AuthContext);

  let { activeComponent, setComponent } = useContext(HomeContext);

  const switchComponent = () => {
    setComponent("CreateNightOut");
    console.log(activeComponent);
  }

  // animate the addcontainer
  useEffect(() => {
    anime({
    targets: '#addcontainer-button',
    translateY: [-500,0],
    duration: 1000,
  })}, [])

  return (
    <>
    <Header />
    <div
      className="container is-widescreen is-fluid active visible"
      id="addcontainer-button"
      style={{ marginTop: "25vh" }}>
      <div className="container is-flex is-vcentered is-justify-content-center mb-1">
        <img src="/logo_light.png" alt="" width={200} />
      </div>
        <div className="container is-flex is-vcentered is-justify-content-center mb-1 mt-4">
            <h1 className="title is-2 roboto-plain" style={{ color: "white" }}>
                Welcome {user.username}
            </h1>
        </div>
      <div className="container is-flex is-vcentered is-justify-content-center">
        <h2
          className="subtitle mb-6 has-text-centered"
          style={{ color: "white" }}>
          Here you can plan your nightout with your friends, collegues or
          family.
        </h2>
      </div>
      <div className="container is-flex is-vcentered is-justify-content-center">
        <button
          className="button is-info is-light is-large is-rounded"
          id="createButton" onClick={switchComponent}>
          <span className="icon">
            <i className="fa-solid fa-users" />
          </span>
          <span className="ml-1">Create a new Nightout</span>
        </button>
      </div>
    </div>
    </>
  );
};

export default Welcome;
