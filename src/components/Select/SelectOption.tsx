import React, { useContext } from "react";
import { SelectOptionProps } from "./SelectProps";
import { SelectContext } from "./SelectContext";
import clsx from "clsx";

const SelectOption = ({
    option,
    className,
    style
}:SelectOptionProps) => {
    
    const {selectedOption, setSelectedOption, multiple} = useContext(SelectContext);

    const handleClick = () => {
        if(multiple) {
            if(Array.isArray(selectedOption) && selectedOption.some(o => o.value == option.value)) {
                // remove
                setSelectedOption(selectedOption.filter(o => o.value !== option.value));
            } else {
                // append
                if(Array.isArray(selectedOption)) {
                    setSelectedOption([...selectedOption, option]);
                } else {
                    setSelectedOption([option]);
                }
            }   
        } else {
            setSelectedOption(option);
        }
    }

    return(
        <div 
        className={clsx(
            "option",
            className
        )}
        style={style}
        onClick={handleClick}
        >
            {option.label}
        </div>
    );
}

export default SelectOption;