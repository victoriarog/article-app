import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders display for no article selected', () => {
  render(<App />);
  const displayElement = screen.getByText(/Select/i);
  expect(displayElement).toBeInTheDocument();
});
