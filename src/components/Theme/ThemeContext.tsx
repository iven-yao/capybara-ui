import { createContext } from "react";
import { ThemeShared } from "./ThemeProps";

const ThemeContext = createContext<ThemeShared>({
    primaryColor: "#F97316",
    secondaryColor: "#10B981",
    lightBackgroundColor: "white",
    lightTextColor: "black",
    darkBackgroundColor: "#404040",
    darkTextColor: "white"
});

export default ThemeContext;