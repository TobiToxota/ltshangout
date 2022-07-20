import React, { useContext } from "react";

import AuthContext from "../context/AuthContext";
import Notification from "../components/Notification";
import Header from "../components/Header";
import UserComponent from "../components/UserComponent";

function User() {
    let {user, authTokens} = useContext(AuthContext);

    return(
        <div>
            <Header/>
            <Notification/>
            <div className="container is-fluid active is-rounded" id="main-container">
                <UserComponent />
            </div>
        </div>
    )
}

export default User;