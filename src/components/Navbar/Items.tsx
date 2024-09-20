import React, { PropsWithChildren } from "react";
import { ItemsProps } from "./NavbarProps";
import clsx from "clsx";

const Items = (props:PropsWithChildren<ItemsProps>) => {

    const {children, justify} = {...props};

    return (
        <div className={clsx(
            "navbar-items",
            {
                [`justify-${justify}`]:justify
            }
        )}>
            {children}
        </div>
    );
}

export default Items;