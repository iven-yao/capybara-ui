import React from "react";
import './Ripple.scss';
declare const Ripple: ({ duration, color }: {
    duration?: number;
    color?: string;
}) => React.JSX.Element;
export default Ripple;
