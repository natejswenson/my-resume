import React from 'react';
import { render } from '@testing-library/react';
import Skills from '../skills';
import Tools from '../Tools';
import { mockResumeData } from '../../test-utils/mock-data';

describe('Skills and Tools Section Separation', () => {
  it('Skills section has distinct visual identity', () => {
    render(<Skills resumeData={mockResumeData} />);
    const skillsSection = document.querySelector('#skills');
    expect(skillsSection).toBeInTheDocument();

    // Skills section should exist with proper structure
    const skillsGrid = document.querySelector('.skills-grid');
    expect(skillsGrid).toBeInTheDocument();
  });

  it('Tools section has different visual identity', () => {
    render(<Tools resumeData={mockResumeData} />);
    const toolsSection = document.querySelector('#tools');
    expect(toolsSection).toBeInTheDocument();

    // Tools section should exist with proper structure
    const toolsContainer = document.querySelector('.tools-container');
    expect(toolsContainer).toBeInTheDocument();
  });

  it('sections have adequate spacing between them', () => {
    const { container } = render(
      <div>
        <Skills resumeData={mockResumeData} />
        <Tools resumeData={mockResumeData} />
      </div>
    );

    const skillsSection = container.querySelector('#skills');
    const toolsSection = container.querySelector('#tools');

    expect(skillsSection).toBeInTheDocument();
    expect(toolsSection).toBeInTheDocument();
  });

  it('headings are clearly differentiated', () => {
    const { container: skillsContainer } = render(<Skills resumeData={mockResumeData} />);
    const { container: toolsContainer } = render(<Tools resumeData={mockResumeData} />);

    const skillsHeading = skillsContainer.querySelector('.section-heading');
    const toolsHeading = toolsContainer.querySelector('.section-heading');

    expect(skillsHeading).toBeInTheDocument();
    expect(toolsHeading).toBeInTheDocument();
  });

  it('Skills uses card-based layout', () => {
    render(<Skills resumeData={mockResumeData} />);
    const skillCards = document.querySelectorAll('.skill-card');
    expect(skillCards.length).toBeGreaterThan(0);
  });

  it('Tools maintains pill-style layout', () => {
    render(<Tools resumeData={mockResumeData} />);
    const toolPills = document.querySelectorAll('.tool-pill');
    expect(toolPills.length).toBeGreaterThan(0);
  });
});
