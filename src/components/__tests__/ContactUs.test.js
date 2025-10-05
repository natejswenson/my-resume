import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactUs from '../ContactUs';
import { mockResumeData } from '../../test-utils/mock-data';

describe('ContactUs Component', () => {
  it('renders without crashing', () => {
    render(<ContactUs resumeData={mockResumeData} />);
  });

  it('displays contact section message', () => {
    render(<ContactUs resumeData={mockResumeData} />);
    expect(screen.getByText(/Feel free to contact me/i)).toBeInTheDocument();
  });

  it('displays LinkedIn ID', () => {
    render(<ContactUs resumeData={mockResumeData} />);
    expect(screen.getByText(/Linked in/i)).toBeInTheDocument();
    const linkedinText = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'h4' && content.includes(mockResumeData.linkedinId);
    });
    expect(linkedinText).toBeInTheDocument();
  });

  it('renders within contact section', () => {
    render(<ContactUs resumeData={mockResumeData} />);
    const section = document.querySelector('#contact');
    expect(section).toBeInTheDocument();
  });
});
