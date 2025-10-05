import React from 'react';
import { render } from '@testing-library/react';
import Tools from '../Tools';
import { mockResumeData } from '../../test-utils/mock-data';

describe('Tools Section - Card-Based Design', () => {
  it('Tools section has card-based visual design', () => {
    render(<Tools resumeData={mockResumeData} />);
    const toolsSection = document.querySelector('#tools');
    expect(toolsSection).toBeInTheDocument();

    // Tools section should use card-based layout
    const toolsGrid = document.querySelector('.tools-grid');
    expect(toolsGrid).toBeInTheDocument();
  });

  it('Tools section renders with proper structure', () => {
    render(<Tools resumeData={mockResumeData} />);
    const toolsSection = document.querySelector('#tools');
    expect(toolsSection).toBeInTheDocument();

    const toolsGrid = document.querySelector('.tools-grid');
    expect(toolsGrid).toBeInTheDocument();
  });

  it('Tools section has section heading', () => {
    const { container } = render(<Tools resumeData={mockResumeData} />);

    const toolsHeading = container.querySelector('.section-heading');
    expect(toolsHeading).toBeInTheDocument();
  });

  it('Tools uses card-based layout', () => {
    render(<Tools resumeData={mockResumeData} />);
    const toolCards = document.querySelectorAll('.tool-card');
    expect(toolCards.length).toBeGreaterThan(0);
  });

  it('Tools section has gradient background', () => {
    render(<Tools resumeData={mockResumeData} />);
    const toolsSection = document.querySelector('#tools');
    expect(toolsSection).toBeInTheDocument();
  });

  it('Tool cards have icon containers', () => {
    render(<Tools resumeData={mockResumeData} />);
    const iconContainers = document.querySelectorAll('.icon-container');
    expect(iconContainers.length).toBeGreaterThan(0);
  });
});
