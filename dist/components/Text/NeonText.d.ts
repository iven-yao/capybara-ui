import React, { PropsWithChildren } from "react";
import { NeonTextProps } from "./TextProps";
import './Text.scss';
declare const NeonText: (props: PropsWithChildren<NeonTextProps>) => React.JSX.Element;
export default NeonText;
