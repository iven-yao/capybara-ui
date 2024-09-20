import React, { useContext } from "react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { CheckboxProps } from "./CheckboxProps";
import './Checkbox.scss';
import { hexToRGB } from "../../utils/colorHelper";
import ThemeContext from "../Theme/ThemeContext";

const Checkbox = ({
    className,
    style,
    id,
    onChange,
    checked = false,
    disabled,
    color,
    label
}:CheckboxProps) => {

    const [isChecked, setIsChecked] = useState(checked);
    const internal_id = crypto.randomUUID();
    const {primaryColor} = useContext(ThemeContext);
    
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
            <input type="checkbox" className="sr-only" id={id||internal_id} checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
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