/** @format */

import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Notificaton = ({ msg }) => {
  let { loginstatus, setloginstatus } = useContext(AuthContext);
  let { registerstatus, setregisterstatus } = useContext(AuthContext);

  const handleClose = () => {
    setloginstatus(false);
    setregisterstatus(false);
  };

  return (
    <>
      {loginstatus ? (
        <div className="notification is-light mt-3 fade-in">
          <button className="delete" onClick={handleClose} />
          {msg}
        </div>
      ) : registerstatus ? (
        <div className="notification is-light mt-3 fade-in">
          <button className="delete" onClick={handleClose} />
          {msg}
        </div>
      ) : null}
    </>
  );
};

export default Notificaton;
