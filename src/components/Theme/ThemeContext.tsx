import { createContext } from "react";
import { ThemeShared } from "./ThemeProps";

const ThemeContext = createContext<ThemeShared>({
    primaryColor: "#3B82F6",
    secondaryColor: "#10B981",
    lightBackgroundColor: "white",
    lightTextColor: "black",
    lightBorderColor: "#757575",
    darkBackgroundColor: "#404040",
    darkTextColor: "white",
    darkBorderColor: "#b0b0b0"
});

export default ThemeContext;