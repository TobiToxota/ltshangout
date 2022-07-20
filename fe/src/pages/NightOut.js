import React, {useContext, useState} from "react";
import Header from "../components/Header";
import Notification from "../components/Notification";
import NightOutComponent from "../components/NightOutComponent";
import Progress from "../components/Progress";
import { useParams } from "react-router-dom";

import AuthContext from "../context/AuthContext";

function NightOut() {

    let {user, authTokens} = useContext(AuthContext);

    return(
        <div>
            <Header/>
            <NightOutComponent/>
        </div>
        )
}

export default NightOut;