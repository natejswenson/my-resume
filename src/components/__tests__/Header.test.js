import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { mockResumeData } from '../../test-utils/mock-data';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header resumeData={mockResumeData} />);
  });

  it('displays user name', () => {
    render(<Header resumeData={mockResumeData} />);
    expect(screen.getByText(/I am Test User/i)).toBeInTheDocument();
  });

  it('displays user role', () => {
    render(<Header resumeData={mockResumeData} />);
    expect(screen.getByText(/Cloud & DevOps Engineer/i)).toBeInTheDocument();
  });

  it('displays role description', () => {
    render(<Header resumeData={mockResumeData} />);
    expect(screen.getByText(/AWS Specialist/i)).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<Header resumeData={mockResumeData} />);
    const links = screen.getAllByRole('link');

    // Should have social links plus navigation links
    expect(links.length).toBeGreaterThan(0);
  });

  it('social links have rel="noreferrer" attribute', () => {
    render(<Header resumeData={mockResumeData} />);
    const socialLinks = document.querySelectorAll('.social a');

    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('rel', 'noreferrer');
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  it('renders navigation menu', () => {
    render(<Header resumeData={mockResumeData} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
    expect(screen.getByText('Works')).toBeInTheDocument();
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('does not include Skills link in navigation', () => {
    render(<Header resumeData={mockResumeData} />);
    const navLinks = document.querySelectorAll('#nav a');
    const skillsLink = Array.from(navLinks).find(link => link.textContent === 'Skills');
    expect(skillsLink).toBeUndefined();
  });

  it('navigation order is correct without Skills', () => {
    render(<Header resumeData={mockResumeData} />);
    const navLinks = document.querySelectorAll('#nav li a');
    const linkTexts = Array.from(navLinks).map(link => link.textContent);

    expect(linkTexts).toEqual([
      'Home',
      'About',
      'Resume',
      'Tools',
      'Works',
      'Testimonials',
      'Contact'
    ]);
  });

  it('renders scroll down indicator', () => {
    render(<Header resumeData={mockResumeData} />);
    const scrollLink = document.querySelector('.scrolldown a');
    expect(scrollLink).toBeInTheDocument();
    expect(scrollLink).toHaveAttribute('href', '#about');
  });

  describe('Tools Navigation Link', () => {
    it('includes Tools link in navigation', () => {
      render(<Header resumeData={mockResumeData} />);
      const toolsLink = screen.getByText('Tools');
      expect(toolsLink).toBeInTheDocument();
    });

    it('Tools link has correct href', () => {
      render(<Header resumeData={mockResumeData} />);
      const toolsLink = screen.getByText('Tools');
      expect(toolsLink.closest('a')).toHaveAttribute('href', '#tools');
    });

    it('Tools link has smoothscroll class', () => {
      render(<Header resumeData={mockResumeData} />);
      const toolsLink = screen.getByText('Tools');
      expect(toolsLink.closest('a')).toHaveClass('smoothscroll');
    });

    it('navigation order is correct', () => {
      render(<Header resumeData={mockResumeData} />);
      const navLinks = Array.from(document.querySelectorAll('#nav a'));
      const linkTexts = navLinks.map(link => link.textContent);

      expect(linkTexts).toEqual([
        'Home',
        'About',
        'Resume',
        'Skills',
        'Tools',
        'Works',
        'Testimonials',
        'Contact'
      ]);
    });
  });
});
