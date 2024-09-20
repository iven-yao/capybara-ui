import { componentBasics } from "../../types/propTypes"

export type NavbarShared = {
    color:string,
    height:number|string,
}

export type NavbarProps = componentBasics & {
    position?:'static'|'fixed'|'sticky'
    color?:string,
    height?:number|string
}

export type LogoProps = componentBasics & {
    src?:string,
    circle?:boolean
}

export type ItemsProps = componentBasics & {
    justify?:'center'|'start'|'end';
}
