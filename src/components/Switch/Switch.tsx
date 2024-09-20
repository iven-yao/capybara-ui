import React, { useContext, useRef, useState } from "react";
import { SwitchProps } from "./SwitchProps";
import clsx from "clsx";
import { hexToRGB } from "../../utils/colorHelper";
import './Switch.scss';
import ThemeContext from "../Theme/ThemeContext";

const Switch = (props:SwitchProps) => {
    const {
        className,
        style,
        id,
        testid,
        checked,
        onChange,
        disabled,
        label,
        color,
        width,
        toggleSize,
        // variant,
        shape
    } = {...props};

    const { primaryColor } = useContext(ThemeContext);

    const [internalId] = useState(crypto.randomUUID());
    const checkboxRef = useRef<HTMLInputElement>(null);

    const handleToggle = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(onChange) {
            onChange(e.target.checked);
        }
    }

    const inlineStyles = ():React.CSSProperties => {
        const switchColor = color || primaryColor;
        const switchColorRGB = hexToRGB(color || primaryColor).join(',');
        const switchWidth = typeof width === 'number'? `${width}px` : width || "40px";
        const switchToggleSize = typeof toggleSize === 'number'? `${toggleSize}px` : toggleSize || "15px";
        let switchHeight = '';

        if(shape === undefined || shape === 'default') {
            switchHeight = "5px";
        } else if(shape === 'pill' || shape === 'rectangle') {
            switchHeight = typeof toggleSize === 'number'? `${toggleSize+2}px` : `${parseInt(toggleSize || "15px")+4}px`;
        }

        return  {
            "--switchColor": switchColor,
            "--switchColorRGB": switchColorRGB,
            "--switchWidth": switchWidth,
            "--switchHeight": switchHeight,
            "--toggleSize": switchToggleSize,
            ...style
        }
    }

    return (
        <div 
            className={clsx(
                "capybara-switch",
                {
                    "disabled":disabled
                },
                className
            )}

            style={inlineStyles()}
            
            id={id}
            data-testid={testid}
        >
            {label &&
                <label htmlFor={internalId}>{label}</label>
            }
            <input 
                id={internalId}
                type="checkbox" 
                checked={checked}
                disabled={disabled}
                onChange={handleToggle}
                ref={checkboxRef}
            />
            <div 
                className={clsx(
                    "capybara-switch-bar",
                    {
                        "checked":checked,
                        [`${shape}`]: shape !== undefined && shape !== 'default',
                    }
                )}
                onClick={() => checkboxRef.current?.click()}
            >
                <div className="capybara-switch-toggle">

                </div>
            </div>
        </div>
    );
}

export default Switch;