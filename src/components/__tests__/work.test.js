import React from 'react';
import { render, screen } from '@testing-library/react';
import Work from '../work';

// Work component uses resume.json directly
describe('Work Component', () => {
  it('renders without crashing', () => {
    render(<Work />);
  });

  it('displays company names', () => {
    render(<Work />);
    // Check for companies from resume.json
    expect(screen.getByText(/GoodLeap/i) || screen.getByText(/Fannie Mae/i)).toBeInTheDocument();
  });

  it('displays job titles', () => {
    render(<Work />);
    expect(screen.getByText(/Senior DevOps Engineer/i) || screen.getByText(/DevOps Engineer/i)).toBeInTheDocument();
  });

  it('renders calendar icons for dates', () => {
    render(<Work />);
    const calendarIcons = document.querySelectorAll('.calendar.icon');
    expect(calendarIcons.length).toBeGreaterThan(0);
  });

  it('displays employment dates', () => {
    render(<Work />);
    expect(screen.getByText(/Current/i)).toBeInTheDocument();
  });

  it('renders work history in list format', () => {
    render(<Work />);
    const lists = document.querySelectorAll('.ui.list');
    expect(lists.length).toBeGreaterThan(0);
  });

  it('includes achievements component', () => {
    render(<Work />);
    // Achievements are rendered as list items
    const listItems = document.querySelectorAll('li');
    expect(listItems.length).toBeGreaterThan(0);
  });
});
