import React from 'react';
import { render, screen } from '@testing-library/react';
import Portfolio from '../Portfolio';
import { mockResumeData } from '../../test-utils/mock-data';

describe('Portfolio Component', () => {
  it('renders without crashing', () => {
    render(<Portfolio resumeData={mockResumeData} />);
  });

  it('displays portfolio section heading', () => {
    render(<Portfolio resumeData={mockResumeData} />);
    expect(screen.getByText(/Check Out Some of My Works/i)).toBeInTheDocument();
  });

  it('renders all portfolio items', () => {
    render(<Portfolio resumeData={mockResumeData} />);

    mockResumeData.portfolio.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it('displays project descriptions', () => {
    render(<Portfolio resumeData={mockResumeData} />);

    mockResumeData.portfolio.forEach(item => {
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it('renders project images with alt text', () => {
    render(<Portfolio resumeData={mockResumeData} />);

    const images = document.querySelectorAll('.item-img');
    expect(images.length).toBe(mockResumeData.portfolio.length);

    images.forEach((img, index) => {
      expect(img).toHaveAttribute('alt', mockResumeData.portfolio[index].name);
    });
  });

  it('links to project URLs', () => {
    render(<Portfolio resumeData={mockResumeData} />);

    mockResumeData.portfolio.forEach(item => {
      const link = screen.getByRole('link', { name: new RegExp(item.name) });
      expect(link).toHaveAttribute('href', item.url);
    });
  });

  it('handles empty portfolio gracefully', () => {
    const emptyData = { ...mockResumeData, portfolio: [] };
    render(<Portfolio resumeData={emptyData} />);

    expect(screen.getByText(/Check Out Some of My Works/i)).toBeInTheDocument();
  });
});
