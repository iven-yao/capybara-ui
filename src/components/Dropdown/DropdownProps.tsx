import { MouseEventHandler } from "react"
import { componentBasics, size, rounded, buttonVariant } from "../../types/propTypes"

export type DropdownShared = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    color: string,
    variant?:buttonVariant,
    size?: size,
    rounded?: rounded,
    disabled?: boolean,
}

export type DropdownProps = componentBasics & {
    variant?: buttonVariant,
    color?: string,
    size?: size,
    rounded?: rounded,
    disabled?: boolean,
}

export type DropdownButtonProps = componentBasics & {
}

export type ItemProps = componentBasics & {
    onClick: MouseEventHandler<HTMLDivElement>,
}