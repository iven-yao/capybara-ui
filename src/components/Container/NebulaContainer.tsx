import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { ContainerProps } from "./ContainerProps";
import { useThemeContext } from "../Theme";
import { Nebula } from "../Background";

const NebulaContainer = (props:PropsWithChildren<ContainerProps>) => {
    const {
        className,
        style,
        id,
        testid,
        darkMode,
        children,
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
            <Nebula darkMode={darkMode}/>
            {children}
        </div>
    );
}

export default NebulaContainer;