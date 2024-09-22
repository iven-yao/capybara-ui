import React, { PropsWithChildren } from "react";
import { ContainerProps } from "./ContainerProps";
import BasicContainer from "./BasicContainer";
import "./Container.scss";
import NebulaContainer from "./NebulaContainer";

const Container = (props:PropsWithChildren<ContainerProps>) => {
    const {
        className,
        style,
        id,
        testid,
        darkMode,
        children,
        background,
    } = {...props};

    if(background === 'nebula') {
        return <NebulaContainer {...props}/>
    }

    return (
        <BasicContainer {...props}/>
    );
}

export default Container;