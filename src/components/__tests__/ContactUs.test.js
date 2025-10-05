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
    expect(screen.getByText(mockResumeData.linkedinId)).toBeInTheDocument();
  });

  it('renders within contact section', () => {
    render(<ContactUs resumeData={mockResumeData} />);
    const section = document.querySelector('#contact');
    expect(section).toBeInTheDocument();
  });
});
