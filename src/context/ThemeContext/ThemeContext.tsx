import { createContext, Reducer, useState } from "react";
import { IThemeContext } from "./models/theme-context.interface";
import { defaultThemeContext } from "./models/theme.default";

const ThemeContext: any = createContext(defaultThemeContext);

const ThemeProvider = ( props: any ) => {
    // state
    const [theme, setTheme]: [IThemeContext, Reducer<any, any>] = useState(defaultThemeContext);
    // render
    return(
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };