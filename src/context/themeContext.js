/* eslint-disable import/no-anonymous-default-export */
import React,{createContext, useState} from "react";

export const ThemeContext = createContext();

export default ({ children }) => {
const [theme, setTheme] = useState('light');
    const defaultContext = {
        theme, setTheme
    };
return (
<ThemeContext.Provider value={defaultContext}>
{children}
</ThemeContext.Provider>
);
};