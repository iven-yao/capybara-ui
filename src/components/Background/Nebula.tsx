import React from "react";
import { NebulaProps } from "./BackgroundProps";
import "./Background.scss";
import { useThemeContext } from "../Theme";

const Nebula = (props:NebulaProps) => {
    const {
        color1 = "#4377ef", 
        color2 = "#7befd0",
        darkMode = false
    } = {...props};

    const {darkBackgroundColor, lightBackgroundColor} = useThemeContext();

    return (
        <div className="nebula-container"
            style={{
                "--nebulaColor1":color1,
                "--nebulaColor2":color2,
                backgroundColor: darkMode? darkBackgroundColor: lightBackgroundColor
            }}
        >
            <div className="nebula"/>
        </div>
    );
}

export default Nebula;