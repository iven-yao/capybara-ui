import { createContext } from "react";
import { RadioGroupShared } from "./RadioProps";

export const RadioGroupContext = createContext<RadioGroupShared>({
    selectedValue: undefined,
    setSelectedValue: (function (): void {
        throw new Error("Function not implemented.");
    }),
    name: "",
    disabled: false,
    variant: "circle"
});