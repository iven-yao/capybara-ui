import React from "react";
import clsx from "clsx";
import { InputProps } from "./InputProps";
import './Input.scss';
import { hexToRGB } from "../../utils/colorHelper";
import Icon from "../Icon/Icon";
import { useThemeContext } from "../Theme";

const Input = (props:InputProps) => {
    const {
        className,
        style,
        id,
        type = 'text',
        value,
        color,
        defaultValue,
        onChange,
        max,
        maxLength,
        min,
        minLength,
        // pattern,
        placeholder,
        name,
        readonly,
        required,
        // size,
        step,
        width,
        disabled,
        icon,
        variant,
        floatingLabel,
        darkMode=false
    } = {...props}

    const {primaryColor, lightTextColor, darkTextColor, lightBorderColor, darkBorderColor} = useThemeContext();
    const internalId = crypto.randomUUID();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(onChange) {
            onChange(e.target.value);
        }
    }

    return (
        <div 
            className={clsx(
                "capybara-input-wrapper",
            )}

            style={{
                "--inputColor": color || primaryColor,
                "--inputColorRGB": hexToRGB(color || primaryColor).join(','),
                "--inputTextColor": darkMode? darkTextColor: lightTextColor,
                "--inputBorderColor": darkMode? darkBorderColor: lightBorderColor,
                width: typeof width === 'number'? `${width}px`:width,
            }}
        >
            <input       
                className={clsx(
                    "capybara-input",
                    {
                        "with-icon": icon,
                        "with-floating-label": floatingLabel,
                        "underline": variant === 'underline',
                    },
                    className
                )}
                style={style}    
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder || floatingLabel}
                max={max}
                maxLength={maxLength}
                min={min}
                minLength={minLength}
                name={name}
                readOnly={readonly}
                required={required}
                step={step}
                defaultValue={defaultValue}
                disabled={disabled}
                id={id||internalId}
            />
            {icon &&
                <div className="icon-wrapper">
                    <Icon name={icon} />
                </div>
            }
            {floatingLabel &&
                <label 
                    htmlFor={id||internalId}
                    className={clsx(
                        "floating-label",
                        {
                            "with-icon": icon,
                        }
                    )}>
                    {floatingLabel}
                </label>
            }
        </div>
    );
}

export default Input;