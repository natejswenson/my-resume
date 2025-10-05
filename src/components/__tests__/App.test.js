import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders all main sections', () => {
    render(<App />);

    // Check for main sections by their IDs
    expect(document.querySelector('#home')).toBeInTheDocument();
    expect(document.querySelector('#about')).toBeInTheDocument();
    expect(document.querySelector('#resume')).toBeInTheDocument();
    expect(document.querySelector('#portfolio')).toBeInTheDocument();
    expect(document.querySelector('#testimonials')).toBeInTheDocument();
    expect(document.querySelector('#contact')).toBeInTheDocument();
  });

  it('renders Header component', () => {
    render(<App />);
    expect(document.querySelector('header')).toBeInTheDocument();
  });

  it('renders Footer component', () => {
    render(<App />);
    expect(document.querySelector('footer')).toBeInTheDocument();
  });

  it('loads resume data from JSON file', () => {
    render(<App />);
    // Verify that data is loaded by checking for known content
    expect(screen.getByText(/Nate/i)).toBeInTheDocument();
  });
});
