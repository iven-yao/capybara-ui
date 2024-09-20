import React from "react";
import { iconNames } from "./IconRecords";
type IconProps = {
    name: iconNames;
};
declare const Icon: (props: IconProps) => React.JSX.Element | null;
export default Icon;
