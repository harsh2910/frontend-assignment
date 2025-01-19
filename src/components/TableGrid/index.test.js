import React from 'react';
import { render, screen } from '@testing-library/react';
import TableGrid from './index';
test('renders table with data', () => {
  const displayData = [
    {
        "s.no": 0,
        "amt.pledged": 15823,
        "percentage.funded": 186,
    },
    {
        "s.no": 1,
        "amt.pledged": 6859,
        "percentage.funded": 8,
    }
  ];

  render(<TableGrid displayData={displayData} />);

  expect(screen.getByText('0')).toBeInTheDocument();
  expect(screen.getByText('15823')).toBeInTheDocument();
  expect(screen.getByText('186')).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('6859')).toBeInTheDocument();
  expect(screen.getByText('8')).toBeInTheDocument();
});