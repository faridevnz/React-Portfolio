import { createContext, useState } from "react";

// Context
const ResponsiveContext = createContext(1000);

// Context Provider
const ResponsiveProvider = props => {
    // state
    const [ breakpoint ] = useState(1000);
    // render
    return (
        <ResponsiveContext.Provider value={[ breakpoint ]}>
            { props.children }
        </ResponsiveContext.Provider>
    );
}

export { ResponsiveContext, ResponsiveProvider }