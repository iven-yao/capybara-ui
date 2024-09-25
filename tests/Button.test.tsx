import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {Button} from "../src/";

describe('Button Component', () => {
    it('Render button with correct text', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button', {name: /click me/i})).toBeDefined();
    });

    it('Render button with correct default className', () => {
        // default button
        const {container} = render(<Button>default</Button>);
        expect(container.firstChild).toHaveClass('capybara-button','outline','size-md','rounded-sm');
    });

    it('Render button with correct size className', () => {
        render(
            <>
                <Button size="xs" testid='xs-btn'>xs</Button>
                <Button size="sm" testid='sm-btn'>sm</Button>
                <Button size="md" testid='md-btn'>md</Button>
                <Button size="lg" testid='lg-btn'>lg</Button>
                <Button size="xl" testid='xl-btn'>xl</Button>
            </>);
        expect(screen.getByTestId('xs-btn')).toHaveClass('size-xs');
        expect(screen.getByTestId('sm-btn')).toHaveClass('size-sm');
        expect(screen.getByTestId('md-btn')).toHaveClass('size-md');
        expect(screen.getByTestId('lg-btn')).toHaveClass('size-lg');
        expect(screen.getByTestId('xl-btn')).toHaveClass('size-xl');
    });

    it('Render button with correct radius className', () => {
        render(
            <>
                <Button rounded="pill" testid='pill-btn'>xs</Button>
                <Button rounded="sm" testid='sm-btn'>sm</Button>
                <Button rounded="md" testid='md-btn'>md</Button>
                <Button rounded="lg" testid='lg-btn'>lg</Button>
                <Button rounded="circle" testid='circle-btn'>xl</Button>
            </>);
        expect(screen.getByTestId('pill-btn')).toHaveClass('rounded-pill');
        expect(screen.getByTestId('sm-btn')).toHaveClass('rounded-sm');
        expect(screen.getByTestId('md-btn')).toHaveClass('rounded-md');
        expect(screen.getByTestId('lg-btn')).toHaveClass('rounded-lg');
        expect(screen.getByTestId('circle-btn')).toHaveClass('rounded-circle');
    });
    
    it('Render button with css color variables', () => {
        render(<Button>default</Button>);
        const element = screen.getByRole('button', {name: 'default'});
        expect(element.style.cssText).contain('--btnColor:');
        expect(element.style.cssText).contain('--btnColorRGB:');
        expect(element.style.cssText).contain('--textColor:');
    });
});