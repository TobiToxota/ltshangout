/** @format */

import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Notificaton = ({ msg }) => {
  let { loginstatus, setloginstatus } = useContext(AuthContext);

  const handleClose = () => {
    setloginstatus(false);
  };

  return (
    <>
      {loginstatus && (
        <div className="notification is-light mt-3">
          <button className="delete" onClick={handleClose} />
          {msg}
        </div>
      )}
    </>
  );
};

export default Notificaton;
