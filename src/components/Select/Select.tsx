import React, { useContext, useEffect, useState } from "react";
import { option, SelectProps } from "./SelectProps";
import { SelectContext } from "./SelectContext";
import './Select.scss';
import clsx from "clsx";
import Icon from "../Icon/Icon";
import SelectOption from "./SelectOption";
import SelectMultipleButton from "./SelectMultipleButton";
import { contrastTextColor, hexToRGB } from "../../utils/colorHelper";
import ThemeContext from "../Theme/ThemeContext";

const Select = (props:SelectProps) => {
    const {
        options,
        value,
        width,
        color,
        placeholder="Choose...",
        onChange,
        disabled=false,
        multiple=false,
        searchable=false,
        clearBtn=true,
        className,
        style,
    } = {...props}

    const { primaryColor } = useContext(ThemeContext);

    const [selectedOption, setSelectedOption] = useState<option|Array<option>|null>();
    const [isOpen, setIsOpen] = useState(false);
    const [filterString, setFilterString] = useState('');
    const [internalId] = useState(crypto.randomUUID());

    useEffect(() => {
        const handleClickOutside = (e:MouseEvent) => {
            let target = e.target as Element;
            while(target.parentElement != null && !target.classList.contains('capybara-select')) {
                target = target.parentElement;
            }

            if(!target.classList.contains(internalId)) {
                setIsOpen(false);
            }
        }

        window.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    useEffect(() => {
        const option = options.filter(o => {
            if(Array.isArray(value)) {
                return value.includes(o.value);
            } else {
                return o.value === value;
            }
        });
        if(multiple) {
            if(option) {
                setSelectedOption(option);
            } else {
                setSelectedOption([]);
            }
        } else {
            if(option.length === 0) {
                setSelectedOption(null);
            } else {
                setSelectedOption(option[0]);
            }
        }
    },[value, multiple]);
    
    useEffect(() => {
        if(onChange) {
            if(selectedOption !== undefined) {
                if(Array.isArray(selectedOption)) {
                    if(selectedOption.length > 0) {
                        onChange(selectedOption.map(o => o.value));
                    } else {
                        onChange(null);
                    }
                } else {
                    onChange(selectedOption?.value || null);
                }
            }
        }
        setFilterString('');
    },[selectedOption]);

    const handleClearSelect = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setSelectedOption(null); 
    }

    return (
        <SelectContext.Provider value={{selectedOption, setSelectedOption, multiple}}>
            <div 
                className={clsx(
                    "capybara-select",
                    internalId,
                    {
                        "active":isOpen,
                        "disabled":disabled,
                    },
                    className
                )} 
                style={{
                    "--selectColor": color || primaryColor,
                    "--selectColorRGB": hexToRGB(color || primaryColor).join(','),
                    "--textColor": contrastTextColor(color || primaryColor),
                    width: typeof width === 'number'? `${width}px`:width,
                    ...style
                }}
                onClick={() => {
                    if(!disabled) setIsOpen(!isOpen);
                }}
            >
                <div className={clsx(
                    "selected-value",
                    {
                        "multiple": multiple
                    }
                )}>
                    {!selectedOption || (Array.isArray(selectedOption) && selectedOption.length === 0)?
                        searchable && !disabled?
                            <input 
                                type="text" 
                                placeholder={placeholder} 
                                disabled={disabled}
                                onChange={e => setFilterString(e.target.value)} 
                                style={{
                                    border:'none', 
                                    outline:'none', 
                                    backgroundColor:'transparent', 
                                    width:'100%',
                                }}
                            />
                            :
                            <div className="placeholder">{placeholder}</div>
                        :
                        Array.isArray(selectedOption)?
                            <>
                                <div className="value-wrapper">{selectedOption.map(o => <SelectMultipleButton option={o} key={`key_${o.value}`}/>)}</div>
                                {clearBtn && <div className="icon-wrapper" onClick={handleClearSelect} title="Clear All"><Icon name="close"/></div>}
                            </>
                            :
                            <>
                                <div className="value-wrapper">{selectedOption.label}</div>
                                {clearBtn && <div className="icon-wrapper" onClick={handleClearSelect} title="Clear"><Icon name="close"/></div>}
                            </>
                    }
                </div>
                <div className="select-dropdown-icon">
                    <Icon name="chevron-down"/>
                </div>
                <div className={clsx(
                    "capybara-options",
                )}
                    hidden={!isOpen}
                >
                    {options.filter(o => o.label.indexOf(filterString) != -1).map(o => <SelectOption option={o} key={`${o.label}_${o.value}`}/>)}
                </div>
            </div>
        </SelectContext.Provider>
    );
}

Select.Option = SelectOption;

export default Select;