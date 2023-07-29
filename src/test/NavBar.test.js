import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Navbar from '../components/Navbar';

// Helper function to wrap the component in BrowserRouter for testing NavLink
const renderWithRouter = (component) => render(<HashRouter>{component}</HashRouter>);

describe('Navbar component', () => {
  test('Renders logo and title', () => {
    render(<HashRouter><Navbar /></HashRouter>);
    const logo = screen.getByAltText('logo');
    const title = screen.getByText("Space Traveler's Hub");
    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('Renders all navigation links', () => {
    renderWithRouter(<Navbar />);
    const rocketsLink = screen.getByRole('link', { name: / /i });
    const missionsLink = screen.getByRole('link', { name: /missions/i });
    const dragonsLink = screen.getByRole('link', { name: /dragons/i });
    const profileLink = screen.getByRole('link', { name: /profile/i });
    expect(rocketsLink).toBeInTheDocument();
    expect(missionsLink).toBeInTheDocument();
    expect(dragonsLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });

  test('navigation links have the correct href attribute', () => {
    renderWithRouter(<Navbar />);
    const rocketsLink = screen.getByRole('link', { name: /rockets/i });
    const missionsLink = screen.getByRole('link', { name: /missions/i });
    const dragonsLink = screen.getByRole('link', { name: /dragons/i });
    const profileLink = screen.getByRole('link', { name: /profile/i });
    expect(rocketsLink.getAttribute('href')).toBe('#/');
    expect(missionsLink.getAttribute('href')).toBe('#/missions');
    expect(dragonsLink.getAttribute('href')).toBe('#/dragons');
    expect(profileLink.getAttribute('href')).toBe('#/profile');
  });
});
