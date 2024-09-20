import React, { PropsWithChildren } from "react";
import { RadioGroupProps } from "./RadioProps";
import './Radio.scss';
declare const RadioGroup: {
    (props: PropsWithChildren<RadioGroupProps>): React.JSX.Element;
    Radio: (props: PropsWithChildren<import("./RadioProps").RadioButtonProps>) => React.JSX.Element;
};
export default RadioGroup;
