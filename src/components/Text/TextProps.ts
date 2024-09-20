import { componentBasics } from "../../types/propTypes";

export type ImageTextProps = componentBasics & {
    src: string,
    fontSize?: number
}

export type NeonTextProps = componentBasics & {
    color?: string,
    fontSize?: number
}