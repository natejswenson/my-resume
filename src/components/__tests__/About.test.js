import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';
import { mockResumeData } from '../../test-utils/mock-data';

describe('About Component', () => {
  it('renders without crashing', () => {
    render(<About resumeData={mockResumeData} />);
  });

  it('displays about me text', () => {
    render(<About resumeData={mockResumeData} />);
    expect(screen.getByText(/Cloud Computing and AWS/i)).toBeInTheDocument();
    expect(screen.getByText(/scalable cloud infrastructure/i)).toBeInTheDocument();
  });

  it('displays hobbies section', () => {
    render(<About resumeData={mockResumeData} />);
    expect(screen.getByText('Outside of Work')).toBeInTheDocument();
    expect(screen.getByText(mockResumeData.hobies)).toBeInTheDocument();
  });

  it('displays contact details section', () => {
    render(<About resumeData={mockResumeData} />);
    expect(screen.getByText('Contact Details')).toBeInTheDocument();
  });

  it('displays user name in contact details', () => {
    render(<About resumeData={mockResumeData} />);
    expect(screen.getByText(mockResumeData.name)).toBeInTheDocument();
  });

  it('displays address', () => {
    render(<About resumeData={mockResumeData} />);
    expect(screen.getByText(mockResumeData.address)).toBeInTheDocument();
  });

  it('displays website', () => {
    render(<About resumeData={mockResumeData} />);
    expect(screen.getByText(mockResumeData.website)).toBeInTheDocument();
  });

  it('displays profile picture', () => {
    render(<About resumeData={mockResumeData} />);
    const profilePic = document.querySelector('.profile-pic');
    expect(profilePic).toBeInTheDocument();
    expect(profilePic).toHaveAttribute('src', 'images/profilepic.jpg');
  });
});
