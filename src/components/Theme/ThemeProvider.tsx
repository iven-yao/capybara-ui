import React, { PropsWithChildren } from "react";
import { ThemeProps } from "./ThemeProps";
import ThemeContext from "./ThemeContext";

const ThemeProvider = (props:PropsWithChildren<ThemeProps>) => {

    const {
        primaryColor= "#F97316",
        secondaryColor= "#10B981",
        lightBackgroundColor= "white",
        lightTextColor= "black",
        lightBorderColor= "#757575",
        darkBackgroundColor= "#404040",
        darkTextColor= "white",
        darkBorderColor= "#b0b0b0"
    } = {...props}

    return (
        <ThemeContext.Provider value={{
            primaryColor,
            secondaryColor,
            lightBackgroundColor,
            lightTextColor,
            lightBorderColor,
            darkBackgroundColor,
            darkTextColor,
            darkBorderColor
        }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;