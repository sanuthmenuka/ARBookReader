import React from 'react';
import Header from './pages/Header';
import { render, screen,fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import userEvent from '@testing-library/user-event'

import { MemoryRouter, BrowserRouter } from "react-router-dom";
import Downloadbooks from './pages/Downloadbooks';

test('displays search books heading', () => {
    const { getByText } = render(
        <BrowserRouter>
          <Downloadbooks />
        </BrowserRouter>
      );
    
      // Use screen.getByLabelText to find the first name and last name input fields.
      const headingElement = getByText(/Search Books/i);
      expect(headingElement).toBeInTheDocument();
    
});


test('displays input field to search books ', () => {
    const { getByText,getByPlaceholderText } = render(
        <BrowserRouter>
          <Downloadbooks />
        </BrowserRouter>
      );
    
      // Use screen.getByLabelText to find the first name and last name input fields.
      const headingElement = getByPlaceholderText("Search your favorite books here");
      expect(headingElement).toBeInTheDocument();
    
});



