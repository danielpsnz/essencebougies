import React, { createContext, useState, useCallback } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
        document.body.classList.toggle("dark-mode");
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};