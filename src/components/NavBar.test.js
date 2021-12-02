// navBar.test.js
import React from 'react'; 
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import NavBar from './NavBar';

const links = [
    { text: 'Home', location: "/" },
    { text: 'Club Rush', location: "/" },
    { text: 'Bookmarks', location: "/club" },
];

test.each(links)(
    "Check if Nav Bar have %s link.",
    (link) => {
      render(<NavBar />);
      //Ensure the text is in the dom, will throw error it can't find
      const linkDom = screen.getByText(link.text); 
          
      //use jest assertion to verify the link property
      expect(linkDom).toHaveAttribute("href", link.location);
    }
);

test('render about link', () => {
  render(<NavBar />);
  expect(screen.getByText(/Home/)).toBeInTheDocument();
})