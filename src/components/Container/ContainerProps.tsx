import { componentBasics } from "../../types/propTypes";

export type ContainerProps = componentBasics & {
    darkMode?: boolean
    background?: "nebula",
    // for nebula
    color1?: string,
    color2?: string,
}

export type NebulaContainerProps = componentBasics & {
    color1?: string, 
    color2?: string,
    darkMode?: boolean
}