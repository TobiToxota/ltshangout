/** @format */

import React, { useState, useEffect } from "react";

const Progress = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  return (
    <div className="progress-container">
      <progress
        className="progress is-primary"
        value={percentage}
        max="100"
        style={{ marginBottom: "4px" }}></progress>
      <div className="columns">
        <div className="column">
          <p className="progress-text">
          </p>
        </div>
        <div className="column">
          <p className="progress-discription">
            You are currently finding a date
          </p>
        </div>
        <div className="column">
          <p className="progress-text">
          </p>
        </div>
        <div className="column">
          <p className="progress-text">
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
