import React, { useContext, useRef } from "react";
import clsx from "clsx";
import { InputProps } from "./InputProps";
import './Input.scss';
import { hexToRGB } from "../../utils/colorHelper";
import ThemeContext from "../Theme/ThemeContext";
import Icon from "../Icon/Icon";

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
    } = {...props}

    const {primaryColor} = useContext(ThemeContext);
    const inputRef = useRef<HTMLInputElement>(null);

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
                ref={inputRef}         
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
                id={id}
            />
            {icon &&
                <div className="icon-wrapper">
                    <Icon name={icon} />
                </div>
            }
            {floatingLabel &&
                <div 
                    className={clsx(
                        "floating-label",
                        {
                            "with-icon": icon,
                        }
                    )}>
                    {floatingLabel}
                </div>
            }
        </div>
    );
}

export default Input;