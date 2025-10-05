import React from 'react';
import { render, screen } from '@testing-library/react';
import Resume from '../Resume';
import { mockResumeData } from '../../test-utils/mock-data';

describe('Resume Component', () => {
  it('renders without crashing', () => {
    render(<Resume resumeData={mockResumeData} />);
  });

  it('renders Education section', () => {
    render(<Resume resumeData={mockResumeData} />);
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  it('renders Experience section', () => {
    render(<Resume resumeData={mockResumeData} />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('renders Skills section', () => {
    render(<Resume resumeData={mockResumeData} />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('uses semantic UI Grid layout', () => {
    render(<Resume resumeData={mockResumeData} />);
    const grid = document.querySelector('.ui.grid');
    expect(grid).toBeInTheDocument();
  });

  it('renders within resume section', () => {
    render(<Resume resumeData={mockResumeData} />);
    const section = document.querySelector('#resume');
    expect(section).toBeInTheDocument();
  });
});
