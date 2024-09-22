import React, { PropsWithChildren, useEffect, useState } from "react";
import { RadioGroupProps } from "./RadioProps";
import { RadioGroupContext } from "./RadioGroupContext";
import clsx from "clsx";
import './Radio.scss';
import RadioButton from "./RadioButton";
import { hexToRGB } from "../../utils/colorHelper";
import { useThemeContext } from "../Theme";

const RadioGroup = (props: PropsWithChildren<RadioGroupProps>) => {
    const {
        children,
        className,
        style,
        id,
        testid,
        value,
        disabled = false,
        size,
        onChange,
        orientation,
        name,
        options = [],
        color,
        variant = "circle",
        darkMode = false,
    } = {...props};
    
    const { primaryColor, darkBorderColor, lightBorderColor, darkTextColor, lightTextColor } = useThemeContext();

    const [selectedValue, setSelectedValue] = useState(value);


    useEffect(() => {
        if(selectedValue && onChange) {
            onChange(selectedValue);
        }
    },[selectedValue]);

    return(
        <RadioGroupContext.Provider value={{selectedValue, setSelectedValue, name, disabled, variant}}>
            <div 
                className={clsx(
                    "capybara-radio-group",
                    {
                        [`size-${size}`]:size,
                        [`${orientation}`]:orientation,
                    },
                    className
                )}
                style={{
                    "--radioColor":color || primaryColor,
                    "--radioColorRGB": hexToRGB(color || primaryColor).join(','),
                    "--radioBorderColor": darkMode? darkBorderColor: lightBorderColor,
                    "--radioTextColor": darkMode? darkTextColor: lightTextColor,
                    ...style
                }}
                id={id}
                data-testid={testid}
            >
                {options.map(option => <RadioButton key={`${name}_${option.value}`} label={option.label} value={option.value}/>)}
                {children}
            </div>
        </RadioGroupContext.Provider>
    );

}

RadioGroup.Radio = RadioButton;

export default RadioGroup;