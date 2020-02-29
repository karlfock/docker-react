import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders I was changed', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/I was changed/i);
  expect(linkElement).toBeInTheDocument();
});

