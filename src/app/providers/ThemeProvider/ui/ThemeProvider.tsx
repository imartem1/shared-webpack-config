import { FC, useMemo, useState, PropsWithChildren } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const deffaultProps = useMemo(() => {
        return {
            theme: theme,
            setTheme: setTheme,
        };
    }, [theme]);
    return ( 
    <ThemeContext.Provider value={deffaultProps}>
        {children}
    </ThemeContext.Provider> 
    );
}
 
export default ThemeProvider;