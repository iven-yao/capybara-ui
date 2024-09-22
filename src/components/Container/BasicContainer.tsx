import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { ContainerProps } from "./ContainerProps";
import { useThemeContext } from "../Theme";

const BasicContainer = (props:PropsWithChildren<ContainerProps>) => {
    const {
        className,
        style,
        id,
        testid,
        darkMode,
        children,
    } = {...props};

    const {lightBackgroundColor, lightTextColor, darkBackgroundColor, darkTextColor} = useThemeContext();

    return (
        <div 
            className={clsx(
                "capybara-container",
                className            
            )}
            
            style={{
                backgroundColor: darkMode? darkBackgroundColor: lightBackgroundColor,
                color: darkMode? darkTextColor: lightTextColor,
                ...style
            }}

            id={id}
            data-testid={testid}
        >
            {children}
        </div>
    );
}

export default BasicContainer;