import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders TableGrid and Pagination components', async () => {
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText(/S.No./i)).toBeInTheDocument();
    expect(screen.getByText(/Percentage funded/i)).toBeInTheDocument();
    expect(screen.getByText(/Amount pledged/i)).toBeInTheDocument();
  });

  expect(screen.getByText(/Previous/i)).toBeInTheDocument();
  expect(screen.getByText(/Next/i)).toBeInTheDocument();
});
