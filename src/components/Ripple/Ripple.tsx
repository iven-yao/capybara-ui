import React, { useLayoutEffect, useState } from "react";
import './Ripple.scss';
import { hexToRGB } from "../../utils/colorHelper";

const useDebouncedRippleCleanUp = (rippleCount:number, duration:number, callBack:()=>void) => {
    useLayoutEffect(() => {
        let timeoutId:NodeJS.Timeout = {} as NodeJS.Timeout;
        if(rippleCount > 0) {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                callBack();
                clearTimeout(timeoutId);
            }, duration*4);
        }

        return () => clearTimeout(timeoutId);
    },[rippleCount, duration, callBack])
}

type rippleType = {x:number, y:number, size:number};

const Ripple = ({duration=1500, color}:{duration?:number, color?:string}) => {
    const [rippleArray, setRippleArray] = useState<Array<rippleType>>([]);

    useDebouncedRippleCleanUp(rippleArray.length, duration, () => {setRippleArray([])});

    const addRipple = (event:React.MouseEvent<HTMLDivElement>) => {
        const container = event.currentTarget.getBoundingClientRect();
        const size = container.width > container.height ? container.width : container.height;
        const x = event.pageX - container.x - size / 2;
        const y = event.pageY - container.y - size / 2;
        const newRipple = {
            x,
            y,
            size
        }

        setRippleArray([...rippleArray, newRipple]);
    };

    return (
        <div className="capybara-ripple" onMouseDown={addRipple}>
            {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => 
                    <span 
                        key={`span${index}`}
                        style={{
                            animationDuration:`${duration}ms`, 
                            top:ripple.y, 
                            left:ripple.x, 
                            width:ripple.size, 
                            height:ripple.size,
                            "--rippleColor": hexToRGB(color || 'white').join(','),
                        }}
                    />
                )
            }
        </div>
    );

}

export default Ripple;