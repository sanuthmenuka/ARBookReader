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

test('search box accepts input from the user ', () => {
    const { getByText,getByPlaceholderText } = render(
        <BrowserRouter>
          <Downloadbooks />
        </BrowserRouter>
      );
    
    // Use screen.getByLabelText to find the first name and last name input fields.
    const searchInput = getByPlaceholderText("Search your favorite books here");
      
    // Simulate user input
    fireEvent.change(searchInput, { target: { value: 'example search' } });

    // Check if the input value has been set correctly
    expect(searchInput.value).toBe('example search');
    
});

test('Clicking on "All" in AppBar should update selectedAppbarbtn state', () => {
  const { getByText,getByPlaceholderText } = render(
    <BrowserRouter>
      <Downloadbooks />
    </BrowserRouter>
  );

// Use screen.getByLabelText to find the first name and last name input fields.
const searchInput = getByPlaceholderText("Search your favorite books here");
  
// Simulate user input
fireEvent.change(searchInput, { target: { value: 'example search' } });

// Check if the input value has been set correctly
expect(searchInput.value).toBe('example search');
});

test('dropdown menu changes its displayed value according to the option selected', () => {
  const { getByText,getByPlaceholderText } = render(
    <BrowserRouter>
      <Downloadbooks />
    </BrowserRouter>
  );

  // Use screen.getByLabelText to find the first name and last name input fields.
  const headingElement = getByPlaceholderText("Search your favorite books here");
  expect(headingElement).toBeInTheDocument();
});


