import { render } from '@testing-library/react';
import { mockResumeData } from './mock-data';

// Custom render function that includes default props
export const renderWithProps = (Component, props = {}) => {
  const defaultProps = {
    resumeData: mockResumeData,
    ...props
  };

  return render(<Component {...defaultProps} />);
};

// Helper to check if element has correct accessibility attributes
export const checkAccessibility = (element) => {
  const checks = {
    hasAltText: element.tagName === 'IMG' ? element.hasAttribute('alt') : true,
    hasAriaLabel: element.hasAttribute('aria-label') || element.hasAttribute('aria-labelledby'),
    hasRole: element.hasAttribute('role') || element.tagName.match(/^(BUTTON|A|INPUT|TEXTAREA|SELECT)$/)
  };

  return checks;
};
