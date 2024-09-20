import React, { PropsWithChildren, useContext } from "react";
import { LogoProps } from "./NavbarProps";
import { NavbarContext } from "./NavbarContext";
import clsx from "clsx";

const Logo = ({
    children,
    src,
    circle
}:PropsWithChildren<LogoProps>) => {

    const {height} = useContext(NavbarContext);

    return (
        <div 
            className={clsx(
                "navbar-logo",
                {
                    "circle":circle
                }
        )}>
            <a href="/" style={{fontSize:`${typeof height === 'number'? `${height/2}px`: `${parseInt(height)/2}px`}`}}>
                {src &&
                    <img src={src} alt="logo" height={height}/>
                }
                {children}
            </a>
        </div>
    );
}

export default Logo;