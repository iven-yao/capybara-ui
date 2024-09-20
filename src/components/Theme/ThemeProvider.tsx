import React, { PropsWithChildren } from "react";
import { ThemeProps } from "./ThemeProps";
import ThemeContext from "./ThemeContext";

const ThemeProvider = (props:PropsWithChildren<ThemeProps>) => {

    const {
        primaryColor = "#F97316",
        secondaryColor = "#10B981",
        lightBackgroundColor = "white",
        lightTextColor = "black",
        darkBackgroundColor = "#404040",
        darkTextColor = "white"
    } = {...props}

    return (
        <ThemeContext.Provider value={{
            primaryColor,
            secondaryColor,
            lightBackgroundColor,
            lightTextColor,
            darkBackgroundColor,
            darkTextColor
        }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;