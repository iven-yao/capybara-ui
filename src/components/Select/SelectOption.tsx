import React, { useContext, useEffect } from "react";
import { SelectOptionProps } from "./SelectProps";
import { SelectContext } from "./SelectContext";
import clsx from "clsx";

const SelectOption = ({
    option,
    className,
    style,
    filterString
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

    const labelStyledWithFilterStr = (filter: string|undefined, label: string) => {
        if(!filter) return label;

        const index = label.toLowerCase().indexOf(filter.toLowerCase());

        return (
            <>
                {label.substring(0, index)}
                <b>{label.substring(index, index + filter.length)}</b>
                {label.substring(index+filter.length, label.length)}
            </>
        )
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
            {labelStyledWithFilterStr(filterString, option.label)}
        </div>
    );
}

export default SelectOption;