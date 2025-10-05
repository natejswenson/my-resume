import React from 'react';
import { render, screen } from '@testing-library/react';
import Tools from '../Tools';
import { mockResumeData } from '../../test-utils/mock-data';

describe('Tools Component - Card-Based Redesign', () => {
  it('renders without crashing', () => {
    render(<Tools resumeData={mockResumeData} />);
  });

  it('displays section heading', () => {
    render(<Tools resumeData={mockResumeData} />);
    expect(screen.getByText(/Tools & Technologies/i)).toBeInTheDocument();
  });

  it('displays tool cards with icons and labels', () => {
    render(<Tools resumeData={mockResumeData} />);
    const toolCards = document.querySelectorAll('.tool-card');
    expect(toolCards.length).toBeGreaterThan(0);
  });

  it('renders with illustrative icon containers', () => {
    render(<Tools resumeData={mockResumeData} />);
    const iconContainers = document.querySelectorAll('.icon-container');
    expect(iconContainers.length).toBeGreaterThan(0);
  });

  it('displays icons for each tool', () => {
    render(<Tools resumeData={mockResumeData} />);
    const toolIcons = document.querySelectorAll('.tool-icon');
    expect(toolIcons.length).toBeGreaterThan(0);
  });

  it('tool cards are in a responsive grid layout', () => {
    render(<Tools resumeData={mockResumeData} />);
    const toolsGrid = document.querySelector('.tools-grid');
    expect(toolsGrid).toBeInTheDocument();
  });

  it('renders common tools (Terraform, AWS, ECS, S3, Lambda)', () => {
    render(<Tools resumeData={mockResumeData} />);
    expect(screen.getByText('Terraform')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
    expect(screen.getByText('ECS')).toBeInTheDocument();
    expect(screen.getByText('S3')).toBeInTheDocument();
    expect(screen.getByText('Lambda')).toBeInTheDocument();
  });

  it('renders within #tools section', () => {
    render(<Tools resumeData={mockResumeData} />);
    const section = document.querySelector('#tools');
    expect(section).toBeInTheDocument();
  });

  it('tool cards are keyboard accessible', () => {
    render(<Tools resumeData={mockResumeData} />);
    const toolCards = document.querySelectorAll('.tool-card');

    toolCards.forEach(card => {
      expect(card).toHaveAttribute('tabIndex', '0');
    });
  });

  it('section heading is prominent and centered', () => {
    render(<Tools resumeData={mockResumeData} />);
    const heading = screen.getByText(/Tools & Technologies/i);
    expect(heading).toBeInTheDocument();
    expect(heading.className).toContain('section-heading');
  });

  it('displays tool descriptions when provided', () => {
    render(<Tools resumeData={mockResumeData} />);
    const descriptions = document.querySelectorAll('.tool-description');
    expect(descriptions.length).toBeGreaterThan(0);
  });

  it('icons have proper accessibility attributes', () => {
    render(<Tools resumeData={mockResumeData} />);
    const icons = document.querySelectorAll('.tool-icon');
    icons.forEach(icon => {
      expect(icon).toHaveAttribute('alt');
    });
  });

  it('applies tool-card class for styling', () => {
    render(<Tools resumeData={mockResumeData} />);
    const firstCard = document.querySelector('.tool-card');
    expect(firstCard).toBeInTheDocument();
    expect(firstCard.className).toContain('tool-card');
  });

  it('renders React Icons correctly', () => {
    render(<Tools resumeData={mockResumeData} />);
    const toolIcons = document.querySelectorAll('.tool-icon');
    expect(toolIcons.length).toBeGreaterThan(0);
  });

  it('handles missing icon gracefully', () => {
    const dataWithoutIcon = {
      tools: [
        { name: 'No Icon Tool', category: 'Test', description: 'Test' }
      ]
    };
    render(<Tools resumeData={dataWithoutIcon} />);
    expect(screen.getByText('No Icon Tool')).toBeInTheDocument();
  });

  it('tools data comes from resumeData prop', () => {
    const customData = {
      tools: [
        {
          name: 'Test Tool',
          category: 'Test Category',
          icon: 'terraform',
          description: 'Test description'
        }
      ]
    };
    render(<Tools resumeData={customData} />);
    expect(screen.getByText('Test Tool')).toBeInTheDocument();
  });
});
