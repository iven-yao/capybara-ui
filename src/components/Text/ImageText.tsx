import React from "react";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import { ImageTextProps } from "./TextProps";
import './Text.scss';

const ImageText = (props:PropsWithChildren<ImageTextProps>) => {

    const {
        children,
        className,
        style,
        src,
        fontSize=120
    } = {...props};

    return (
        <span 
            className={clsx(
                'capybara-image-text',
                className
            )}
            style={{
                backgroundImage:`url(${src})`,
                fontSize:`${fontSize}px`,
                ...style
            }}
        >
            {children}
        </span>
    );
}

export default ImageText;