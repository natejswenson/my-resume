import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from '../Education';

// Education component uses resume.json directly
describe('Education Component', () => {
  it('renders without crashing', () => {
    render(<Education />);
  });

  it('displays university name', () => {
    render(<Education />);
    // Looking for University of Minnesota-Duluth from updated resume.json
    expect(screen.getByText(/University of Minnesota-Duluth/i)).toBeInTheDocument();
  });

  it('displays specialization', () => {
    render(<Education />);
    expect(screen.getByText(/B.S. Industrial Engineering/i)).toBeInTheDocument();
  });

  it('displays graduation date', () => {
    render(<Education />);
    expect(screen.getByText(/May/i)).toBeInTheDocument();
    expect(screen.getByText(/2010/i)).toBeInTheDocument();
  });

  it('renders graduation cap icon', () => {
    render(<Education />);
    const icon = document.querySelector('.icon.graduation.cap');
    expect(icon).toBeInTheDocument();
  });
});
