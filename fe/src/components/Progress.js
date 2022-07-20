/** @format */

import React, { useState, useEffect } from "react";
import anime from "animejs";

const Progress = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    anime({
      targets: ".progress",
      value: [0, percentage],
      duration: 1000,
      easing: "easeInOutExpo",
    });

    anime({
      targets: "#progressText",
      opacity: [0, 1],
      duration: 1500,
      easing: "easeInOutExpo",
    });
  }, [percentage]);

  return (
    <div
      className="progress-container is-align-items-center has-text-centered"
      style={{ margin: "0px", padding: "0px" }}>
      <progress
        className="progress is-info"
        max="100"
        value={percentage}
        style={{ marginBottom: "4px" }}></progress>
      <div className="fluid is-inline-block is-justify-content-center" id="progressText">
        <i className="fa-solid fa-calendar-days is-inline"></i>
        <p className="roboto is-inline ml-2">
          This Nightout is currently in the "finding-a-date" phase
        </p>
      </div>
    </div>
  );
};

export default Progress;
