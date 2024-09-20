import React from "react";
import { NebulaProps } from "./BackgroundProps";
import "./Background.scss";

const Nebula = (props:NebulaProps) => {
    const {
        color1 = "#4377ef", 
        color2 = "#7befd0"
    } = {...props};

    return (
        <div className="nebula-container"
            style={{
                "--nebulaColor1":color1,
                "--nebulaColor2":color2
            }}
        >
            <div className="nebula"/>
        </div>
    );
}

export default Nebula;