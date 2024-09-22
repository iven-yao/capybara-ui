import React, { PropsWithChildren } from "react";
import { FlexProps } from "./FlexProps";
import clsx from "clsx";
import './Flex.scss';

const Flex = (props: PropsWithChildren<FlexProps>) => {
    const {
        children,
        className,
        style,
        id,
        testid,
        direction = "row",
        wrap = "nowrap",
        gap = "0px",
        alignContent = "start",
        alignItems = "center",
        justifyContent = "start",
        justifyItems = "stretch"
    } = {...props};

    return (
        <div
            className={clsx(
                "capybara-flex",
                className
            )}
            style={{
                "--flexDirection": direction,
                "--flexWrap": wrap,
                "--flexGap": gap,
                "--flexAlignContent": alignContent,
                "--flexAlignItems": alignItems,
                "--flexJustifyContent": justifyContent,
                "--flexJustifyItems": justifyItems,
                ...style
            }}
            id={id}
            data-testid={testid}
        >
            {children}
        </div>
    );
}

export default Flex;