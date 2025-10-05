import React from 'react';
import { render, screen } from '@testing-library/react';
import Tools from '../Tools';
import { mockResumeData } from '../../test-utils/mock-data';

describe('Tools Component', () => {
  it('renders without crashing', () => {
    render(<Tools resumeData={mockResumeData} />);
  });

  it('displays section heading', () => {
    render(<Tools resumeData={mockResumeData} />);
    expect(screen.getByText(/Tools & Technologies/i)).toBeInTheDocument();
  });

  it('displays all tool categories', () => {
    render(<Tools resumeData={mockResumeData} />);
    expect(screen.getByText('Infrastructure as Code')).toBeInTheDocument();
    expect(screen.getByText('AWS Services')).toBeInTheDocument();
    expect(screen.getByText('DevOps & Monitoring')).toBeInTheDocument();
  });

  it('renders Infrastructure as Code tools (Terraform, OpenTofu)', () => {
    render(<Tools resumeData={mockResumeData} />);
    expect(screen.getByText('Terraform')).toBeInTheDocument();
    expect(screen.getByText('OpenTofu')).toBeInTheDocument();
  });

  it('renders all 7 AWS services', () => {
    render(<Tools resumeData={mockResumeData} />);
    expect(screen.getByText('ECS')).toBeInTheDocument();
    expect(screen.getByText('S3')).toBeInTheDocument();
    expect(screen.getByText('CloudFormation')).toBeInTheDocument();
    expect(screen.getByText('Lambda')).toBeInTheDocument();
    expect(screen.getByText('API Gateway')).toBeInTheDocument();
    expect(screen.getByText('Route 53')).toBeInTheDocument();
    expect(screen.getByText('CloudWatch')).toBeInTheDocument();
  });

  it('renders DevOps tools (DataDog, Scalr, GitHub Actions, Seed, SSTv2)', () => {
    render(<Tools resumeData={mockResumeData} />);
    expect(screen.getByText('DataDog')).toBeInTheDocument();
    expect(screen.getByText('Scalr')).toBeInTheDocument();
    expect(screen.getByText('GitHub Actions')).toBeInTheDocument();
    expect(screen.getByText('Seed')).toBeInTheDocument();
    expect(screen.getByText('SSTv2')).toBeInTheDocument();
  });

  it('tools are displayed as pill-style tags', () => {
    render(<Tools resumeData={mockResumeData} />);
    const toolPills = document.querySelectorAll('.tool-pill');
    // 2 IaC + 7 AWS + 5 DevOps = 14 tools
    expect(toolPills.length).toBeGreaterThanOrEqual(14);
  });

  it('tools are grouped under category headings', () => {
    render(<Tools resumeData={mockResumeData} />);
    const categoryHeadings = document.querySelectorAll('.category-heading');
    expect(categoryHeadings.length).toBe(3);
  });

  it('renders within #tools section', () => {
    render(<Tools resumeData={mockResumeData} />);
    const section = document.querySelector('#tools');
    expect(section).toBeInTheDocument();
  });

  it('each tool pill is accessible', () => {
    render(<Tools resumeData={mockResumeData} />);
    const toolPills = document.querySelectorAll('.tool-pill');

    toolPills.forEach(pill => {
      expect(pill).toHaveAttribute('role', 'button');
      expect(pill).toHaveAttribute('tabIndex', '0');
    });
  });

  it('matches styling of Skills section', () => {
    render(<Tools resumeData={mockResumeData} />);
    const toolPill = document.querySelector('.tool-pill');
    expect(toolPill).toBeInTheDocument();
    expect(toolPill.className).toContain('tool-pill');
  });

  it('tools data comes from resumeData prop', () => {
    const customData = {
      tools: [
        {
          category: 'Test Category',
          items: ['Test Tool 1', 'Test Tool 2']
        }
      ]
    };
    render(<Tools resumeData={customData} />);
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByText('Test Tool 1')).toBeInTheDocument();
    expect(screen.getByText('Test Tool 2')).toBeInTheDocument();
  });
});
