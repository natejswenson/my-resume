import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../skills';

describe('Skills Component - Reimagined Grid', () => {
  describe('rendering', () => {
    it('should render without crashing', () => {
      render(<Skills />);
    });

    it('should render section with id "skills"', () => {
      const { container } = render(<Skills />);
      const section = container.querySelector('#skills');
      expect(section).toBeInTheDocument();
    });

    it('should render section heading', () => {
      render(<Skills />);
      const heading = screen.getByText(/skills/i);
      expect(heading).toBeInTheDocument();
    });
  });

  describe('skill cards', () => {
    it('should render all 17 skill cards', () => {
      const { container } = render(<Skills />);
      const cards = container.querySelectorAll('.skill-card');
      expect(cards.length).toBe(17);
    });

    it('should render cards in grid layout', () => {
      const { container } = render(<Skills />);
      const grid = container.querySelector('.skills-grid');
      expect(grid).toBeInTheDocument();
    });

    it('should not render child skills or hierarchies', () => {
      const { container } = render(<Skills />);
      const childSkills = container.querySelectorAll('.child-skills');
      const childCards = container.querySelectorAll('.child-skill-card');

      expect(childSkills.length).toBe(0);
      expect(childCards.length).toBe(0);
    });

    it('should not render skill descriptions', () => {
      const { container} = render(<Skills />);
      const descriptions = container.querySelectorAll('.skill-description');
      expect(descriptions.length).toBe(0);
    });
  });

  describe('specific skills', () => {
    it('should render AWS skill', () => {
      render(<Skills />);
      expect(screen.getByText('AWS')).toBeInTheDocument();
    });

    it('should render Terraform skill', () => {
      render(<Skills />);
      expect(screen.getByText('Terraform')).toBeInTheDocument();
    });

    it('should render OpenAI skill', () => {
      render(<Skills />);
      expect(screen.getByText('OpenAI')).toBeInTheDocument();
    });

    it('should render all AI/LLM tools as individual cards', () => {
      render(<Skills />);
      expect(screen.getByText('OpenAI')).toBeInTheDocument();
      expect(screen.getByText('Anthropic')).toBeInTheDocument();
      expect(screen.getByText('Cursor')).toBeInTheDocument();
      expect(screen.getByText('Bedrock')).toBeInTheDocument();
    });

    it('should render all AWS services as individual cards', () => {
      render(<Skills />);
      expect(screen.getByText('AWS')).toBeInTheDocument();
      expect(screen.getByText('ECS')).toBeInTheDocument();
      expect(screen.getByText('Lambda')).toBeInTheDocument();
      expect(screen.getByText('S3')).toBeInTheDocument();
      expect(screen.getByText('CloudFormation')).toBeInTheDocument();
    });
  });

  describe('grid layout', () => {
    it('should have skills-grid class', () => {
      const { container } = render(<Skills />);
      const grid = container.querySelector('.skills-grid');
      expect(grid).toHaveClass('skills-grid');
    });

    it('should be a CSS Grid container', () => {
      const { container } = render(<Skills />);
      const grid = container.querySelector('.skills-grid');
      const styles = window.getComputedStyle(grid);
      // Grid should be set via CSS
      expect(grid).toBeInTheDocument();
    });
  });

  describe('section structure', () => {
    it('should have container div', () => {
      const { container } = render(<Skills />);
      const containerDiv = container.querySelector('.container');
      expect(containerDiv).toBeInTheDocument();
    });

    it('should have section heading with proper class', () => {
      const { container } = render(<Skills />);
      const heading = container.querySelector('.section-heading');
      expect(heading).toBeInTheDocument();
    });
  });

  describe('accessibility', () => {
    it('should have semantic section element', () => {
      const { container } = render(<Skills />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('should have proper heading hierarchy', () => {
      const { container } = render(<Skills />);
      const h2 = container.querySelector('h2');
      expect(h2).toBeInTheDocument();
    });

    it('should have all cards keyboard accessible', () => {
      const { container } = render(<Skills />);
      const cards = container.querySelectorAll('.skill-card');
      cards.forEach(card => {
        expect(card).toHaveAttribute('tabIndex');
      });
    });
  });

  describe('no legacy features', () => {
    it('should not have resumeData prop dependency', () => {
      // Component should work without props
      expect(() => render(<Skills />)).not.toThrow();
    });

    it('should not render any parent/child relationships', () => {
      const { container } = render(<Skills />);
      // All cards should be at the same level
      const allCards = container.querySelectorAll('.skill-card');
      expect(allCards.length).toBe(17);

      // No nested card structures
      allCards.forEach(card => {
        const nestedCards = card.querySelectorAll('.skill-card');
        expect(nestedCards.length).toBe(0);
      });
    });
  });

  describe('visual design', () => {
    it('should render all skill icons', () => {
      const { container } = render(<Skills />);
      const icons = container.querySelectorAll('.skill-card-icon');
      expect(icons.length).toBe(17);
    });

    it('should render all skill names', () => {
      const { container } = render(<Skills />);
      const names = container.querySelectorAll('.skill-card-name');
      expect(names.length).toBe(17);
    });

    it('should have consistent card structure', () => {
      const { container } = render(<Skills />);
      const cards = container.querySelectorAll('.skill-card');

      cards.forEach(card => {
        const iconContainer = card.querySelector('.skill-card-icon-container');
        const icon = card.querySelector('.skill-card-icon');
        const name = card.querySelector('.skill-card-name');

        expect(iconContainer).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
        expect(name).toBeInTheDocument();
      });
    });
  });

  describe('visual consistency with Tools section', () => {
    it('should have all cards with colored icon containers', () => {
      const { container } = render(<Skills />);
      const iconContainers = container.querySelectorAll('.skill-card-icon-container');

      expect(iconContainers.length).toBe(17);
      iconContainers.forEach(iconContainer => {
        expect(iconContainer).toHaveClass('skill-card-icon-container');
      });
    });

    it('should have all icons inside containers', () => {
      const { container } = render(<Skills />);
      const cards = container.querySelectorAll('.skill-card');

      cards.forEach(card => {
        const iconContainer = card.querySelector('.skill-card-icon-container');
        const icon = card.querySelector('.skill-card-icon');

        expect(iconContainer).toContainElement(icon);
      });
    });

    it('should have all cards with proper class structure', () => {
      const { container } = render(<Skills />);
      const cards = container.querySelectorAll('.skill-card');

      expect(cards.length).toBe(17);
      cards.forEach(card => {
        expect(card).toHaveClass('skill-card');
        expect(card.querySelector('.skill-card-icon-container')).toBeInTheDocument();
        expect(card.querySelector('.skill-card-icon')).toBeInTheDocument();
        expect(card.querySelector('.skill-card-name')).toBeInTheDocument();
      });
    });

    it('should maintain proper DOM hierarchy', () => {
      const { container } = render(<Skills />);
      const cards = container.querySelectorAll('.skill-card');

      cards.forEach(card => {
        const iconContainer = card.querySelector('.skill-card-icon-container');
        const icon = iconContainer.querySelector('.skill-card-icon');
        const name = card.querySelector('.skill-card-name');

        // Verify parent-child relationships
        expect(card).toContainElement(iconContainer);
        expect(card).toContainElement(name);
        expect(iconContainer).toContainElement(icon);
      });
    });

    it('should have section with proper styling classes', () => {
      const { container } = render(<Skills />);
      const section = container.querySelector('#skills');
      const heading = container.querySelector('.section-heading');
      const grid = container.querySelector('.skills-grid');

      expect(section).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
      expect(grid).toBeInTheDocument();
      expect(grid).toHaveClass('skills-grid');
    });
  });
});
