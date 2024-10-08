import React from "react";
import { CheckboxProps } from "./CheckboxProps";
import './Checkbox.scss';
declare const Checkbox: ({ className, style, id, onChange, checked, disabled, color, label, darkMode }: CheckboxProps) => React.JSX.Element;
export default Checkbox;
