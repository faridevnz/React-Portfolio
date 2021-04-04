import { ComponentState, createContext, useState } from "react";

const ResponsiveContext = createContext<ComponentState>({});

const ResponsiveProvider = ( props: any ) => {
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