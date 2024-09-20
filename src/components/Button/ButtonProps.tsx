import { MouseEventHandler } from "react";
import { componentBasics, rounded, size, buttonVariant, shape } from "../../types/propTypes";

export type ButtonProps = componentBasics & {
    variant?: buttonVariant,
    color?: string,
    size?: size,
    rounded?: rounded | shape,
    isLoading?: boolean,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    onMouseEnter?: MouseEventHandler<HTMLButtonElement>,
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>
}