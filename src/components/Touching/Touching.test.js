import { render, screen } from '@testing-library/react';
import Touching from './Touching';

test('renders learn react link', () => {
  render(<Touching />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
