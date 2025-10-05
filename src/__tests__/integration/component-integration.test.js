import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';

describe('Component Integration Tests', () => {
  it('renders all child components within App', () => {
    render(<App />);

    // Verify all main components are rendered
    expect(document.querySelector('header')).toBeInTheDocument();
    expect(document.querySelector('#about')).toBeInTheDocument();
    expect(document.querySelector('#resume')).toBeInTheDocument();
    expect(document.querySelector('#portfolio')).toBeInTheDocument();
    expect(document.querySelector('#testimonials')).toBeInTheDocument();
    expect(document.querySelector('#contact')).toBeInTheDocument();
    expect(document.querySelector('footer')).toBeInTheDocument();
  });

  it('components receive correct props from App', () => {
    const { container } = render(<App />);

    // Check that components render with data (indicating props were passed)
    const header = container.querySelector('header');
    expect(header.textContent).toBeTruthy();

    const about = container.querySelector('#about');
    expect(about.textContent).toBeTruthy();
  });

  it('Resume component integrates Education, Work, and Skills', () => {
    render(<App />);

    const resumeSection = document.querySelector('#resume');
    expect(resumeSection).toBeInTheDocument();

    // Verify subsections are present
    expect(resumeSection.textContent).toContain('Education');
    expect(resumeSection.textContent).toContain('Experience');
    expect(resumeSection.textContent).toContain('Skills');
  });

  it('Work component integrates WorkAchievements component', () => {
    render(<App />);

    const resumeSection = document.querySelector('#resume');

    // Work history should include achievements (nested lists)
    const lists = resumeSection.querySelectorAll('.ui.list');
    expect(lists.length).toBeGreaterThan(0);
  });

  it('maintains consistent styling across components', () => {
    const { container } = render(<App />);

    // Check for semantic UI classes across components
    const semanticElements = container.querySelectorAll('.ui');
    expect(semanticElements.length).toBeGreaterThan(0);
  });

  it('components are rendered in correct order', () => {
    const { container } = render(<App />);

    const sections = container.querySelectorAll('section');
    const sectionIds = Array.from(sections).map(s => s.id).filter(id => id);

    // Verify sections appear in expected order
    expect(sectionIds.indexOf('about')).toBeLessThan(sectionIds.indexOf('resume'));
    expect(sectionIds.indexOf('resume')).toBeLessThan(sectionIds.indexOf('portfolio'));
    expect(sectionIds.indexOf('portfolio')).toBeLessThan(sectionIds.indexOf('testimonials'));
  });
});
