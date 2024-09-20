import { componentBasics, orientation, radioVariant } from "../../types/propTypes";
import { option } from "../Select/SelectProps";

export type RadioGroupShared = {
    selectedValue: string | undefined,
    setSelectedValue: React.Dispatch<React.SetStateAction<string|undefined>>,
    name: string,
    disabled: boolean,
    variant: radioVariant
}

export type RadioGroupProps = componentBasics & {
    color?: string,
    size?: string,
    name: string,
    disabled?: boolean,
    // current selected value
    value?: string,
    onChange?: (value: string) => void,
    orientation?: orientation,
    options?:option[]
    variant?: radioVariant
}

export type RadioButtonProps = componentBasics & {
    value: string,
    label: string,
    disabled?: boolean,
}
