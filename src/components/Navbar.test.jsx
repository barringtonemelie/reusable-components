import { describe, it, expect } from "vitest";
import { 
    render,
    screen,
    fireEvent, 
    waitFor,
} from '@testing-library/react';
import Navbar from './Navbar';

//Testar egentligen samma sak på två olika sätt och ger lite olika information...

describe('Navbar tests', () => {
    it('Renders a navbar with three menu items', () => {
        const menuItems = ["Home", "About", "Contact"];
        render(<Navbar menuItems={menuItems} />);
        const menuItemsElements = screen.getAllByRole('listitem');
        expect(menuItemsElements).toHaveLength(3);
    });

    it('Renders a navbar with li menu items', () => {
        const menuItems = ["Home", "About", "Contact"];
        render(<Navbar menuItems={menuItems} />);
        screen.debug();
    });
});

