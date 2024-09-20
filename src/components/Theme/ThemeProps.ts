import { componentBasics } from "../../types/propTypes"

export type ThemeShared = {
    primaryColor: string,
    secondaryColor: string,
    lightBackgroundColor: string,
    lightTextColor: string,
    darkBackgroundColor: string,
    darkTextColor: string
}

export type ThemeProps = componentBasics & {
    primaryColor?: string,
    secondaryColor?: string,
    lightBackgroundColor?: string,
    lightTextColor?: string,
    darkBackgroundColor?: string,
    darkTextColor?: string
}