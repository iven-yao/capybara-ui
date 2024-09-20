import clsx from "clsx";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { NeonTextProps } from "./TextProps";
import './Text.scss';

const ThreeDText = (props:PropsWithChildren<NeonTextProps>) => {

    const {
        children,
        className,
        style,
        color='violet',
        fontSize=120
    } = {...props};

    const [neonStyle, setNeonStyle] = useState<React.CSSProperties>();

    useEffect(() => {
        const inlineStyle = (colorCode:string):React.CSSProperties => ({
            fontSize: `${fontSize}px`,
            color: colorCode,
            textShadow: `
                2px 2px 5px ${colorCode === 'black' || colorCode === '#000000' || colorCode === '#000' ? '#FFFFFF20' : '#00000020'},
                0 ${fontSize/20}px 0px #FFFFFF40,
                2px ${fontSize/15}px 0px #00000020
            `,
        })

        setNeonStyle(inlineStyle(color));

    },[color, fontSize])

    return (
        <span 
            className={clsx(
                'capybara-3d-text',
                className
            )}
            style={{...neonStyle, ...style}}
        >
            {children}
        </span>
    );
}

export default ThreeDText;