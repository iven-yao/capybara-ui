import { componentBasics } from "../../types/propTypes";
export type FlexProps = componentBasics & {
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    wrap?: "wrap" | "nowrap" | "wrap-reverse";
    gap?: string;
    justifyContent?: "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly";
    justifyItems?: "stretch" | "center" | "start" | "end";
    alignContent?: "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "stretch" | "center" | "start" | "end";
};
