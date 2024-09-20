import { componentBasics } from "../../types/propTypes";
export type SelectShared = {
    selectedOption: option | Array<option> | undefined | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<option | option[] | undefined | null>>;
    multiple: boolean;
};
export type SelectProps = componentBasics & {
    value?: string | string[] | null;
    onChange?: (value: string | string[] | null) => void;
    placeholder?: string;
    disabled?: boolean;
    multiple?: boolean;
    searchable?: boolean;
    clearBtn?: boolean;
    width?: number | string;
    color?: string;
    options: Array<option>;
};
export type option = {
    label: string;
    value: string;
};
export type SelectOptionProps = componentBasics & {
    option: option;
    disabled?: boolean;
};
export type SelectMultipleButtonProps = componentBasics & {
    option: option;
};
