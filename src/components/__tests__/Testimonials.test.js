import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from '../Testimonials';
import { mockResumeData } from '../../test-utils/mock-data';

describe('Testimonials Component', () => {
  it('renders without crashing', () => {
    render(<Testimonials resumeData={mockResumeData} />);
  });

  it('displays section heading', () => {
    render(<Testimonials resumeData={mockResumeData} />);
    expect(screen.getByText('Client Testimonials')).toBeInTheDocument();
  });

  it('renders all testimonials', () => {
    render(<Testimonials resumeData={mockResumeData} />);

    mockResumeData.testimonials.forEach(item => {
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it('displays testimonial authors', () => {
    render(<Testimonials resumeData={mockResumeData} />);

    mockResumeData.testimonials.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it('renders testimonials in blockquote elements', () => {
    render(<Testimonials resumeData={mockResumeData} />);

    const blockquotes = document.querySelectorAll('blockquote');
    expect(blockquotes.length).toBe(mockResumeData.testimonials.length);
  });

  it('handles empty testimonials gracefully', () => {
    const emptyData = { ...mockResumeData, testimonials: [] };
    render(<Testimonials resumeData={emptyData} />);

    expect(screen.getByText('Client Testimonials')).toBeInTheDocument();
  });
});
