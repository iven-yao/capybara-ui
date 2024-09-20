import { createContext } from "react";
import { NavbarShared } from "./NavbarProps";

export const NavbarContext = createContext<NavbarShared>({
    color: 'white',
    height: 50
});