import React, { PropsWithChildren } from "react";
import { NavbarProps } from "./NavbarProps";
import './Navbar.scss';
declare const Navbar: {
    (props: PropsWithChildren<NavbarProps>): React.JSX.Element;
    Logo: ({ children, src, circle }: PropsWithChildren<import("./NavbarProps").LogoProps>) => React.JSX.Element;
    Items: (props: PropsWithChildren<import("./NavbarProps").ItemsProps>) => React.JSX.Element;
    Item: (props: PropsWithChildren) => React.JSX.Element;
};
export default Navbar;
