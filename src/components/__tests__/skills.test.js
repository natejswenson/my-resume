import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../skills';
import { mockResumeData } from '../../test-utils/mock-data';

describe('Skills Component Redesign', () => {
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

  it('displays skills as pill-style tags', () => {
    render(<Skills resumeData={mockResumeData} />);
    const skillPills = document.querySelectorAll('.skill-pill');
    expect(skillPills.length).toBe(5);
  });

  it('each skill pill is accessible', () => {
    render(<Skills resumeData={mockResumeData} />);
    const skillPills = document.querySelectorAll('.skill-pill');

    skillPills.forEach(pill => {
      expect(pill).toHaveAttribute('role', 'button');
      expect(pill).toHaveAttribute('tabIndex', '0');
    });
  });

  it('skills section has proper heading', () => {
    render(<Skills resumeData={mockResumeData} />);
    expect(screen.getByText(/Core Skills/i)).toBeInTheDocument();
  });

  it('renders within #skills section', () => {
    render(<Skills resumeData={mockResumeData} />);
    const section = document.querySelector('#skills');
    expect(section).toBeInTheDocument();
  });

  it('skills data comes from resumeData prop', () => {
    const customData = {
      skills: [
        { name: 'Test Skill', category: 'core', icon: 'test' }
      ]
    };
    render(<Skills resumeData={customData} />);
    expect(screen.getByText('Test Skill')).toBeInTheDocument();
  });

  it('applies skill-pill class for styling', () => {
    render(<Skills resumeData={mockResumeData} />);
    const firstPill = document.querySelector('.skill-pill');
    expect(firstPill).toBeInTheDocument();
    expect(firstPill.className).toContain('skill-pill');
  });
});
