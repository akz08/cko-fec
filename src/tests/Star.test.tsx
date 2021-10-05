import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Star from '../components/Star';

describe('Star component', () => {
  test('renders a star', () => {
    render(<Star />);
    const star = screen.getByLabelText(/rating star/i);

    expect(star).toBeTruthy();
  });

  test('applies ratingStar className by default', () => {
    render(<Star />);
    const star = screen.getByLabelText(/rating star/i);

    expect(star).toHaveClass('ratingStar');
  });

  test('applies ratingStar-selected className when selected', () => {
    render(<Star selected={true} />);
    const star = screen.getByLabelText(/rating star/i);

    expect(star).toHaveClass('ratingStar-selected');
  });

  test('calls onSelect fn when clicked', () => {
    const stub = jest.fn();
    render(<Star onSelect={stub} />);
    const star = screen.getByLabelText(/rating star/i);

    fireEvent.click(star);

    expect(stub).toHaveBeenCalled();
  });
});
