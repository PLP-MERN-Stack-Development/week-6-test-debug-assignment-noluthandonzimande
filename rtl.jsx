import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders MyComponent text', () => {
  render(<MyComponent />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
