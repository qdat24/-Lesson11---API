import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<DqdApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
