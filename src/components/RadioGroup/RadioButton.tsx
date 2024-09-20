import React, { PropsWithChildren, useContext, useState } from "react";
import { RadioButtonProps } from "./RadioProps";
import { RadioGroupContext } from "./RadioGroupContext";
import clsx from "clsx";

const RadioButton = (props:PropsWithChildren<RadioButtonProps>) => {
    const {
        className,
        style,
        id,
        testid,
        value,
        label,
        disabled
    } = {
        ...props
    }

    const [internalId] = useState(crypto.randomUUID());
    const {selectedValue, setSelectedValue, name, variant, disabled:groupDisabled} = useContext(RadioGroupContext);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(e.target.value);
    }

    return (
        <div
            className={clsx(
                "capybara-radio-button",
                {
                    "disabled":disabled||groupDisabled
                },
                className
            )}
            style={style}
            id={id}
            data-testid={testid}
        >
            <input 
                type="radio" 
                name={name} 
                value={value} 

                className={clsx({
                    "square": variant==="square",
                    "hollow-circle": variant==="hollow-circle"
                })}
                
                id={internalId} 

                checked={selectedValue === value}
                onChange={handleChange}
                
                disabled={disabled||groupDisabled}
            />
            <label htmlFor={internalId}>
                {label}
            </label>
        </div>
    );
}

export default RadioButton;