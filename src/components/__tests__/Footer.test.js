import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';
import { mockResumeData } from '../../test-utils/mock-data';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer resumeData={mockResumeData} />);
  });

  it('renders social links', () => {
    render(<Footer resumeData={mockResumeData} />);

    const socialLinks = document.querySelectorAll('.social-links a');
    expect(socialLinks.length).toBe(mockResumeData.socialLinks.length);
  });

  it('social links have correct URLs', () => {
    render(<Footer resumeData={mockResumeData} />);

    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach((link, index) => {
      expect(link).toHaveAttribute('href', mockResumeData.socialLinks[index].url);
    });
  });

  it('renders back-to-top button', () => {
    render(<Footer resumeData={mockResumeData} />);

    const backToTop = document.querySelector('#go-top');
    expect(backToTop).toBeInTheDocument();

    const link = backToTop.querySelector('a');
    expect(link).toHaveAttribute('href', '#home');
  });

  it('renders social icons with correct classes', () => {
    render(<Footer resumeData={mockResumeData} />);

    const icons = document.querySelectorAll('.social-links i');
    icons.forEach((icon, index) => {
      expect(icon).toHaveClass(mockResumeData.socialLinks[index].className);
    });
  });
});
