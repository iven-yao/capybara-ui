import { componentBasics } from "../../types/propTypes"

export type ThemeShared = {
    primaryColor: string,
    secondaryColor: string,
    lightBackgroundColor: string,
    lightTextColor: string,
    lightBorderColor: string,
    darkBackgroundColor: string,
    darkTextColor: string,
    darkBorderColor: string
}


export type ThemeProps = componentBasics & {
    primaryColor?: string,
    secondaryColor?: string,
    lightBackgroundColor?: string,
    lightTextColor?: string,
    lightBorderColor?: string,
    darkBackgroundColor?: string,
    darkTextColor?: string,
    darkBorderColor?: string
}