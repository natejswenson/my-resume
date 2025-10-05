import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../skills';
import { mockResumeData } from '../../test-utils/mock-data';

describe('Skills Component - Visual Redesign', () => {
  it('renders without crashing', () => {
    render(<Skills resumeData={mockResumeData} />);
  });

  it('renders all 5 skill categories', () => {
    render(<Skills resumeData={mockResumeData} />);
    expect(screen.getByText('AI / LLM')).toBeInTheDocument();
    expect(screen.getByText('DevOps')).toBeInTheDocument();
    expect(screen.getByText('Cloud')).toBeInTheDocument();
    expect(screen.getByText('Automation')).toBeInTheDocument();
    expect(screen.getByText('CI/CD')).toBeInTheDocument();
  });

  it('displays 5 skill cards with icons and labels', () => {
    render(<Skills resumeData={mockResumeData} />);
    const skillCards = document.querySelectorAll('.skill-card');
    expect(skillCards.length).toBe(5);
  });

  it('renders with illustrative icon containers', () => {
    render(<Skills resumeData={mockResumeData} />);
    const iconContainers = document.querySelectorAll('.icon-container');
    expect(iconContainers.length).toBe(5);
  });

  it('displays icons for each skill', () => {
    render(<Skills resumeData={mockResumeData} />);
    const skillIcons = document.querySelectorAll('.skill-icon');
    expect(skillIcons.length).toBeGreaterThan(0);
  });

  it('skill cards are in a responsive grid layout', () => {
    render(<Skills resumeData={mockResumeData} />);
    const skillsGrid = document.querySelector('.skills-grid');
    expect(skillsGrid).toBeInTheDocument();
  });

  it('icons have proper alt text', () => {
    render(<Skills resumeData={mockResumeData} />);
    const icons = document.querySelectorAll('.skill-icon');
    icons.forEach(icon => {
      expect(icon).toHaveAttribute('alt');
    });
  });

  it('skill cards are keyboard accessible', () => {
    render(<Skills resumeData={mockResumeData} />);
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
      expect(card).toHaveAttribute('tabIndex', '0');
    });
  });

  it('section heading is prominent and centered', () => {
    render(<Skills resumeData={mockResumeData} />);
    const heading = screen.getByText(/Core Skills/i);
    expect(heading).toBeInTheDocument();
    expect(heading.className).toContain('section-heading');
  });

  it('renders within #skills section', () => {
    render(<Skills resumeData={mockResumeData} />);
    const section = document.querySelector('#skills');
    expect(section).toBeInTheDocument();
  });

  it('skills data comes from resumeData prop', () => {
    const customData = {
      skills: [
        {
          name: 'Test Skill',
          category: 'core',
          icon: { type: 'svg', path: '/test.svg' },
          description: 'Test description'
        }
      ]
    };
    render(<Skills resumeData={customData} />);
    expect(screen.getByText('Test Skill')).toBeInTheDocument();
  });

  it('displays skill descriptions when provided', () => {
    render(<Skills resumeData={mockResumeData} />);
    const descriptions = document.querySelectorAll('.skill-description');
    expect(descriptions.length).toBeGreaterThan(0);
  });

  it('renders SVG icons correctly', () => {
    render(<Skills resumeData={mockResumeData} />);
    const svgIcons = document.querySelectorAll('.skill-icon');
    expect(svgIcons.length).toBeGreaterThan(0);
  });

  it('handles missing icon gracefully', () => {
    const dataWithoutIcon = {
      skills: [
        { name: 'No Icon Skill', category: 'core', description: 'Test' }
      ]
    };
    render(<Skills resumeData={dataWithoutIcon} />);
    expect(screen.getByText('No Icon Skill')).toBeInTheDocument();
  });

  it('applies skill-card class for styling', () => {
    render(<Skills resumeData={mockResumeData} />);
    const firstCard = document.querySelector('.skill-card');
    expect(firstCard).toBeInTheDocument();
    expect(firstCard.className).toContain('skill-card');
  });
});
