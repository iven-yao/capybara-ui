import React, { PropsWithChildren, useContext } from "react";
import Button from "../Button";
import { DropdownButtonProps } from "./DropdownProps";
import { DropdownContext } from "./DropdownContext";
import clsx from "clsx";

const DropdownButton = (props:PropsWithChildren<DropdownButtonProps>) => {

    const {
        children,
        className,
        style,
    } = {...props}

    const {color, variant, rounded, size, disabled, isOpen} = useContext(DropdownContext);

    return (
        <Button 
            variant={variant || 'outline'} 
            color={color} 
            size={size || 'md'}
            rounded={rounded || 'sm'}
            className={clsx(
                "dropdown-btn",
                {
                    "open":isOpen
                },
                className
            )}
            style={style}
            disabled={disabled}
        >
            {children}
        </Button>
    );
}

export default DropdownButton;