import { createContext } from "react";
import { SelectShared } from "./SelectProps";

export const SelectContext = createContext<SelectShared>({} as SelectShared);