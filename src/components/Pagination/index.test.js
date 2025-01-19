import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './index';

test('renders pagination buttons and handles page change', () => {
  const handlePageChange = jest.fn();
  render(
    <Pagination
      handlePageChange={handlePageChange}
      currentPage={1}
      totalPages={3}
      pageRangeDisplayed={5}
    />
  );

  expect(screen.getByText(/Previous/i)).toBeInTheDocument();
  expect(screen.getByText(/Next/i)).toBeInTheDocument();
  expect(screen.getByText('1')).toHaveClass('active');
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('3')).toBeInTheDocument();

  fireEvent.click(screen.getByText('2'));
  expect(handlePageChange).toHaveBeenCalledWith(2);
});