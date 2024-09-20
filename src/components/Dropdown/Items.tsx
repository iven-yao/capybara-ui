import React, { PropsWithChildren, useContext } from "react";
import { DropdownContext } from "./DropdownContext";
import clsx from "clsx";
import { componentBasics } from "../../types/propTypes";

const Items = ({
    children,
    className,
}:PropsWithChildren<componentBasics>) => {
    const {isOpen, variant, rounded} = useContext(DropdownContext);

    return (
        isOpen?
        <div className={clsx(
            "list",
            {  
                "border outline":!variant || variant === 'outline',
                "minimal": variant === 'minimal',
                "fill": variant === 'fill',
                "three-d": variant === 'three-d',
                [`rounded-${rounded}`]: rounded
            },
            className,
            )} role="list" aria-orientation="vertical" aria-labelledby="options-menu">
            {children}
        </div>
        :
        null
    );
}

export default Items;