import { describe, it, expect, vi } from "vitest";
import { 
    render,
    screen,
    fireEvent, 
    waitFor,
} from '@testing-library/react';
import Button from './Button';

//Testade knappen också för skojs skull 

describe('Button tests', () => {
    it('Renders a button with text', () => {
        const onClick = vi.fn();
        render(<Button innerText="Click me" onClick={onClick} />);
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('Click me');
    });

    it('Renders a button that when clicked calls the onClick function', () => {
        const onClick = vi.fn();
        render(<Button innerText="Click me" onClick={onClick} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
     });

});