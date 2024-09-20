import React ,{ PropsWithChildren, useContext } from "react";
import { ButtonProps } from "./ButtonProps";
import clsx from "clsx";
import './Button.scss';
import Ripple from "../Ripple/Ripple";
import { contrastTextColor, hexToRGB } from "../../utils/colorHelper";
import ThemeContext from "../Theme/ThemeContext";

const Button = ( props: PropsWithChildren<ButtonProps>) => {
    const {
        children, 
        className, 
        id,
        testid,
        variant = 'outline',
        color, 
        size='md', 
        isLoading, 
        rounded='sm', 
        style, 
        onClick, 
        onMouseEnter,
        onMouseLeave,
        disabled=false,
    } = {...props}

    const {primaryColor} = useContext(ThemeContext);

    return (
        <button className={clsx(
            'capybara-button',
            {
                [`${variant}`]:variant,
                [`size-${size}`]: size,
                [`rounded-${rounded}`]: rounded && rounded !== 'none',
                'disabled':disabled
            },
            className,
            )}
            
            style={{
                "--btnColor": color || primaryColor,
                "--btnColorRGB": hexToRGB(color || primaryColor).join(','),
                "--textColor": contrastTextColor(color || primaryColor),
                ...style}}

            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            disabled={disabled}
            id={id}
            data-testid={testid}
        >
            <div className={clsx({'hide':isLoading})}>
                {children}
            </div>
            {isLoading &&
                <div className="button-loading">
                    L
                </div>
            }
            <Ripple />
        </button>
    );
}

export default Button;