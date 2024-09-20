import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { NeonTextProps } from "./TextProps";
import './Text.scss';

const NeonText = (props:PropsWithChildren<NeonTextProps>) => {

    const {
        children,
        className,
        style,
        color='violet',
        fontSize=120
    } = {...props};

    return (
        <span 
            className={clsx(
                'capybara-neon-text',
                className
            )}
            style={{"--neonColor": color, fontSize: `${fontSize}px`, ...style}}
        >
            {children}
        </span>
    );
}

export default NeonText;