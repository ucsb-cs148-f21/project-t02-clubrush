// src/App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders Home Link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});