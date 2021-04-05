import { createContext, useState } from "react";
import { defaultThemeContext } from "./models/theme.default";

// Context
const ThemeContext = createContext(defaultThemeContext);

// Context Provider
const ThemeProvider = props => {
    // state
    const [theme, setTheme] = useState(defaultThemeContext);
    // render
    return(
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };