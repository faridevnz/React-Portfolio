enum Colors {
    'FUCSIA' = 'fucsia',
    'ORANGE' = 'orange',
    'AZURE' = 'azure'
}

enum Themes {
    'LIGHT' = 'light',
    'DARK' = 'dark'
}

interface IThemeContext {
    color: Colors,
    theme: Themes
}

export type { IThemeContext };
export { Themes, Colors }
