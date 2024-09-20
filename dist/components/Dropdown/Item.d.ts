import React, { PropsWithChildren } from "react";
import { ItemProps } from "./DropdownProps";
declare const Item: ({ children, className, onClick }: PropsWithChildren<ItemProps>) => React.JSX.Element;
export default Item;
