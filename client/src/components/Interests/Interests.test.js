import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Interests from './Interests';

describe('<Interests />', () => {
  test('it should mount', () => {
    render(<Interests />);
    
    const interests = screen.getByTestId('Interests');

    expect(interests).toBeInTheDocument();
  });
});