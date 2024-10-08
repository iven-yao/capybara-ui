import React, { useContext, useEffect, useRef, useState } from "react";
import { SwitchProps } from "./SwitchProps";
import clsx from "clsx";
import { hexToRGB } from "../../utils/colorHelper";
import './Switch.scss';
import { useThemeContext } from "../Theme";

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
        shape,
        darkMode=false
    } = {...props};

    const { primaryColor, lightBorderColor, darkBorderColor } = useThemeContext();

    const [internalId] = useState(crypto.randomUUID());
    const [isChecked, setIsChecked] = useState(checked);
    const checkboxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(onChange) {
            onChange(isChecked||false);
        }
    }, [isChecked])

    const handleToggle = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(!disabled) {
            setIsChecked(e.target.checked);
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
            "--switchBorderColor":darkMode? darkBorderColor : lightBorderColor,
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
                checked={isChecked}
                disabled={disabled}
                onChange={handleToggle}
                ref={checkboxRef}
            />
            <div 
                className={clsx(
                    "capybara-switch-bar",
                    {
                        "checked":isChecked,
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