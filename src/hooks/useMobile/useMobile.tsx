import { useState, useEffect } from 'react';

export const useMobile = ( breakpoint: Number ) => {
    // state
    const [ width, setWidth ] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    // return
    return width < breakpoint;
}