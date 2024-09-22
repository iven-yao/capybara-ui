import React from "react";
import { SelectProps } from "./SelectProps";
import './Select.scss';
declare const Select: {
    (props: SelectProps): React.JSX.Element;
    Option: ({ option, className, style, filterString }: import("./SelectProps").SelectOptionProps) => React.JSX.Element;
};
export default Select;
