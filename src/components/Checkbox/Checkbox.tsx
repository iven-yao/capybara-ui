import React from "react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { CheckboxProps } from "./CheckboxProps";
import './Checkbox.scss';
import { hexToRGB } from "../../utils/colorHelper";
import { useThemeContext } from "../Theme";

const Checkbox = ({
    className,
    style,
    id,
    onChange,
    checked = false,
    disabled,
    color,
    label,
    darkMode
}:CheckboxProps) => {

    const [isChecked, setIsChecked] = useState(checked);
    const internal_id = crypto.randomUUID();
    const {primaryColor, lightBorderColor, darkBorderColor} = useThemeContext();
    
    useEffect(() => {
        if(onChange) {
            onChange(isChecked);
        }
    }, [isChecked])

    const handleClick = () => {
        if(!disabled) {
            setIsChecked(!isChecked)
        }
    }


    return (
        <div className="capybara-checkbox-container ">
            <input 
                type="checkbox" 
                className="sr-only" 
                id={id||internal_id} 
                checked={isChecked} 
                onChange={() => setIsChecked(!isChecked)}
                disabled={disabled}
            />
            <div 
                className={clsx(
                    "capybara-checkbox",
                    {
                        "checked":isChecked,
                        "disabled":disabled
                    },
                    className
                )}

                style={{
                    "--checkboxColor": color || primaryColor,
                    "--checkboxColorRGB": hexToRGB(color || primaryColor).join(','),
                    "--checkboxBorderColor": darkMode? darkBorderColor: lightBorderColor,
                    ...style
                }}
                onClick={handleClick}
            />
            {label &&
            <label htmlFor={id||internal_id}>{label}</label>
            }
        </div>
    );
}

export default Checkbox;