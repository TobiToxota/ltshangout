import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import anime from "animejs";
import Notificaton from "../components/Notification";


const NightOut = ({id}) => {

    let { user, authTokens } = useContext(AuthContext);
    
    const [thisNightOut, setThisNightOut] = useState({
        "title": "",
        "numberOfPersons": "",
        "suggesteddates": [],
        "participants": [],
        "id": "",
        "createdBy": "",
    });

    const [errormsg, setErrormsg] = useState(false);
