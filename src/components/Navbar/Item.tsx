import React from "react";
import { PropsWithChildren } from "react";

const Item = (props:PropsWithChildren) => {

    const {children} = {...props};

    return (
        <div className="navbar-item">
            {children}
        </div>
    );
}

export default Item;