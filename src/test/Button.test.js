import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BackButton from '../components/BackButton';

test('Clicking the BackButton should navigate to the home page', () => {
  render(
    <BrowserRouter>
      <BackButton />
    </BrowserRouter>,
  );

  const link = screen.getByRole('link', { name: '' });

  fireEvent.click(link);

  expect(window.location.pathname).toBe('/');
});
