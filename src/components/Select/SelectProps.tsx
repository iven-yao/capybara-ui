import { componentBasics } from "../../types/propTypes"

export type SelectShared = {
    selectedOption: option|Array<option>|undefined|null,
    setSelectedOption: React.Dispatch<React.SetStateAction<option | option[] | undefined | null>>,
    multiple: boolean
}

export type SelectProps = componentBasics & {
    // value that being selected
    value?: string|string[]|null,
    // callback function when value changes
    onChange?: (value:string|string[]|null) => void,
    // placeholder when no value is selected
    placeholder?: string,
    // identifier to disable the component
    disabled?: boolean,
    // identifier to make multiple selection
    multiple?: boolean,
    // identifier to search options by label
    searchable?:boolean,
    // identifier to show clear selection button
    clearBtn?:boolean,
    // component width
    width?: number|string
    // preset color
    color?: string,
    // option data
    options:Array<option>
}

export type option = {
    label: string,
    value: string,
}

export type SelectOptionProps = componentBasics & {
    option:option,
    disabled?: boolean,
}

export type SelectMultipleButtonProps = componentBasics & {
    option: option
}