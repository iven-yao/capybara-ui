import { componentBasics, size, switchShape, switchVariant } from "../../types/propTypes";

export type SwitchProps = componentBasics & {
    checked: boolean,
    onChange: (checked:boolean) => void,
    disabled?: boolean,
    label?: string,
    size?: size,
    color?: string,
    width?: number|string,
    toggleSize?: number|string,
    variant?: switchVariant,
    shape?: switchShape
}