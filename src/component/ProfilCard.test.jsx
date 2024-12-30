import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {
  const mockProps = {
    title: 'John Doe',
    handle: '@johndoe',
    image: 'https://via.placeholder.com/150',
    description: 'This is a sample description.',
  };

  test('renders the title', () => {
    render(<ProfileCard {...mockProps} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  test('renders the handle', () => {
    render(<ProfileCard {...mockProps} />);
    expect(screen.getByText('@johndoe')).toBeInTheDocument();
  });

  test('renders the description', () => {
    render(<ProfileCard {...mockProps} />);
    expect(screen.getByText('This is a sample description.')).toBeInTheDocument();
  });

  test('renders the image with correct src and alt', () => {
    render(<ProfileCard {...mockProps} />);
    const image = screen.getByAltText('pda logo');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProps.image);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<ProfileCard {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
