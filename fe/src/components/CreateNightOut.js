/** @format */

import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import HomeContext from "../context/HomeContext";
import anime from "animejs";

const CreateNightOut = () => {
  let { user } = useContext(AuthContext);
  let { activeComponent, setComponent } = useContext(HomeContext);
  const [nightOutToCreate, setNightOutToCreate] = useState({
    title: "",
    numberOfPersons: "",
  });
  const [errormsg, setErrormsg] = useState(false);
  const [successmsg, setsuccessmsg] = useState(false);

  const navigate = useNavigate();

  const switchComponent = () => {
    setComponent("Welcome");
    console.log(activeComponent);
  };

  const handleTitleChange = (e) => {
    setNightOutToCreate({ ...nightOutToCreate, title: e.target.value });
    console.log(nightOutToCreate);
  };

  const handleNumberOfPersonsChange = (e) => {
    setNightOutToCreate({
      ...nightOutToCreate,
      numberOfPersons: e.target.value,
    });
    console.log(nightOutToCreate);
  };

  const closeNotifcation = () => {
    setErrormsg(false);
    console.log("done");
  };

  useEffect(() => {
    anime({
      targets: "#main-container",
      translateX: [-500, 0],
      duration: 1000,
    });
  }, [activeComponent]);

  const createThisNightOut = async (e) => {
    e.preventDefault();
    if (nightOutToCreate.title.length < 2) {
      setErrormsg("Please enter a title, or at least 2 characters.");
      return;
    }
    if (nightOutToCreate.numberOfPersons < 2) {
      setErrormsg("You really dont want to, hang it with yourself? Do you?");
      return;
    }
    setsuccessmsg('Your NightOut is beeing created')

    let response = await fetch("http://localhost:8000/api/createnightout", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify({
        user: user.username,
        title: nightOutToCreate.title,
        persons: nightOutToCreate.numberOfPersons,
      }),
    });
    let data = await response.json();

    // check if the response is ok and then redirect the user to the new nightout
    if (response.status === 200) {
      setTimeout(navigate(`/nightout/${data.id}`), 2000)
      setsuccessmsg(false)
    } else {
      setsuccessmsg(false)
      setErrormsg("Sorry, but something went wrong. Please try again or come back later.")
    }
  };

  return (
    <>
      {activeComponent != "Welcome" && (
        <div
          className="container is-fluid active is-rounded"
          id="main-container">
          <div
            className="notification is-light is-rounded"
            style={{ marginTop: "25vh", borderRadius: 15 }}>
            <i
              className="fa-solid fa-xmark fa-xl"
              id="x"
              onClick={switchComponent}
            />
            <form onSubmit={createThisNightOut}>
              <div className="field is-justify-content-center">
                <div className="container has-text-centered">
                  <img
                    className="image is-inline mr-2"
                    src="https://avatars.dicebear.com/api/pixel-art/{{user.get_username}}.svg"
                    alt=""
                    width={35}
                  />
                  <label className="label is-size-5 roboto has-text-centered is-inline-block">
                    {user.username}´s next nightout
                  </label>
                </div>
              </div>
              <div className="field is-justify-content-center">
                <label className="label is-size-3 roboto">
                  A nice title for your next Nightout?
                </label>
                <div className="control">
                  <input
                    className="input roboto-plain"
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={handleTitleChange}
                  />
                </div>
              </div>
              <div className="field has-addons">
                <p className="control">
                  <input
                    className="input is-size-7-mobile roboto-plain"
                    type="number"
                    placeholder="# of People"
                    name="numberOfPersons"
                    onChange={handleNumberOfPersonsChange}
                    min={0}
                    max={25}
                  />
                </p>
                <p className="control">
                  <a className="button is-static roboto is-size-7-mobile">
                    # of Persons (You can add or remove later)
                  </a>
                </p>
              </div>
              <div className="has-text-centered">
                <button
                  className="button is-info is-rounded center"
                  style={{ margin: "auto" }}>
                  Create your Nightout
                </button>
              </div>
            </form>
          </div>
          {errormsg && (
            <div
              className="notification is-warning mt-3 mx-auto is-rounded fade-in roboto-plain"
              style={{ maxWidth: "300px", borderRadius: "12px" }}
              onClick={closeNotifcation}>
              <button className="delete" />
              <p className="roboto-plain has-text-centered">{errormsg}</p>
            </div>
          )}
          {successmsg && (
            <div
              className="notification is-light mt-3 mx-auto is-rounded fade-in roboto-plain"
              style={{ maxWidth: "300px", borderRadius: "12px" }}
              onClick={closeNotifcation}>
                <progress class="progress is-small is-info my-auto" max="100">15%</progress>
                <p className="has-text-centered mt-2 roboto">Your NightOut is beeing created</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CreateNightOut;
