import { 
    IoCheckmark, 
    IoChevronDown, 
    IoChevronUp, 
    IoClose, 
    IoMailOutline, 
    IoMoonOutline, 
    IoRepeat, 
    IoSearch, 
    IoStar, 
    IoStarHalf, 
    IoStarOutline, 
    IoSunnyOutline 
} from "react-icons/io5";
import { IconType } from "react-icons";

export const iconRecords: Record<string, IconType> = {
    "chevron-down": IoChevronDown,
    "chevron-up": IoChevronUp,
    "checkmark": IoCheckmark,
    "close": IoClose,
    "mail": IoMailOutline,
    "moon": IoMoonOutline,
    "repeat": IoRepeat,
    "rotate": IoRepeat,
    "search": IoSearch,
    "star-fill": IoStar,
    "star-half": IoStarHalf,
    "star": IoStarOutline,
    "sun": IoSunnyOutline
} as const;

export type iconNames = 
    "chevron-down" |
    "chevron-up" |
    "checkmark" |
    "close" |
    "mail" |
    "moon" |
    "repeat" |
    "rotate" |
    "search" |
    "star-fill" |
    "star-half" |
    "star" |
    "sun";