import React, {useContext, useState} from "react";
import Header from "../components/Header";
import Notification from "../components/Notification";
import Progress from "../components/Progress";
import { useParams } from "react-router-dom";

import AuthContext from "../context/AuthContext";

function NightOut() {

    let {user, authTokens} = useContext(AuthContext);
    const nightoutID = useParams().id;

    return(
        <div>
            <Header/>

        </div>
        )
}

export default NightOut;