import React, { PropsWithChildren, useContext } from "react";
import { ItemProps } from "./DropdownProps";
import clsx from "clsx";
import Ripple from "../Ripple/Ripple";
import { DropdownContext } from "./DropdownContext";

const Item = ({
    children,
    className,
    onClick
}:PropsWithChildren<ItemProps>) => {
    const {variant, size} = useContext(DropdownContext);
    
    return (
        <div 
            className={clsx(
                "list-item",
                {
                    "border outline":!variant || variant === 'outline',
                    "minimal": variant === 'minimal',
                    "fill": variant === 'fill',
                    "three-d": variant === 'three-d',
                    [`size-${size}`]: size,        
                }, 
                className
            )} 
            role="listitem" 
            onClick={onClick}
        >
            {children}
            <Ripple/>
        </div>
    );
}

export default Item;
