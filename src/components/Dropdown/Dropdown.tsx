import React, { PropsWithChildren, useState } from "react";
import { DropdownProps } from "./DropdownProps";
import { DropdownContext } from "./DropdownContext";
import clsx from "clsx";
import './Dropdown.scss';
import Items from "./Items";
import Item from "./Item";
import DropdownButton from "./DropdownButton";
import { contrastTextColor, hexToRGB } from "../../utils/colorHelper";
import { useThemeContext } from "../Theme";

const Dropdown = (props:PropsWithChildren<DropdownProps>) => {
    const {
        children,
        className,
        variant='outline',
        color,
        rounded='sm',
        size='md',
        disabled,
        style,
        floatPlacement,
        darkMode=false
    } = {...props};

    const [isOpen, setIsOpen] = useState(false);
    const {primaryColor, lightBorderColor, darkBorderColor, lightBackgroundColor, darkBackgroundColor} = useThemeContext();

    return (
        <DropdownContext.Provider value={{
            isOpen, 
            setIsOpen, 
            color:color || primaryColor, 
            variant: variant || 'outline', 
            rounded:rounded || 'sm', 
            size:size || 'md', 
            disabled,
            floatPlacement
        }}>
            <div className={clsx(
                "capybara-dropdown", 
                className,
                )} 

                style={{
                    "--dropdownColor": color || primaryColor,
                    "--dropdownColorRGB": hexToRGB(color || primaryColor).join(','),
                    "--textColor": contrastTextColor(color || primaryColor),
                    "--dropdownBorderColor": darkMode? darkBorderColor: lightBorderColor,
                    "--dropdownBg": darkMode? darkBackgroundColor: lightBackgroundColor,
                    ...style
                }}

                onMouseEnter={() => {
                    if(!disabled) setIsOpen(true);
                }}

                onMouseLeave={() => {
                    if(!disabled) setIsOpen(false);
                }}
            >
                {children}
            </div>
        </DropdownContext.Provider>
    );
}

Dropdown.Button = DropdownButton;
Dropdown.Items = Items;
Dropdown.Item = Item;

export default Dropdown;