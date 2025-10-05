import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import resumeData from '../../resume.json';

describe('Data Flow Integration Tests', () => {
  it('loads resume data from JSON file correctly', () => {
    render(<App />);

    // Verify data is loaded and accessible
    expect(resumeData).toBeDefined();
    expect(resumeData.name).toBeDefined();
    expect(resumeData.work).toBeDefined();
  });

  it('propagates resume data to Header component', () => {
    render(<App />);

    // Check that header displays data from resume.json
    expect(screen.getByText(new RegExp(resumeData.name, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(resumeData.role, 'i'))).toBeInTheDocument();
  });

  it('propagates resume data to About component', () => {
    render(<App />);

    // Check that about section displays data from resume.json
    const aboutSection = document.querySelector('#about');
    expect(aboutSection).toBeInTheDocument();
    expect(aboutSection.textContent).toContain(resumeData.name);
  });

  it('propagates resume data to Portfolio component', () => {
    render(<App />);

    // Verify portfolio items are rendered
    resumeData.portfolio.forEach(item => {
      if (item.name) {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      }
    });
  });

  it('propagates resume data to Testimonials component', () => {
    render(<App />);

    // Verify testimonials are rendered
    resumeData.testimonials.forEach(item => {
      if (item.name) {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      }
    });
  });

  it('handles missing optional data gracefully', () => {
    render(<App />);

    // Application should not crash even if some data is missing
    const app = document.querySelector('.App');
    expect(app).toBeInTheDocument();
  });

  it('validates data structure matches expected format', () => {
    expect(resumeData).toHaveProperty('name');
    expect(resumeData).toHaveProperty('role');
    expect(resumeData).toHaveProperty('socialLinks');
    expect(resumeData).toHaveProperty('education');
    expect(resumeData).toHaveProperty('work');
    expect(resumeData).toHaveProperty('skills');
    expect(resumeData).toHaveProperty('portfolio');
    expect(resumeData).toHaveProperty('testimonials');

    // Validate arrays
    expect(Array.isArray(resumeData.socialLinks)).toBe(true);
    expect(Array.isArray(resumeData.education)).toBe(true);
    expect(Array.isArray(resumeData.work)).toBe(true);
    expect(Array.isArray(resumeData.skills)).toBe(true);
    expect(Array.isArray(resumeData.portfolio)).toBe(true);
    expect(Array.isArray(resumeData.testimonials)).toBe(true);

    // Validate LinkedIn updates
    expect(resumeData.role).toContain('Cloud');
    expect(resumeData.aboutme).toContain('AWS');
    expect(resumeData.education[0].UniversityName).toContain('Duluth');
  });
});
