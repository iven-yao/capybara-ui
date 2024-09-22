import React, { PropsWithChildren, useContext } from "react";
import { DropdownContext } from "./DropdownContext";
import clsx from "clsx";
import { componentBasics } from "../../types/propTypes";

const Items = ({
    children,
    className,
}:PropsWithChildren<componentBasics>) => {
    const {isOpen, variant, rounded, floatPlacement} = useContext(DropdownContext);

    return (
        isOpen?
        <div className={clsx(
            "list-wrapper",
            {
                "float-right":floatPlacement === 'right',
                "float-center":floatPlacement === 'center'
            }
        )}>
            <div className="list-gap"></div>
            <div className={clsx(
                "list",
                {  
                    "outline":!variant || variant === 'outline',
                    "minimal": variant === 'minimal',
                    "fill": variant === 'fill',
                    "three-d": variant === 'three-d',
                    [`rounded-${rounded}`]: rounded,
                },
                className,
                )} role="list" aria-orientation="vertical" aria-labelledby="options-menu">
                {children}
            </div>
        </div>
        :
        null
    );
}

export default Items;