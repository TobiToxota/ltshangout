import React, { createContext, useState, useEffect } from "react";

// create the context
const HomeContext = createContext();

export default HomeContext;

export const HomeProvider = ({ children }) => {

    // create the state
    let [activeComponent, setComponent] = useState(true);

    // put in the contextData
    let contextData = {
        activeComponent : activeComponent,
        setComponent : setComponent
    }

    return (
        <HomeContext.Provider value={contextData}>
            {children}
        </HomeContext.Provider>
    );
}
    

