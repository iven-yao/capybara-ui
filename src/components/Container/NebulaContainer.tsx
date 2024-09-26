import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { NebulaContainerProps } from "./ContainerProps";
import { useThemeContext } from "../Theme";
import { Nebula } from "../Background";

const NebulaContainer = (props:PropsWithChildren<NebulaContainerProps>) => {
    const {
        className,
        style,
        id,
        testid,
        darkMode,
        children,
        color1,
        color2,
    } = {...props};

    const {darkTextColor, lightTextColor} = useThemeContext();

    return (
        <div 
            className={clsx(
                "capybara-container",
                className            
            )}
            
            style={{
                color: darkMode? darkTextColor: lightTextColor,
                ...style
            }}

            id={id}
            data-testid={testid}
        >
            <Nebula darkMode={darkMode} color1={color1} color2={color2}/>
            {children}
        </div>
    );
}

export default NebulaContainer;