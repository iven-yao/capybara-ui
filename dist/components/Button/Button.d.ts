import React, { PropsWithChildren } from "react";
import { ButtonProps } from "./ButtonProps";
import './Button.scss';
declare const Button: (props: PropsWithChildren<ButtonProps>) => React.JSX.Element;
export default Button;
