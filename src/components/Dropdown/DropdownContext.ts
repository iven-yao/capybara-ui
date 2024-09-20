import { createContext} from "react";
import { DropdownShared } from "./DropdownProps";

export const DropdownContext = createContext<DropdownShared>({} as DropdownShared);