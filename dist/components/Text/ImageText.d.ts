import React from "react";
import { PropsWithChildren } from "react";
import { ImageTextProps } from "./TextProps";
import './Text.scss';
declare const ImageText: (props: PropsWithChildren<ImageTextProps>) => React.JSX.Element;
export default ImageText;
