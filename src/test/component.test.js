import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchField from '../components/SearchField';

test('SearchField should call the onSearch function when the input changes', () => {
  const mockOnSearch = jest.fn();
  render(<SearchField onSearch={mockOnSearch} />);

  const inputElement = screen.getByPlaceholderText('Seach by team name');

  fireEvent.change(inputElement, { target: { value: 'BostonCeltics' } });

  expect(mockOnSearch).toHaveBeenCalledWith('BostonCeltics');
});
