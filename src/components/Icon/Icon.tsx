import React from "react";
import {iconRecords, iconNames} from "./IconRecords";

type IconProps = {
    name: iconNames,
}

const Icon = (props:IconProps) => {
    const {name} = {...props};

    const IconComponent = iconRecords[name];

    return IconComponent ? 
        <IconComponent />
        :
        null
}

export default Icon;