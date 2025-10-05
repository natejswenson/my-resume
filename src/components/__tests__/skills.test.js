import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../skills';

// Skills component uses resume.json directly
describe('Skills Component', () => {
  it('renders without crashing', () => {
    render(<Skills />);
  });

  it('displays skills with progress bars', () => {
    render(<Skills />);
    const progressBars = document.querySelectorAll('.ui.progress');
    expect(progressBars.length).toBeGreaterThan(0);
  });

  it('renders skill names', () => {
    render(<Skills />);
    // Check for some skills from resume.json
    expect(screen.getByText(/DevOps/i) || screen.getByText(/CICD/i)).toBeInTheDocument();
  });

  it('applies correct color themes', () => {
    render(<Skills />);
    const progressBars = document.querySelectorAll('.ui.progress');

    // Check that progress bars have color classes
    progressBars.forEach(bar => {
      expect(bar.className).toMatch(/teal|green|orange|blue/);
    });
  });

  it('displays percentage values', () => {
    render(<Skills />);
    const progressBars = document.querySelectorAll('.ui.progress');

    progressBars.forEach(bar => {
      expect(bar).toHaveAttribute('data-percent');
    });
  });
});
