import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock(
  './components/TrendGraph',
  () =>
    function MockTrendGraph() {
      return <div>mock</div>;
    }
);

describe('App component', () => {
  test('renders h1 element', () => {
    render(<App />);
    const h1Element = screen.getByText(/customer feedback/i);
    expect(h1Element).toBeInTheDocument();
  });
});
