import React, { PropsWithChildren } from "react";
import { DropdownProps } from "./DropdownProps";
import './Dropdown.scss';
declare const Dropdown: {
    (props: PropsWithChildren<DropdownProps>): React.JSX.Element;
    Button: (props: PropsWithChildren<import("./DropdownProps").DropdownButtonProps>) => React.JSX.Element;
    Items: ({ children, className, }: PropsWithChildren<import("../../types/propTypes").componentBasics>) => React.JSX.Element | null;
    Item: ({ children, className, onClick }: PropsWithChildren<import("./DropdownProps").ItemProps>) => React.JSX.Element;
};
export default Dropdown;
