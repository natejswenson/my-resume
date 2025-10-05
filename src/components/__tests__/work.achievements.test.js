import React from 'react';
import { render } from '@testing-library/react';
import WorkAchievements from '../work.achievements';

describe('WorkAchievements Component', () => {
  const mockWorkData = {
    Achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3'
    ]
  };

  it('renders without crashing', () => {
    render(<WorkAchievements a={mockWorkData} />);
  });

  it('renders all achievements', () => {
    const { container } = render(<WorkAchievements a={mockWorkData} />);

    const listItems = container.querySelectorAll('.item');
    expect(listItems.length).toBe(mockWorkData.Achievements.length);
  });

  it('displays achievement text', () => {
    const { getByText } = render(<WorkAchievements a={mockWorkData} />);

    mockWorkData.Achievements.forEach(achievement => {
      expect(getByText(achievement)).toBeInTheDocument();
    });
  });

  it('renders as list items', () => {
    const { container } = render(<WorkAchievements a={mockWorkData} />);

    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(mockWorkData.Achievements.length);
  });

  it('handles empty achievements array', () => {
    const emptyData = { Achievements: [] };
    const { container } = render(<WorkAchievements a={emptyData} />);

    const listItems = container.querySelectorAll('.item');
    expect(listItems.length).toBe(0);
  });
});
